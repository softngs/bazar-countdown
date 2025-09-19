import { ImageResponse } from "next/og"
import Image from "next/image"
export const runtime = "edge"

export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function OpengraphImage() {
  const launchDate = new Date("2025-09-27T00:00:00Z").getTime()
  const now = Date.now()
  const diff = launchDate - now

  const days = Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0)

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0a0a0a, #1a1a1a)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontFamily: "sans-serif",
          padding: "40px",
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <Image
          src="/primary-full.svg"
          alt="Bazxar"
          width={200}
          height={80}
          className="h-16 md:h-20 w-auto"
          priority
        />

        {/* Subtitle */}
        <div style={{ fontSize: 28, marginBottom: 40, color: "#ccc" }}>
          La nueva plataforma para comprar y vender en línea
        </div>

        {/* Countdown */}
        <div
          style={{
            display: "flex",
            gap: "30px",
            fontSize: 60,
            fontWeight: "bold",
            marginBottom: 40,
          }}
        >
          <div style={{ color: "#7638CF" }}>{days}</div>
          <div style={{ fontSize: 24, color: "#aaa", alignSelf: "flex-end" }}>
            días restantes
          </div>
        </div>

        {/* Benefits short */}
        <div style={{ fontSize: 22, lineHeight: 1.4, maxWidth: 800 }}>
          📦 Catálogos online <br />
          🛒 Menús digitales <br />
          🛵 Pedidos a domicilio o en tienda <br />
          🔗 Códigos QR y links compartibles <br />
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: "50px",
            fontSize: 20,
            color: "#aaa",
          }}
        >
          Hecho con ❤️ por SoftNgs Solutions
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}