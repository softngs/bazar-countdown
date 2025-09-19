import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@pheralb/toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bazxar – Compras Online y Gestión de Tiendas",
    template: "%s | Bazxar",
  },
  description:
    "Bazxar: La nueva generación de plataforma para compras online, creación y administración de tiendas, menús de restaurantes y catálogos de negocios. Optimizado para SEO y gratis durante los primeros 3 meses.",
  keywords: [
    "Bazxar",
    "compras online",
    "gestión de tiendas",
    "menú de restaurantes",
    "catálogo de negocios",
    "ecommerce",
    "pedidos online",
    "QR tiendas",
  ],
  authors: [{ name: "SoftNgs Solutions", url: "https://softngs.com" }],
  creator: "SoftNgs Solutions",
  publisher: "SoftNgs Solutions",
  metadataBase: new URL("https://bazxar.com"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://bazxar.com/",
    siteName: "Bazxar",
    title: "Bazxar – Compras Online y Gestión de Tiendas",
    description:
      "Crea y administra tiendas online, menús digitales y catálogos de negocios. Optimizado para SEO y gratis los primeros 3 meses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bazxar – Compras Online y Gestión de Tiendas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bazxar – Compras Online y Gestión de Tiendas",
    description:
      "Crea y administra tiendas online, menús digitales y catálogos de negocios. Optimizado para SEO y gratis los primeros 3 meses.",
    images: ["https://bazxar.com/og-image.jpg"],
    creator: "@softngs",
  },
  themeColor: "#7638CF",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider attribute="class"
          defaultTheme="dark"
          enableSystem={true}
        >
          {children}
        </ThemeProvider>
        <Toaster position="top-right" />
      </body>

    </html>
  );
}
