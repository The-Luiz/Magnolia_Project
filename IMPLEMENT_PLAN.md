Aquí tienes el archivo Markdown organizado, fusionando los dos documentos técnicos en una sola propuesta coherente y estructurada:

```markdown
# Propuesta de Mejoras Visuales - Magnolia Bitcoin Memorial

## 1. Visión General y Objetivos

Este documento consolida las propuestas técnicas y estéticas para elevar la fidelidad visual de la plataforma **Magnolia Bitcoin Memorial**.  
Se refuerza la atmósfera de templo digital y monumento solemne mediante:

- **Animaciones inmersivas** en el fondo (partículas, líneas, orbes) que mantienen el cumplimiento estricto de las convenciones del proyecto.
- **Seguridad de tipado en Framer Motion**: uso de `as const` en propiedades de transición (`ease`, `repeatType`) para evitar errores de compilación TypeScript.
- **Rendimiento y accesibilidad**: elementos decorativos dentro de contenedores con `pointer-events-none`, `overflow-hidden` y opacidades inferiores al 10 %, sin interferir con la lectura ni la interacción.
- **Coherencia cromática**: paleta estricta (máximo 3 colores por sección) con el oro `#F89C24` como foco y acento constante.

Adicionalmente, se incluyen lineamientos de diseño general (tipografía, interacciones, componentes) para lograr un equilibrio entre elegancia institucional, usabilidad moderna y fidelidad al mensaje central del proyecto: construir un monumento vivo a la libertad financiera y honrar el legado de Satoshi Nakamoto.

---

## 2. Plan de Modificaciones por Archivo

A continuación se detallan los cambios específicos en los archivos fuente, con bloques de código precisos.

### Archivo 1: `src/components/HeroSection.tsx`

**Objetivo:** Refinar animaciones de líneas decorativas, añadir deriva horizontal orgánica a las partículas flotantes y aplicar rigurosamente `as const`.

#### Bloque de Código A: Refinamiento de `AnimatedLine`

- **Ubicación:** Líneas 14-29 (definición del componente).
- **Modificación:** Forzar el tipado literal e incrementar la fluidez visual.

