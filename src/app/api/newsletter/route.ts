
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { subscribers } from "@/lib/db/schema";
import db from "@/lib/db";
import { z } from "zod";
import { ratelimit } from "@/lib/upstash";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "127.0.0.1";
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
  }

  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  const emailMatch = z.string().email().safeParse(email);
  if (!emailMatch.success) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
  }

  const existingSubscriber = await db.select().from(subscribers).where(eq(subscribers.email, email));
  if (existingSubscriber.length > 0) {
    // Response successfully because the email is already subscribed
    return NextResponse.json({ ok: true }, { status: 201 });
  }

  try {
    await db.insert(subscribers).values({ email });
  } catch (error) {
    console.error('Failed to subscribe to newsletter.', error);
    return NextResponse.json({ error: `Failed to subscribe to newsletter: ${error instanceof Error ? error.message : 'Unknown error'}` }, { status: 500 });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}