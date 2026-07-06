import type { Metadata } from "next";
import { Geist, Geist_Mono, Arimo } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Magnolia Bitcoin Memorial | Honrando a Satoshi Nakamoto",
  description:
    "Un santuario al aire libre de 118 acres dedicado a celebrar la contribución de Satoshi Nakamoto y Bitcoin a la humanidad. Únete a nuestra recaudación de fondos.",
  keywords: [
    "Bitcoin",
    "Satoshi Nakamoto",
    "Magnolia",
    "blockchain",
    "crypto memorial",
    "donación Bitcoin",
    "El Salvador",
    "Bitcoin Trail",
  ],
  authors: [{ name: "Magnolia Bitcoin Memorial" }],
  openGraph: {
    title: "Magnolia Bitcoin Memorial",
    description: "Construyendo un monumento vivo a la contribución de Bitcoin a la humanidad.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${arimo.variable} antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme")||"dark";if(t==="dark"||(t==="system"&&window.matchMedia("(prefers-color-scheme:dark)").matches))document.documentElement.classList.add("dark")}catch(e){}})()`,
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            {children}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