```typescript
function AnimatedLine({ delay, className }: { delay: number; className?: string }) {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: [0, 1, 0.7, 1] }}
      transition={{
        duration: 2.5,
        delay,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut" as const,
      }}
      className={`origin-bottom rounded-full bg-gradient-to-t from-[#F89C24] via-[#F89C24]/40 to-transparent ${className}`}
    />
  );
}
```

#### Bloque de Código B: Deriva Orgánica en `FloatingParticle`

- **Ubicación:** Líneas 31-51.
- **Modificación:** Desplazamiento en X (`x: [0, -10, 5, -5, 0]`) y `as const`.

```typescript
function FloatingParticle({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.6, 0.3, 0.6, 0],
        scale: [0, 1, 0.8, 1.2, 0],
        y: [0, -30, -15, -40, -60],
        x: [0, -10, 5, -5, 0],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut" as const,
      }}
      className="absolute rounded-full bg-[#F89C24]/30 pointer-events-none"
      style={{ left: x, top: y, width: size, height: size }}
    />
  );
}
```

### Archivo 2: `src/components/LiveCounter.tsx`

**Objetivo:** Añadir orbes pulsantes difuminados en el fondo para profundidad sin distraer del balance de donaciones.

#### Bloque de Código C: Enriquecimiento del Fondo Atmosférico

- **Ubicación:** Dentro de `<section id="counter">`, expandiendo el contenedor `<div className="absolute inset-0 overflow-hidden pointer-events-none">` (líneas 95-110 aprox.).
- **Modificación:** Integrar orbes con `blur-3xl` y opacidad ultrabaja (3-5 %) junto a los anillos rotatorios existentes.

```typescript
{/* Background decorations */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  {/* Orbes difuminados de fondo */}
  <motion.div
    animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.05, 0.03] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" as const }}
    className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-[#F89C24] rounded-full blur-3xl"
  />
  <motion.div
    animate={{ scale: [1.1, 1, 1.1], opacity: [0.02, 0.04, 0.02] }}
    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" as const }}
    className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#1E3A6F] rounded-full blur-3xl"
  />

  {/* Anillos rotatorios existentes con tipado estricto */}
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 60, repeat: Infinity, ease: "linear" as const }}
    className="absolute -top-40 -right-40 w-80 h-80 rounded-full border border-[#F89C24]/10"
  />
  <motion.div
    animate={{ rotate: -360 }}
    transition={{ duration: 45, repeat: Infinity, ease: "linear" as const }}
    className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full border border-[#1E3A6F]/20"
  />
</div>
```

### Archivo 3: `src/components/FundUsage.tsx`

**Objetivo:** Introducir líneas verticales con degradado dorado en bordes para enmarcar la narrativa visual.

#### Bloque de Código D: Líneas Decorativas de Enmarque

- **Ubicación:** Justo debajo del patrón SVG estático de fondo, antes de `<div className="max-w-7xl mx-auto...">` (línea 66 aprox.).
- **Modificación:** Insertar contenedor con dos líneas animadas.

```typescript
{/* Líneas verticales animadas de enmarque */}
<div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
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

---
Aquí tienes la **Sección 3 completamente reescrita**, corregida y perfectamente alineada con la arquitectura de **Next.js 16 (App Router)**, **Tailwind CSS v4**, **shadcn/ui**, el sistema de **internacionalización propio (`useLanguage`)** y las reglas estrictas de **`DESIGN.md`** y **`AGENTS.md`**.

Puedes reemplazar directamente la sección anterior de tu documento `IMPLEMENT_PLAN.md` con este contenido:

---

```markdown
## 3. Mejoras Generales de Diseño y Arquitectura (Next.js, Tailwind v4 y shadcn/ui)

Todas las implementaciones a nivel de componentes y vistas deben respetar el ciclo de vida declarativo de React, evitando por completo la manipulación directa del DOM y adhiriéndose a los tokens de diseño preestablecidos.

### 3.1 Jerarquía Tipográfica Estricta (Arimo & Geist Mono)

Para mantener la coherencia de un "templo digital" atemporal y cumplir con las directrices de diseño, se prohíbe la introducción de fuentes externas.

- **Arimo (`font-[Arimo]`)**: Se utilizará de forma exclusiva para todo el contenido visible (titulares, párrafos, botones, etiquetas y navegación).
- **Geist Mono (`font-mono`)**: Queda estrictamente reservada para la visualización de direcciones de billeteras Bitcoin y fragmentos de código.

**Aplicación de Clases de Tailwind por Nivel Visual:**

| Nivel Visual | Clases Tailwind (Light / Dark) | Peso | Uso Específico |
| :--- | :--- | :--- | :--- |
| **H1 (Hero)** | `text-4xl sm:text-6xl font-bold font-[Arimo] text-[#0A1C3A] dark:text-white` | 700 | Título principal de la plataforma |
| **H2 (Secciones)** | `text-3xl sm:text-4xl font-bold font-[Arimo] text-[#0A1C3A] dark:text-white` | 700 | Encabezados de sección (`LiveCounter`, `FAQ`) |
| **Cuerpo (Body)** | `text-base font-[Arimo] text-[#1E2A3E] dark:text-white/70` | 400 | Párrafos descriptivos y narrativos |
| **Botones / CTAs** | `text-sm sm:text-base font-bold font-[Arimo] tracking-wide` | 700 | Acciones principales e interactivas |
| **Datos / BTC** | `text-xs sm:text-sm font-mono text-[#0A1C3A] dark:text-[#F89C24]` | 400 | Billeteras, hashes y montos exactos |

---

### 3.2 Optimización Declarativa del Contador en Vivo (`LiveCounter.tsx`)

Se elimina cualquier manipulación imperativa (antipatrón de `document.getElementById`). Toda la fluidez visual y las alertas se controlan mediante el estado de React y las primitivas de **shadcn/ui**.

**1. Barra de Progreso Fluida:**
Se utiliza directamente el componente `<Progress />` de shadcn/ui, alimentado por el estado obtenido de la API:

```tsx
{/* Renderizado declarativo de la barra de progreso */}
<div className="mb-8">
  <div className="flex justify-between items-center mb-3 font-[Arimo]">
    <span className="text-sm text-[#1E2A3E]/70 dark:text-white/60">
      {t("counterOf")} {formatUSD(data.goal_usd)}
    </span>
    <span className="text-sm font-bold text-[#F89C24]">
      {data.progress_percent.toFixed(1)}%
    </span>
  </div>
  <Progress
    value={data.progress_percent}
    className="h-4 rounded-full bg-[#1E3A6F]/10 dark:bg-white/5 [&>div]:bg-gradient-to-r [&>div]:from-[#F89C24] [&>div]:to-[#fbbf24] [&>div]:rounded-full"
  />
</div>

```

**2. Alerta Declarativa de Meta Superada:**
Cuando el porcentaje alcance o supere el 100%, se renderizará condicionalmente un mensaje de éxito utilizando las claves de traducción:

```tsx
{data.progress_percent >= 100 && (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-[Arimo] text-sm text-center font-medium"
  >
    ✓ {t("counterGoalAchieved")}
  </motion.div>
)}

```
---

### 3.3 Presentación Interactiva de Proyectos (`FundUsage.tsx`)

Las tarjetas de proyectos se estructuran sin textos fijos en el código, llamando siempre al hook `t()` y aplicando transiciones Framer Motion seguras (`as const`).

```tsx
<motion.div
  whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" as const } }}
  className="group relative bg-white dark:bg-[#0d1b30] rounded-2xl shadow-md hover:shadow-xl border border-[#1E3A6F]/10 dark:border-white/5 overflow-hidden transition-shadow duration-300"
>
  {/* Contenedor de Imagen con Overlay Seguro */}
  <div className="relative h-56 overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
      style={{ backgroundImage: `url('${project.image}')` }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C3A]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
    
    {/* Etiqueta renderizada condicionalmente vía i18n */}
    {project.isFeatured && (
      <span className="absolute top-4 right-4 bg-[#F89C24] text-white text-xs font-bold px-3 py-1 rounded-full font-[Arimo]">
        {t("projectFeaturedBadge")}
      </span>
    )}
  </div>

  <div className="p-6">
    <h3 className="text-xl font-bold text-[#0A1C3A] dark:text-white font-[Arimo] mb-3">
      {t(project.titleKey)}
    </h3>
    <p className="text-[#1E2A3E]/70 dark:text-white/60 font-[Arimo] text-sm leading-relaxed">
      {t(project.descKey)}
    </p>
  </div>
</motion.div>

```

---

### 3.4 Niveles de Contribución: Reutilización de la Paleta Oficial

Para respetar el límite estricto de un máximo de 3 colores por sección, no se introducen tonos externos (como rojos o morados). La diferenciación visual se logra mediante variaciones en los bordes, gradientes internos y sombras.

| Nivel | Token Cromático Base | Estilo Diferencial (Tailwind) |
| --- | --- | --- |
| **Básico** | `#1E3A6F` (`primary-light`) | Borde sutil `border-[#1E3A6F]/20`, icono con fondo desaturado. |
| **Destacado** | `#F89C24` (`accent`) | Borde `border-[#F89C24]/40`, indicador superior en forma de rombo dorado. |
| **Premium** | Gradiente Acento | Anillo exterior `ring-2 ring-[#F89C24]/30`, badge esquinero dorado con texto blanco. |

La expansión de beneficios adicionales al hacer clic se gestiona nativamente integrando el componente `<Collapsible />` de shadcn/ui o un estado local `const [isExpanded, setIsExpanded] = useState(false)`, evitando recargas o ventanas emergentes intrusivas.

---

### 3.5 Sección de Donación: Validación y Feedback en el Portapapeles

**1. Validación de Dirección Bech32 (TypeScript):**
Se implementa una función pura para validar direcciones de Bitcoin en caso de habilitar flujos dinámicos de entrada:

```typescript
export function isValidBTCAddress(address: string): boolean {
  const btcRegex = /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/;
  return btcRegex.test(address);
}

```

**2. Feedback Visual con `AnimatePresence`:**
El botón de copiar actualiza un estado local y ofrece confirmación visual animada y limpia:

```tsx
<Button
  onClick={copyAddress}
  className="w-full bg-[#0A1C3A] dark:bg-white text-white dark:text-[#0A1C3A] hover:bg-[#1E3A6F] dark:hover:bg-white/90 font-[Arimo] font-medium text-sm transition-all duration-300 rounded-xl"
>
  <AnimatePresence mode="wait">
    {copied ? (
      <motion.span
        key="copied"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="inline-flex items-center gap-2 text-green-500"
      >
        <Check className="h-4 w-4" /> {t("donateCopied")}
      </motion.span>
    ) : (
      <motion.span
        key="copy"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="inline-flex items-center gap-2"
      >
        <Copy className="h-4 w-4" /> {t("donateCopyButton")}
      </motion.span>
    )}
  </AnimatePresence>
</Button>

```

---

### 3.6 FAQ: Búsqueda y Filtrado Declarativo en Tiempo Real

Para implementar un buscador en las preguntas frecuentes, se utiliza un campo de texto controlado en React que filtra el array de claves antes de pasarlo al componente `<Accordion />` de **shadcn/ui**.

```tsx
// Lógica dentro del componente FAQSection
const [searchQuery, setSearchQuery] = useState("");

// Filtrado reactivo basado en las traducciones activas
const filteredFaq = faqItems.filter((item) => {
  const q = t(item.questionKey).toLowerCase();
  const a = t(item.answerKey).toLowerCase();
  return q.includes(searchQuery.toLowerCase()) || a.includes(searchQuery.toLowerCase());
});

return (
  <div className="max-w-4xl mx-auto px-4">
    {/* Input controlado */}
    <div className="mb-8">
      <Input
        type="text"
        placeholder={t("faqSearchPlaceholder")}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="font-[Arimo] rounded-xl border-[#1E3A6F]/20 dark:border-white/10 bg-white dark:bg-[#0d1b30]"
      />
    </div>

    {/* Renderizado del Acordeón filtrado */}
    <Accordion type="single" collapsible className="w-full">
      {filteredFaq.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="font-[Arimo] font-bold text-[#0A1C3A] dark:text-white">
            {t(item.questionKey)}
          </AccordionTrigger>
          <AccordionContent className="font-[Arimo] text-[#1E2A3E]/70 dark:text-white/60">
            {t(item.answerKey)}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);

```

---

### 3.7 Estandarización del Modo Oscuro (`next-themes`)

Se prohíbe escribir lógica propia en `localStorage` o inyectar clases imperativamente en la etiqueta `<html>`. El proyecto gestiona el tema nativamente mediante el proveedor de **`next-themes`** configurado en `src/components/ThemeProvider.tsx`.

* **Uso en componentes:** Se debe consumir el hook `useTheme()` provisto por `next-themes` en caso de requerir el estado actual (`theme === "dark"`).
* **Estilizado en Tailwind:** Utilizar exclusivamente el prefijo `dark:...` compatible con la estrategia de clases de Tailwind CSS v4 para alternar superficies, fondos y opacidades.

---

### 3.8 Consistencia en Footer y Enlaces

El footer se organizará en tres columnas limpias, renderizando sus textos mediante el sistema i18n y manteniendo la línea superior decorativa con gradiente nativo:

```tsx
<footer className="bg-[#0A1C3A] text-white relative overflow-hidden font-[Arimo]">
  {/* Línea superior dorada */}
  <div className="h-1 w-full bg-gradient-to-r from-[#F89C24] via-[#1E3A6F] to-[#F89C24]" />
  
  <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Columna 1: Marca */}
    <div>
      <img src="/logo.svg" alt="Magnolia Logo" className="h-8 mb-4" />
      <p className="text-white/70 text-sm leading-relaxed">{t("footerAboutDesc")}</p>
    </div>
    
    {/* Columna 2: Enlaces Legales */}
    <div className="flex flex-col space-y-2 text-sm text-white/80">
      <a className="hover:text-[#F89C24] transition-colors">{t("footerPrivacy")}</a>
      <a className="hover:text-[#F89C24] transition-colors">{t("footerTerms")}</a>
    </div>
    
    {/* Columna 3: Ubicación (Iframe seguro) */}
    <div>
      <p className="text-sm font-bold mb-2 text-[#F89C24]">{t("footerLocationLabel")}</p>
      <div className="rounded-xl overflow-hidden border border-white/10 h-32">
        <iframe
          title="Magnolia Memorial Location"
          src="[https://www.google.com/maps/embed](https://www.google.com/maps/embed)?..."
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</footer>

```

```

```