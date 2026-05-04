---
name: Magnolia
description: Bitcoin memorial fundraising platform — solemn, trustworthy, warm
colors:
  primary: "#0A1C3A"
  primary-light: "#1E3A6F"
  accent: "#F89C24"
  accent-light: "#fbbf24"
  background: "#F8F9FA"
  surface: "#FFFFFF"
  text: "#1E2A3E"
  text-muted: "#6B7B8D"
  border: "#E2E8F0"
  success: "#10B981"
  destructive: "#EF4444"
  chart-1: "#F89C24"
  chart-2: "#1E3A6F"
  chart-3: "#0A1C3A"
typography:
  heading:
    fontFamily: "Arimo, sans-serif"
    fontWeight: 700
  body:
    fontFamily: "Arimo, sans-serif"
    fontWeight: 400
  label:
    fontFamily: "Arimo, sans-serif"
    fontWeight: 700
    fontSize: 0.75rem
    letterSpacing: 0.05em
    textTransform: uppercase
  mono:
    fontFamily: "Geist Mono, monospace"
    fontSize: 0.875rem
rounded:
  sm: 6px
  md: 8px
  lg: 10px
  xl: 14px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  section: 128px
---

## Overview

Magnolia evoca la sensación de un **templo digital** — un memorial solemne, transparente y cálido que honra el legado de Satoshi Nakamoto y Bitcoin. El diseño equilibra dos fuerzas opuestas: la **seriedad institucional** del azul profundo (#0A1C3A, #1E3A6F) con el **brillo esperanzador** del oro (#F89C24, #fbbf24). La página debe transmitir confianza inquebrantable (como un monumento de piedra) y calidez humana (como un amanecer dorado).

Cada sección es una estación en un recorrido narrativo: Hero (presentación) → Live Counter (transparencia) → Fund Usage (planes concretos) → Contribution Levels (recompensas) → Donation Flow (acción) → FAQ (confianza).

## Colors

### Light mode

| Token | Hex | Uso |
|-------|-----|-----|
| `primary` | `#0A1C3A` | Headlines, navegación, footer, fondos oscuros de secciones alternas |
| `primary-light` | `#1E3A6F` | Decoraciones secundarias, enlaces, secciones alternas, anillos animados |
| `accent` | `#F89C24` | CTAs, badges, iconos decorativos, líneas animadas, partículas, scrollbar hover |
| `accent-light` | `#fbbf24` | Gradientes de acento, barras de progreso, texto highlight |
| `background` | `#F8F9FA` | Fondo de página principal, fondo de cards en modo claro |
| `surface` | `#FFFFFF` | Cards, secciones destacadas, contenedores de QR |
| `text` | `#1E2A3E` | Párrafos y texto de cuerpo |
| `text-muted` | `#6B7B8D` | Subtítulos, metadatos, textos secundarios |
| `border` | `#E2E8F0` | Bordes de cards, separadores |

### Dark mode

Los mismos tokens se transforman: `primary` → `#E8EDF3` (texto claro), `background` → `#0A1C3A` (noche), `surface` → `#0d1b30` (cards oscuras), `border` → `rgba(255,255,255,0.1)`. El acento `#F89C24` se mantiene idéntico en modo oscuro — es el faro constante.

### Reglas de uso

- **Nunca** uses `accent` como fondo sólido de un contenedor grande (solo como badge, botón, o decoración puntual)
- **Nunca** mezcles más de 3 colores distintos en una misma sección
- Texto sobre `primary` o `surface` debe ser `#FFFFFF` o `#E8EDF3`
- Texto sobre `background` usa `text` para contenido primario y `text-muted` para secundario

## Typography

El proyecto usa **Arimo** como fuente única para todo el texto — titulares, cuerpo y etiquetas. Arimo es una sans-serif neutra y humanista que combina legibilidad digital con un carácter atemporal.

| Nivel | Font | Weight | Tamaños comunes |
|-------|------|--------|------------------|
| H1 | Arimo | 700 | `text-3xl` a `text-5xl` (1.875rem – 3rem) |
| H2 | Arimo | 700 | `text-2xl` a `text-4xl` (1.5rem – 2.25rem) |
| H3 | Arimo | 700 | `text-lg` a `text-xl` (1.125rem – 1.25rem) |
| Body | Arimo | 400 | `text-sm` a `text-base` (0.875rem – 1rem) |
| Badge/Label | Arimo | 700 | `text-xs` + uppercase + tracking-wide |
| Mono | Geist Mono | 400 | `text-xs` a `text-sm` — solo para direcciones Bitcoin y código |

**Geist Sans** está cargada como variable `--font-geist-sans` (fallback técnico de Next.js) pero **no debe usarse** para contenido. **Geist Mono** se usa exclusivamente para direcciones de billetera y código inline.

### Dark mode typography

Todo el texto mantiene su peso y tamaño. Solo cambia el color: `text-[#0A1C3A]` → `text-white` o `text-[#E8EDF3]`, y `text-[#1E2A3E]/70` → `text-white/60`.

## Layout

La página usa un ancho máximo de `max-w-6xl` (72rem = 1152px) centrado para todo el contenido. Cada sección mide `py-20` (80px) en mobile y `py-28` (112px) en desktop — la sección completa mide `128px` de padding vertical.

- **Grid 2 columnas**: secciones de comparación o pares (DonationFlow: QR + pasos)
- **Grid 3 columnas**: FundUsage (proyectos)
- **Grid 4 columnas**: ContributionLevels en desktop, 2 col en tablet
- **Padding de cards**: `p-6` (24px) o `p-8` (32px)

## Elevation & Depth

| Nivel | Uso | Clase |
|-------|-----|-------|
| Default | Cards sin hover | `shadow-md` |
| Elevated | Cards con hover | `shadow-xl` + `hover:-translate-y-2` o `hover:scale-110` |
| Background | Orb pulsante | Blur 3xl + opacidad 3-6% |

La profundidad se construye con tres técnicas:

1. **Parallax (HeroSection)**: `useScroll` + `useTransform` — el fondo se desplaza 30% más lento que el texto, creando sensación de capas
2. **Orbes difuminados**: Círculos grandes (`w-80` a `w-[500px]`) con `blur-3xl` o `blur-[120px]` y opacidad baja (3-5%) que flotan o pulsan lentamente — dan atmósfera sin distraer
3. **Elevación hover**: Las cards se elevan `-translate-y-2` con sombra `shadow-xl` al pasar el ratón

## Shapes

| Elemento | Radio | Ejemplo |
|----------|-------|---------|
| Cards principales | `rounded-2xl` (16px) | Contenedores de proyectos, niveles de contribución |
| Contenedores internos | `rounded-xl` (12px) | Área de QR, inputs |
| Íconos decorativos | `rounded-xl` (12px) o `rounded-2xl` (16px) | Iconos en cards de proyecto |
| Botones | `rounded-xl` (12px) | Botón de copiar, botones CTA |
| Badges | `rounded-full` | Badges de sección, etiquetas |
| Partículas decorativas | `rounded-full` | Puntos flotantes de 3-8px |

Los bordes de cards se refuerzan con `border border-[color]/10` (light) o `dark:border-white/5` (dark).

Patrón recurrente: una línea de gradiente decorativa en la base de las cards (1-4px, `bg-gradient-to-r from-accent via-primary-light to-transparent`) que aparece al hacer hover.

## Components

### Decoraciones animadas

| Componente | Archivo | Descripción |
|------------|---------|-------------|
| Vertical Lines | `HeroSection.tsx:14-29` | 6 líneas verticales con gradiente gold→transparente, animación scaleY bounce 2.5s loop |
| Horizontal Lines | `HeroSection.tsx:102-119` | 3 líneas horizontales gold/navy con scaleX loop, posicionadas en bordes superior e inferior |
| Floating Particles | `HeroSection.tsx:31-51` | 8 puntos gold (3-8px) que flotan hacia arriba (60px) y pulsan opacidad/scale en loop 6s |
| Rotating Rings | `LiveCounter.tsx:96-108` | 2 anillos circulares gold/navy que rotan 360° lento (45-60s) |
| Floating Rings | `FAQSection.tsx:37-46` | 2 anillos gold/navy que flotan up/down ±20px (6-8s loop) |
| Pulsing Orbs | `DonationFlow.tsx:77-89` | 2 orbes gold/navy difuminados que escalan y pulsan opacidad (8-10s loop) |
| Blurred Orbs | `ContributionLevels.tsx:79-91` | 2 orbes gold/navy que se desplazan horizontalmente (20-25s) |
| SVG Pattern | `FundUsage.tsx:58-66` | Patrón de cruz "+" en navy 3-5% opacidad, estático |
| Gradient Line | `Footer.tsx:27` | Línea gold→navy→gold 4px, ancho completo, estática |
| Contador animado | `LiveCounter.tsx:22-51` | CountUp con `requestAnimationFrame`, cubic ease-out |

### Secciones de la página

| Sección | Componente | Función |
|---------|------------|---------|
| Hero | `HeroSection.tsx` | Presentación + parallax + decoraciones animadas |
| Live Counter | `LiveCounter.tsx` | Balance BTC en vivo + countUp + anillos rotantes |
| Fund Usage | `FundUsage.tsx` | 3 proyectos con imagen + icono + descripción |
| Contribution Levels | `ContributionLevels.tsx` | 4 tiers de donación con iconos y badges |
| Donation Flow | `DonationFlow.tsx` | QR + dirección + copiar + 4 pasos con íconos |
| FAQ | `FAQSection.tsx` | Acordeón de preguntas + anillos flotantes |
| Header / Footer | `Header.tsx`, `Footer.tsx` | Navegación + información legal |

## Do's and Don'ts

### Do

- Usa `accent` (#F89C24) como punto focal — iconos decorativos, badges de sección, líneas animadas, indicadores interactivos
- Mantén la jerarquía cromática: `primary` → `primary-light` → `text` → `text-muted` (de más oscuro a más claro)
- Usa Arimo para **todo** el contenido — incluyendo botones, labels y navegación
- Espacia las secciones con `128px` de padding vertical para dar aire
- Aplica bordes sutiles (`border-[color]/10` light, `border-white/5` dark) para separar cards del fondo
- Usa `as const` en valores `ease` de Framer Motion para evitar errores de tipo TypeScript
- Anima las decoraciones con loops infinitos pero mantén opacidad baja (< 10%) para no distraer
- Coloca las decoraciones animadas dentro de `pointer-events-none overflow-hidden` para no interferir con la interacción

### Don't

- **No** uses `accent` como fondo sólido de contenedores grandes — solo como badge, botón o decoración puntual
- **No** mezcles más de 3 colores distintos en una misma sección
- **No** uses Geist Sans para contenido visible — es solo un fallback técnico de Next.js
- **No** uses sombras excesivas — `shadow-xl` solo en hover, `shadow-md` por defecto
- **No** animes elementos de contenido (texto, botones) con loops infinitos — solo decoraciones de fondo
- **No** uses tipografía distinta a Arimo para cuerpo o titulares
- **No** pongas texto directamente sobre imágenes sin overlay (usa `bg-gradient-to-t` para transición suave)
- **No** uses React.StrictMode ni `useSyncExternalStore` a menos que sea estrictamente necesario — el proyecto tiene `reactStrictMode: false`
