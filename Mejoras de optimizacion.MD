
# Mejoras de optimizacion.MD

## Objetivo del Plan

Eliminar los bloqueos del hilo principal (Long Tasks), reducir el LCP (Largest Contentful Paint) a menos de 2.5s y eliminar el lag en animaciones (Layout Thrashing) en dispositivos móviles de gama media/baja.

---

### Fase 1: Desbloquear el Hilo Principal (Server Components)

**Problema:** El archivo `src/app/page.tsx` tiene la directiva `"use client";` en la línea 1. Esto fuerza a Next.js a empaquetar **TODOS** los componentes (`HeroSection`, `LiveCounter`, `FAQ`, etc.) en un solo archivo JavaScript gigante que el celular debe procesar antes de mostrar algo.
**Solución:** Eliminar `"use client"`, delegar el scroll al navegador de forma nativa e importar los componentes de abajo de la pantalla de forma dinámica (Lazy Loading).

**Archivo a modificar:** `src/app/globals.css`
**Acción:** Añadir soporte para scroll nativo fluido.
**Código a insertar al final del archivo:**

```css
html {
  scroll-behavior: smooth;
}

```

**Archivo a modificar:** `src/app/page.tsx`
**Acción:** Reemplazar TODO el contenido del archivo con el siguiente código.
**Código exacto:**

```tsx
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LiveCounter from "@/components/LiveCounter";
import dynamic from "next/dynamic";

// Carga perezosa (Lazy Load) para componentes que no se ven en el primer render
const FundUsage = dynamic(() => import("@/components/FundUsage"));
const ContributionLevels = dynamic(() => import("@/components/ContributionLevels"));
const DonationFlow = dynamic(() => import("@/components/DonationFlow"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <LanguageProvider>
        <div className="min-h-screen flex flex-col bg-[#F8F9FA] dark:bg-[#0A1C3A] transition-colors duration-300">
          {/* El Header ya no necesita recibir onNavigate, usará links HTML nativos (<a href="#seccion">) */}
          <Header />
          <main className="flex-1">
            <HeroSection />
            <LiveCounter />
            <FundUsage />
            <ContributionLevels />
            <DonationFlow />
            <FAQSection />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

### Fase 2: Optimización Extrema del LCP en el Hero

**Problema:** La imagen de fondo (`Parque_Imagen.jpg`) se carga como un `style={{ backgroundImage }}`. El navegador no la descubre hasta que ejecuta JavaScript, arruinando el LCP. Además, framer-motion está sobrecargando la hidratación inicial.

**Archivo a modificar:** `src/components/HeroSection.tsx`
**Acciones:**

1. Importar `Image` de `next/image`.
2. Reemplazar el `div` de la imagen de fondo por el componente `<Image priority />`.

**Código específico a modificar dentro de `HeroSection.tsx`:**
Buscar este bloque (líneas ~60-64):

```tsx
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/Parque_Imagen.jpg')" }}
        />

```

**Reemplazar por:**

```tsx
        <div className="absolute inset-0">
          <import_Image_from_next_image_aqui /* (Asegúrate de agregar import Image from "next/image" arriba) */ />
          <Image
            src="/Parque_Imagen.jpg"
            alt="Magnolia Park Background"
            fill
            priority // CRÍTICO PARA EL LCP
            className="object-cover object-center"
            sizes="100vw"
            quality={85}
          />
        </div>

```

---

### Fase 3: Eliminar los asesinos de GPU (Animated Blurs)

**Problema:** En `LiveCounter.tsx` y `ContributionLevels.tsx`, tienes `<motion.div>` animando formas enormes con `blur-3xl`. Animar un filtro `blur` frame a frame vía JS destruye la GPU de los teléfonos Android de gama media.
**Solución:** Desactivar la animación de estos fondos borrosos (dejarlos estáticos) o usar CSS puro.

**Archivo a modificar 1:** `src/components/LiveCounter.tsx`
**Acción:** Buscar las decoraciones de fondo animadas (líneas ~80-95) y quitarles el componente `motion` y las props de `animate`.

**Código específico (Reemplazar el bloque de orbes):**

```tsx
        {/* Orbes borrosos estáticos (Optimizados para móvil) */}
        <div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-[#F89C24] rounded-full blur-3xl opacity-5 dark:opacity-10 pointer-events-none will-change-transform" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#1E3A6F] rounded-full blur-3xl opacity-5 pointer-events-none will-change-transform" />

```

**Archivo a modificar 2:** `src/components/ContributionLevels.tsx`
**Acción:** Buscar las decoraciones de fondo animadas (líneas ~70-80).
**Código específico (Reemplazar):**

```tsx
        {/* Fondos estáticos optimizados */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#F89C24]/5 rounded-full blur-3xl pointer-events-none will-change-transform" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#1E3A6F]/5 rounded-full blur-3xl pointer-events-none will-change-transform" />

```

---

### Fase 4: Optimización del estado dentro de Canvas/Frames

**Problema:** En `LiveCounter.tsx`, la función `CountUp` utiliza `requestAnimationFrame` para hacer un contador que actualiza el estado de React (`setValue(start)`) en cada frame (60 veces por segundo). En un CPU de gama baja que ya está cargando Framer Motion, esto causa tirones masivos.
**Solución:** Utilizar una librería dedicada y optimizada como `framer-motion` para animar el número directamente en el DOM, o saltar el renderizado de React en el paso intermedio.

**Archivo a modificar:** `src/components/LiveCounter.tsx`
**Acción:** Refactorizar el componente `<CountUp />` para usar `useMotionValue` y `animate` de `framer-motion` (que ya está instalado), lo cual manipula el DOM directamente sin forzar re-renderizados de React.

**Código a reemplazar (Componente CountUp):**
Reemplazar el componente `CountUp` entero por esto:

```tsx
import { useMotionValue, useTransform, animate } from "framer-motion";

function CountUp({ target, decimals = 8, prefix = "" }: { target: number; decimals?: number; prefix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return prefix + latest.toFixed(decimals);
  });

  useEffect(() => {
    const animation = animate(count, target, { duration: 2, ease: "easeOut" });
    return animation.stop;
  }, [target, count]);

  return <motion.span>{rounded}</motion.span>;
}

```