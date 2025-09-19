'use client'
import { Loader2Icon, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FormEvent, useState } from "react";
import { toast, Toaster } from "@pheralb/toast";


export function SubscribeNewsletter({
    ctaButton , emailPlaceholder, successMessage, errorMessage, loadingAction
    , setIsSubscribed
} : {
    ctaButton: string
    emailPlaceholder: string
    successMessage: string
    errorMessage: string
    loadingAction: string
    setIsSubscribed: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e:  FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        body: JSON.stringify({ email }),
      });
      const data = await response.json();

      if(data.ok) {
        toast.success({
          text: successMessage,
        })
        setIsSubscribed(true)
      } else {
        toast.error({
          text: errorMessage,
          description: data.error,
        })
      }

    } catch(error) {
      toast.error({
        text: errorMessage,
        description: error instanceof Error ? error.message : 'Unknown error',
      })
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form 
      onSubmit={onSubmit}
      className="flex flex-col gap-2 sm:flex-row items-stretch sm:items-center p-3"
    >
      <Toaster position="top-right" />
      <Input
        type="email"
        placeholder={emailPlaceholder}
        className="flex-1 min-w-[200px] px-4 py-2 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary/60 transition"
        required
        name="email"
      />
      <Button type="submit" disabled={isSubmitting} className="text-white px-4 py-2 rounded-lg">
        {
          !isSubmitting && <Send className="size-4" />
        }
        {isSubmitting ? 
          <div className="flex items-center gap-2">
            <Loader2Icon className="w-4 h-4 animate-spin" />
            <span>{ loadingAction }</span>
          </div>
           : ctaButton
        }
      </Button>
    </form>
  )
}