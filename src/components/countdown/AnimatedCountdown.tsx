"use client"

import React from "react"
import NumberFlow from "@number-flow/react"

interface AnimatedCountdownProps {
  days: number
  hours: number
  minutes: number
  seconds: number
  language: "es" | "en"
}

export function AnimatedCountdown({ days, hours, minutes, seconds, language }: AnimatedCountdownProps) {
  const countdownItems = [
    { 
      label: language === "es" ? "Días" : "Days", 
      value: days 
    },
    { 
      label: language === "es" ? "Horas" : "Hours", 
      value: hours 
    },
    { 
      label: language === "es" ? "Minutos" : "Minutes", 
      value: minutes 
    },
    { 
      label: language === "es" ? "Segundos" : "Seconds", 
      value: seconds 
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto animate-scale-up">
      {countdownItems.map((item, index) => (
        <div 
          key={item.label} 
          className="bg-card/20 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-border/20"
          style={{ animationDelay: `${0.6 + index * 0.1}s` }}
        >
          <div className="text-3xl md:text-5xl font-bold text-primary mb-2 font-mono">
            <NumberFlow
              value={item.value}
              format={{ minimumIntegerDigits: 2 }}
              transformTiming={{
                duration: 600,
                easing: "cubic-bezier(0.4, 0, 0.2, 1)"
              }}
              spinTiming={{
                duration: 600,
                easing: "cubic-bezier(0.4, 0, 0.2, 1)"
              }}
              opacityTiming={{
                duration: 300,
                easing: "ease-out"
              }}
            />
          </div>
          <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  )
}
