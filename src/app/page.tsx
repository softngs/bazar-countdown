"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import Link from "next/link"
import { SubscribeNewsletter } from "@/components/newsletter/newsletter"
import { AnimatedCountdown } from "@/components/countdown/AnimatedCountdown"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownPage() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [language, setLanguage] = useState<"es" | "en">("es")

  const targetDate = new Date("2025-10-02T00:00:00Z").getTime()

  const content = {
    es: {
      title: "Bazxar llega muy pronto",
      subtitle: "La nueva plataforma para comprar y vender en línea",
      ctaButton: "Suscríbete para enterarte primero",
      emailPlaceholder: "Ingresa tu email",
      successMessage: "¡Gracias! Te notificaremos cuando lancemos.",
      errorMessage: "Error al suscribirte!",
      emailDescription: "Únete a nuestra lista exclusiva para acceso temprano y actualizaciones.",
      launchOffer: "Gratis por los primeros 3 meses para probar toda la infraestructura y recibir soporte.",
      futurePlans: "Más adelante: un plan gratis y planes avanzados de pago.",
      madeBy: "Hecho con ❤️ por SoftNgs Solutions",
      loadingAction : "Procesando..."
    },
    en: {
      title: "Bazxar is coming soon",
      subtitle: "The new platform to buy and sell online",
      ctaButton: "Subscribe to be the first to know",
      emailPlaceholder: "Enter your email",
      errorMessage: "Failed to subscribe!",
      successMessage: "Thanks! We'll notify you when we launch.",
      emailDescription: "Join our exclusive list for early access and updates.",
      launchOffer: "Free for the first 3 months to test the full infrastructure and receive support.",
      futurePlans: "Later: a free plan and advanced paid plans.",
      madeBy: "Made with ❤️ by SoftNgs Solutions",
      loadingAction : "Processing..."
    },
  }

  const benefits = [
    {
      icon: "🛒",
      title: { es: "Compra para todos", en: "Shopping for Everyone" },
      description: {
        es: "Una plataforma para que todos los usuarios puedan comprar fácilmente.",
        en: "A platform where every user can shop effortlessly.",
      },
    },
    {
      icon: "🏬",
      title: { es: "Tiendas Online", en: "Online Stores" },
      description: {
        es: "Crea y administra tu propia tienda con pedidos en línea y gestión simple.",
        en: "Create and manage your own store with online orders and simple management.",
      },
    },
    {
      icon: "🍽️",
      title: { es: "Menús Digitales", en: "Digital Menus" },
      description: {
        es: "Restaurantes con carta y menú online, fácil de compartir y optimizado para SEO.",
        en: "Restaurants with online menus, easy to share and SEO-optimized.",
      },
    },
    {
      icon: "📦",
      title: { es: "Catálogos Online", en: "Online Catalogs" },
      description: {
        es: "Catalogos en línea para atraer más clientes y recibir ordenes online.",
        en: "Online catalogs to attract more customers and receive orders online.",
      },
    },
    {
      icon: "🛵",
      title: { es: "Pedidos y Entregas", en: "Orders & Delivery" },
      description: {
        es: "Los usuarios podrán pedir a domicilio o recoger en tienda según prefieran.",
        en: "Users can choose delivery to home or in-store pickup as they prefer.",
      },
    },
    {
      icon: "🔗",
      title: { es: "QR & Links", en: "QR & Share Links" },
      description: {
        es: "Genera códigos QR o enlaces directos para compartir tu tienda fácilmente.",
        en: "Generate QR codes or share links to promote your store easily.",
      },
    },
    
  ]

  useEffect(() => {
    setMounted(true)

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])


  const { resolvedTheme} = useTheme()
  
  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen flex flex-col px-4 relative overflow-hidden">
      {/* Language Toggle */}
      <div className="absolute top-4 right-4 z-20">
        <div className="flex bg-card/20 backdrop-blur-sm rounded-lg p-1 border border-border/20">
          <button
            onClick={() => setLanguage("es")}
            className={`px-3 py-1 rounded text-sm transition-all ${
              language === "es" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            ES
          </button>
          <button
            onClick={() => setLanguage("en")}
            className={`px-3 py-1 rounded text-sm transition-all ${
              language === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            EN
          </button>
          <ThemeToggle />
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center space-y-8 max-w-4xl mx-auto relative z-10 animate-fade-in py-16">
        {/* Logo/Brand */}
        <div className="space-y-2 animate-scale-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex flex-col items-center w-full">
            {
              resolvedTheme === "dark" ? 
              <Image
                src="/primary-full.svg"
                alt="Bazxar"
                width={200}
                height={80}
                className="h-16 md:h-20 w-auto"
                priority
              /> : 
              <Image
                src="/black-only-full.svg"
                alt="Bazxar"
                width={200}
                height={80}
                className="h-16 md:h-20 w-auto"
                priority>

                </Image>
              
            }
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Main Title */}
        <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h1 className="text-3xl md:text-5xl font-bold text-balance">{content[language].title} 🚀</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {content[language].subtitle}
          </p>
        </div>

        {/* Countdown Timer */}
        <AnimatedCountdown
          days={timeLeft.days}
          hours={timeLeft.hours}
          minutes={timeLeft.minutes}
          seconds={timeLeft.seconds}
          language={language}
        />

        {/* Email Signup */}
        <div className="max-w-md mx-auto space-y-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          {!isSubscribed ? (
              <SubscribeNewsletter 
                setIsSubscribed={setIsSubscribed}
                ctaButton={content[language].ctaButton}
                emailPlaceholder={content[language].emailPlaceholder}
                successMessage={content[language].successMessage}
                errorMessage={content[language].errorMessage}
                loadingAction={content[language].loadingAction}
              />
          ) : (
            <div className="bg-card/20 backdrop-blur-sm rounded-lg p-4 border border-border/20">
              <p className="text-primary font-semibold">✓ {content[language].successMessage}</p>
            </div>
          )}
          <p className="text-sm text-muted-foreground">{content[language].emailDescription}</p>
        </div>
      </main>

      <section className="max-w-6xl mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card/20 backdrop-blur-sm rounded-lg p-6 border border-border/20 animate-fade-in hover:bg-card/30 transition-all duration-300"
              style={{ animationDelay: `${1 + index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h2 className="text-xl font-semibold mb-2 text-foreground">{benefit.title[language]}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description[language]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center relative z-10">
        <div
          className="bg-card/20 backdrop-blur-sm rounded-lg p-8 border border-border/20 animate-fade-in"
          style={{ animationDelay: "1.5s" }}
        >
          <h2 className="text-2xl font-bold mb-6 text-foreground">
            {language === "es" ? "Oferta de Lanzamiento" : "Launch Offer"}
          </h2>
          <p className="text-lg text-primary font-semibold mb-4">{content[language].launchOffer}</p>
          <p className="text-muted-foreground">{content[language].futurePlans}</p>
        </div>
      </section>

      <footer className="py-8 relative z-10">
        <div className="flex flex-col items-center space-y-4 animate-fade-in" style={{ animationDelay: "1.8s" }}>
          <div className="flex justify-center space-x-6">
            <a
              href="https://instagram.com/softngs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-4.358-.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.057 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
          <Link href="https://softngs.com" target="_blank" className="underline underline-primary">
            <p className="text-sm text-muted-foreground">{content[language].madeBy}</p>
          </Link>
          
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scale-up {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-scale-up {
          animation: scale-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}
