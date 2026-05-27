// ─────────────────────────────────────────────────────────────────────────────
// Magnolia Bitcoin Trail — Station Data
// 21 stations · 2 miles · Canadensis, PA
//
// BACKUP of original types/helpers is in stations_BACKUP_original.ts
// All function signatures are identical to the original — safe to drop in.
// ─────────────────────────────────────────────────────────────────────────────

export type StationCategory =
  | "fundamentos"
  | "historia"
  | "tecnología"
  | "filosofía"
  | "economía";

export interface Station {
  slug: string;
  number: number;
  title: string;
  highlight: string;
  icon?: string;
  content: string;
  contentEs?: string; // Spanish version — added, fully optional
  images?: { src: string; alt: string }[];
  thumbnail?: string;
  category?: StationCategory;
}

export const categories: { key: StationCategory; labelEs: string; labelEn: string }[] = [
  { key: "fundamentos", labelEs: "Fundamentos", labelEn: "Fundamentals" },
  { key: "historia",    labelEs: "Historia",     labelEn: "History"      },
  { key: "tecnología",  labelEs: "Tecnología",   labelEn: "Technology"   },
  { key: "filosofía",   labelEs: "Filosofía",    labelEn: "Philosophy"   },
  { key: "economía",    labelEs: "Economía",     labelEn: "Economics"    },
];

// ─────────────────────────────────────────────────────────────────────────────
// Station data
// ─────────────────────────────────────────────────────────────────────────────

