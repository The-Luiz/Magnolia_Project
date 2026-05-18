
### Fase 1: Eliminación de Latencia de Fuentes Críticas (Mejora FCP y LCP)

**Problema:** En tu archivo `globals.css`, estás importando de forma manual la fuente `Arimo` desde los servidores de Google Gstatic mediante directivas `@font-face`. El reporte de Lighthouse expone que esta petición añade una latencia crítica en la ruta de renderizado de **594 ms**, demorando el renderizado de los textos del Hero.

#### 1. Archivo a modificar: `src/app/globals.css`

Elimina por completo las declaraciones manuales de `@font-face` para evitar la descarga bloqueante por CSS.

* **Bloque de código a eliminar:**

```css
/* ELIMINA TODO ESTO */
@font-face {
  font-family: 'Arimo';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/arimo/v31/P5sfzWCBFQ4HXr6nYK7jYFrNl4w_Cz.woff2') format('woff2');
  ...
}
@font-face {
  font-family: 'Arimo';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/arimo/v31/P5sfzWCBFQ4HXr6nYK7jYFrNl4w_Cz.woff2') format('woff2');
  ...
}

```

#### 2. Archivo a modificar: `src/app/layout.tsx`

Aprovecha el sistema de optimización nativa de Next.js (`next/font/google`) para descargar y hospedar localmente la fuente en tiempo de compilación.

* **Código a corregir:**

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Arimo } from "next/font/google"; // 1. Añade Arimo aquí
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. Declara la fuente Arimo de forma optimizada
const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = { ... };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      {/* 3. Inyecta la variable de la fuente en la etiqueta body */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${arimo.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

```

---

### Fase 2: Reducción del Trabajo del Hilo Principal y Animaciones (Mejora TBT y CPU)

**Problema:** El hilo principal en móviles se satura durante 6.8 segundos debido a los procesos de *Style & Layout* (2,192 ms). Esto se debe a que componentes como `FundUsage` y `DonationFlow` ejecutan animaciones continuas en bucle infinito (`repeat: Infinity`) usando JavaScript (`framer-motion`) para mover líneas decorativas y manchas de fondo. En procesadores móviles de gama media/baja, esto dispara un rediseño forzado continuo (*Forced reflow*).

#### 1. Archivo a modificar: `src/components/FundUsage.tsx`

Oculta las líneas decorativas animadas en pantallas móviles para liberar ciclos de CPU al procesador del teléfono.

* **Código a corregir:**

```tsx
{/* Busca las líneas decorativas verticales cerca de la línea 45 y envuélvelas en un contenedor exclusivo para desktop */}
{/* Vertical decorative lines */}
<div className="absolute inset-0 pointer-events-none overflow-hidden z-0 hidden md:block"> {/* Modificado: Añadido 'hidden md:block' */}
  <motion.div
    initial={{ scaleY: 0 }}
    animate={{ scaleY: [0.3, 1, 0.5, 1] }}
    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" as const, ease: "easeInOut" as const }}
    className="absolute left-[3%] top-[10%] w-[1px] h-[80%] origin-top bg-gradient-to-b from-[#F89C24]/20 via-[#F89C24]/5 to-transparent"
  />
  <motion.div
    initial={{ scaleY: 0 }}
    animate={{ scaleY: [1, 0.4, 1, 0.6] }}
    transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" as const, ease: "easeInOut" as const }}
    className="absolute right-[3%] top-[10%] w-[1px] h-[80%] origin-bottom bg-gradient-to-t from-[#F89C24]/20 via-[#F89C24]/5 to-transparent"
  />
</div>

```

#### 2. Archivo a modificar: `src/components/DonationFlow.tsx`

Los círculos difuminados de fondo (`blur-[120px]`) con animaciones infinitas de cambio de escala y opacidad provocan repintados masivos muy costosos en móviles.

* **Código a corregir:**

```tsx
{/* Busca las decoraciones de fondo cerca de la línea 45 y modifícalas para que permanezcan estáticas en móviles */}
{/* Background decorations */}
<div className="absolute inset-0 pointer-events-none overflow-hidden">
  {/* Modificado: Quitamos 'animate' y 'transition' en móviles o usamos componentes condicionales alternativos */}
  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F89C24] rounded-full blur-[120px] opacity-[0.04] md:animate-pulse" style={{ animationDuration: '8s' }} />
  <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1E3A6F] rounded-full blur-[100px] opacity-[0.04] md:animate-pulse" style={{ animationDuration: '10s' }} />
</div>

```

---

### Fase 3: Correcciones Críticas de Accesibilidad y Contraste

**Problema:** Lighthouse detecta una puntuación de accesibilidad que puede subir fácilmente al 100% resolviendo dos detalles: la barra de progreso no tiene un nombre legible por lectores de pantalla y ciertos textos con opacidad fallan la relación mínima de contraste WCAG.

#### 1. Archivo a modificar: `src/components/ui/progress.tsx` (Componente de barra de progreso Shadcn UI)

El reporte indica que tu elemento `role="progressbar"` carece de etiqueta accesible. Debemos asegurar que por defecto reciba propiedades de accesibilidad.

* **Código a corregir:**

```tsx
// Modifica la definición del componente Progress asegurando que herede o declare explícitamente un aria-label
const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    aria-label={props["aria-label"] || "Barra de progreso de recaudación"} // Corrección ARIA integrada
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

```

#### 2. Archivo a modificar: `src/components/Footer.tsx`

El texto de exención de responsabilidad legal del footer (`footerDisclaimerText`) se renderiza con `text-white/30`, lo cual sobre el fondo azul oscuro `#0A1C3A` hace que sea completamente ilegible e inválido ante criterios de contraste.

* **Código a corregir:**

```tsx
{/* Busca la sección 'Bottom Bar' del archivo Footer.tsx alrededor de la línea 94 */}
{/* Bottom Bar */}
<div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
  <p className="text-white/40 text-xs text-center sm:text-left">
    © {currentYear} Magnolia Bitcoin Memorial. {t("footerRights")}
  </p>
  {/* MODIFICADO: Cambiar text-white/30 por text-white/60 para cumplir con la tasa de contraste accesible */}
  <p className="text-white/60 text-xs text-center sm:text-right max-w-md">
    {t("footerDisclaimerText")}
  </p>
</div>

```