export const stations: Station[] = [
  {
    number: 1,
    slug: "welcome",
    category: "fundamentos",
    title: "Welcome to the Bitcoin Trail",
    highlight: "Walk the Path to Financial Freedom",
    content:
      "You are about to walk through the story of money. From control to freedom. From trust in institutions to trust in math. There are 21 stations ahead — one for each million Bitcoin that will ever exist.",
    contentEs:
      "Estás a punto de caminar por la historia del dinero. Del control a la libertad. De la confianza en instituciones a la confianza en las matemáticas. Hay 21 estaciones por delante, una por cada millón de Bitcoin que existirá.",
  },
  {
    number: 2,
    slug: "money-is-a-tool",
    category: "fundamentos",
    title: "Money is a Tool",
    highlight: "Not all money is created equal",
    content:
      "Money helps us store value, exchange goods, and measure worth. For thousands of years humans used gold, shells, and grain. Today we use paper. But not all money serves us equally well — the tool matters as much as the work.",
    contentEs:
      "El dinero nos ayuda a almacenar valor, intercambiar bienes y medir la riqueza. Durante miles de años usamos oro, conchas y grano. Hoy usamos papel. Pero no todo el dinero nos sirve igual de bien.",
  },
  {
    number: 3,
    slug: "broken-money",
    category: "economía",
    title: "Broken Money",
    highlight: "Traditional money loses value over time",
    content:
      "When governments print more money, the money you already have buys less. This is called inflation. It is not an accident — it is how the system is designed. Your savings erode quietly, year after year, without anyone asking your permission.",
    contentEs:
      "Cuando los gobiernos imprimen más dinero, el dinero que ya tienes compra menos. Esto se llama inflación. No es un accidente, es como el sistema está diseñado. Tus ahorros se erosionan silenciosamente, año tras año.",
  },
  {
    number: 4,
    slug: "your-time-is-debased",
    category: "economía",
    title: "Your Time is Being Debased",
    highlight: "You trade time for something that melts",
    content:
      "Every hour you work, you earn money. Every year that passes, that money buys less. You are not just losing purchasing power — you are losing the stored value of your time and labor. The system converts your hours into something that shrinks.",
    contentEs:
      "Cada hora que trabajas, ganas dinero. Cada año que pasa, ese dinero compra menos. No solo pierdes poder adquisitivo, pierdes el valor almacenado de tu tiempo y trabajo.",
  },
  {
    number: 5,
    slug: "2008-changed-everything",
    category: "historia",
    title: "2008 Changed Everything",
    highlight: "Banks were rescued. People were left behind.",
    content:
      "In 2008 the global financial system collapsed. Governments around the world rescued the banks that caused the crisis with public money. Ordinary people lost their homes and savings. A few months later, someone decided to build an alternative.",
    contentEs:
      "En 2008 el sistema financiero global colapsó. Los gobiernos rescataron los bancos que causaron la crisis con dinero público. La gente común perdió sus hogares y ahorros. Meses después, alguien decidió construir una alternativa.",
  },
  {
    number: 6,
    slug: "birth-of-bitcoin",
    category: "historia",
    title: "An Idea Becomes Reality",
    highlight: "In 2009, Bitcoin was created",
    content:
      "On January 3, 2009, the first Bitcoin block was mined. Embedded in it was a message referencing a bank bailout headline. No leader. No company. No permission required. Just code, math, and an idea whose time had come.",
    contentEs:
      "El 3 de enero de 2009, se minó el primer bloque de Bitcoin. Incluía un mensaje sobre rescates bancarios. Sin líderes. Sin empresa. Sin necesidad de permiso. Solo código, matemáticas y una idea cuyo momento había llegado.",
  },
  {
    number: 7,
    slug: "what-is-bitcoin",
    category: "fundamentos",
    title: "Digital Sound Money",
    highlight: "Money you can truly own",
    content:
      "Bitcoin is the first money in history that no one can print more of, no one can freeze, and no one can take without your consent. It runs on a global network of computers with no central point of control. It belongs to whoever holds the keys.",
    contentEs:
      "Bitcoin es el primer dinero en la historia del que nadie puede imprimir más, nadie puede congelar y nadie puede tomar sin tu consentimiento. Funciona en una red global sin punto central de control.",
  },
  {
    number: 8,
    slug: "only-21-million",
    category: "fundamentos",
    title: "Only 21 Million",
    highlight: "Scarcity = Value",
    content:
      "There will only ever be 21 million Bitcoin. This number is written into the code and cannot be changed by any government, company, or person. For the first time in history, money has a hard limit enforced by mathematics, not by trust.",
    contentEs:
      "Solo habrá 21 millones de Bitcoin. Este número está escrito en el código y ningún gobierno, empresa o persona puede cambiarlo. Por primera vez, el dinero tiene un límite fijo aplicado por matemáticas, no por confianza.",
  },
  {
    number: 9,
    slug: "the-blockchain",
    category: "tecnología",
    title: "Truth You Can Trust",
    highlight: "The Blockchain",
    content:
      "Bitcoin records every transaction on a public ledger called the blockchain. It is maintained by thousands of computers worldwide. Every entry is transparent, verified by the network, and permanent. No one controls it. Everyone can see it.",
    contentEs:
      "Bitcoin registra cada transacción en un libro público llamado blockchain. Es mantenido por miles de computadoras en todo el mundo. Cada entrada es transparente, verificada por la red y permanente.",
  },
  {
    number: 10,
    slug: "decentralization",
    category: "tecnología",
    title: "No One is in Charge",
    highlight: "Decentralization",
    content:
      "Bitcoin has no headquarters, no CEO, and no off switch. It lives on computers in homes, offices, and data centers across every continent. It cannot be shut down, censored, or controlled by any single entity. That is not a bug — it is the point.",
    contentEs:
      "Bitcoin no tiene sede, ni CEO, ni interruptor de apagado. Vive en computadoras en todos los continentes. No puede ser apagado, censurado ni controlado por ninguna entidad. Eso no es un error, es el objetivo.",
  },
  {
    number: 11,
    slug: "mining",
    category: "tecnología",
    title: "Energy Becomes Security",
    highlight: "Bitcoin Mining",
    content:
      "New Bitcoin is created through a process called mining. Computers around the world compete to solve mathematical puzzles. The winner adds a new block to the chain and receives newly created Bitcoin. Real energy spent becomes real trust created.",
    contentEs:
      "El nuevo Bitcoin se crea a través de un proceso llamado minería. Computadoras de todo el mundo compiten para resolver acertijos matemáticos. El ganador añade un nuevo bloque y recibe Bitcoin recién creado.",
  },
  {
    number: 12,
    slug: "not-your-keys",
    category: "fundamentos",
    title: "Not Your Keys, Not Your Coins",
    highlight: "True Ownership",
    content:
      "When you hold Bitcoin in a personal wallet, you own it outright. No bank can freeze it. No government can seize it without your private keys. For the first time, you can be your own bank — with all the freedom and responsibility that comes with it.",
    contentEs:
      "Cuando guardas Bitcoin en una billetera personal, lo posees completamente. Ningún banco puede congelarlo. Ningún gobierno puede incautarlo sin tus llaves privadas. Por primera vez, puedes ser tu propio banco.",
  },
  {
    number: 13,
    slug: "permissionless",
    category: "filosofía",
    title: "No One Can Stop You",
    highlight: "Permissionless Freedom",
    content:
      "Send money to anyone, anywhere in the world, in minutes. No bank approval. No borders. No minimum amount. A family in El Salvador can send five dollars to a relative abroad for nearly zero cost. That was impossible before Bitcoin.",
    contentEs:
      "Envía dinero a cualquier persona en cualquier parte del mundo en minutos. Sin aprobación bancaria. Sin fronteras. Sin monto mínimo. Una familia puede enviar cinco dólares al extranjero por casi cero costo.",
  },
  {
    number: 14,
    slug: "two-systems",
    category: "economía",
    title: "Two Systems",
    highlight: "Inflation vs. Bitcoin",
    content:
      "Fiat currencies are printed endlessly, losing value over time by design. Bitcoin's supply is fixed forever at 21 million. One system benefits the issuer at the expense of the holder. The other rewards the holder. You are standing in a forest — you have time to think.",
    contentEs:
      "Las monedas fiduciarias se imprimen sin fin, perdiendo valor por diseño. El suministro de Bitcoin está fijo en 21 millones. Un sistema beneficia al emisor a expensas del tenedor. El otro recompensa al tenedor.",
  },
  {
    number: 15,
    slug: "store-of-value",
    category: "economía",
    title: "Save for the Future",
    highlight: "Store of Value",
    content:
      "Bitcoin has preserved purchasing power better than any traditional currency over the last decade. It rewards patience. An hour of work saved in Bitcoin today has historically bought more tomorrow than an hour saved in dollars.",
    contentEs:
      "Bitcoin ha preservado el poder adquisitivo mejor que cualquier moneda tradicional en la última década. Recompensa la paciencia. Una hora de trabajo guardada en Bitcoin históricamente ha comprado más mañana.",
  },
  {
    number: 16,
    slug: "generational-wealth",
    category: "filosofía",
    title: "Generational Wealth",
    highlight: "Bitcoin for Families",
    content:
      "Bitcoin can be passed directly from parent to child with no bank, no lawyer, and no estate process. A 12-word seed phrase carries everything. For families building long-term wealth, Bitcoin offers a form of inheritance that no institution can block or confiscate.",
    contentEs:
      "Bitcoin puede transmitirse directamente de padres a hijos sin banco, sin abogado y sin proceso sucesorio. Una frase de 12 palabras lo lleva todo. Ninguna institución puede bloquearlo.",
  },
  {
    number: 17,
    slug: "global-movement",
    category: "historia",
    title: "A Global Movement",
    highlight: "Bitcoin Around the World",
    content:
      "Over 100 million people hold Bitcoin today. El Salvador made it legal tender in 2021. Lugano, Switzerland declared itself a Bitcoin city. Communities from Nigeria to the Philippines use it to escape inflation and broken banking systems.",
    contentEs:
      "Más de 100 millones de personas tienen Bitcoin hoy. El Salvador lo adoptó como moneda de curso legal en 2021. Lugano se declaró ciudad Bitcoin. Comunidades de Nigeria a Filipinas lo usan para escapar de la inflación.",
  },
  {
    number: 18,
    slug: "banking-the-unbanked",
    category: "filosofía",
    title: "Banking the Unbanked",
    highlight: "Financial Inclusion",
    content:
      "1.4 billion adults worldwide have no bank account. They are excluded not by choice, but by geography, documentation requirements, and poverty. Bitcoin requires only a phone and internet access. No ID. No minimum balance. No permission from anyone.",
    contentEs:
      "1.400 millones de adultos en el mundo no tienen cuenta bancaria. Bitcoin solo requiere un teléfono e internet. Sin identificación. Sin saldo mínimo. Sin permiso de nadie.",
  },
  {
    number: 19,
    slug: "responsibility",
    category: "filosofía",
    title: "Freedom Requires Responsibility",
    highlight: "Sovereign Living",
    content:
      "With full financial control comes full financial responsibility. If you lose your keys, no one can recover them. If you make a mistake, no one can reverse it. Bitcoin rewards those who learn, protect their keys, and think long-term.",
    contentEs:
      "Con el control financiero total viene la responsabilidad financiera total. Si pierdes tus llaves, nadie puede recuperarlas. Bitcoin recompensa a quienes aprenden y piensan a largo plazo.",
  },
  {
    number: 20,
    slug: "new-financial-system",
    category: "filosofía",
    title: "A New Financial System",
    highlight: "The Future",
    content:
      "Bitcoin is not just a better currency. It is a new layer of the internet — an open financial protocol that anyone can build on. Lightning payments, decentralized applications, and sovereign identity are being built on top of it right now.",
    contentEs:
      "Bitcoin no es solo una mejor moneda. Es una nueva capa de internet: un protocolo financiero abierto sobre el que cualquiera puede construir. Los pagos Lightning y la identidad soberana se están construyendo encima ahora mismo.",
  },
  {
    number: 21,
    slug: "your-journey-begins",
    category: "fundamentos",
    title: "Your Journey Begins",
    highlight: "Now you know the story",
    content:
      "You have walked 2 miles through the story of money — from inflation to sovereignty, from 2008 to today. The trail ends here. The journey does not. Scan the code to explore deeper, set up your first wallet, or support Magnolia Bitcoin Village.",
    contentEs:
      "Has caminado 2 millas por la historia del dinero, desde la inflación hasta la soberanía. El sendero termina aquí. El viaje no. Escanea el código para explorar más o configurar tu primera billetera.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Helpers — identical signatures to original, safe drop-in replacement
// ─────────────────────────────────────────────────────────────────────────────

export function getStationBySlug(
  stationList: Station[],
  slug: string
): Station | undefined {
  return stationList.find((s) => s.slug === slug);
}

export function getAdjacentStations(
  stationList: Station[],
  slug: string
): { prev: Station | null; next: Station | null } {
  const index = stationList.findIndex((s) => s.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? stationList[index - 1] : null,
    next: index < stationList.length - 1 ? stationList[index + 1] : null,
  };
}

export function getCategories(stationList: Station[]): StationCategory[] {
  const cats = new Set(
    stationList.map((s) => s.category).filter(Boolean) as StationCategory[]
  );
  return categories.filter((c) => cats.has(c.key)).map((c) => c.key);
}