import type { Station } from "@/lib/stations";

export const stations: Station[] = [
  {
    slug: "welcome",
    number: 1,
    title: "Bienvenido al Sendero Bitcoin",
    highlight:
      "Estás a punto de recorrer la historia del dinero. Del control… a la libertad. De la confianza en instituciones… a la confianza en las matemáticas.",
    content:
      "El dinero es una de las tecnologías más antiguas de la humanidad. Ha evolucionado desde conchas y metales preciosos hasta billetes y números en una pantalla. Pero por primera vez en la historia, existe un tipo de dinero que no depende de ningún gobierno, banco o autoridad central: Bitcoin.\n\nBitcoin no es solo una moneda digital. Es una idea que cambió el mundo para siempre. Nació en las cenizas de la crisis financiera de 2008, como respuesta a un sistema roto. Nadie sabe quién lo creó. Solo conocemos el seudónimo: Satoshi Nakamoto. Pero su creación vive, crece y se fortalece cada día.\n\nEste sendero te guiará a través de las estaciones fundamentales: qué es el dinero, por qué el sistema actual falla, cómo Bitcoin soluciona esos problemas, y qué significa para ti y para el futuro de la humanidad.\n\nCada estación es un paso más cerca de la comprensión. No necesitas ser experto. Solo necesitas curiosidad.\n\nBienvenido al sendero.",
    thumbnail: "/trail/welcome/thumb.avif",
    category: "fundamentos",
    images: [
      { src: "/trail/welcome/gallery/01.avif", alt: "Entrada del sendero con señalización del Bitcoin Trail" },
      { src: "/trail/welcome/gallery/02.avif", alt: "Vista panorámica del Magnolia Bitcoin Trail al amanecer" },
    ],
  },
  {
    slug: "what-is-money",
    number: 2,
    title: "¿Qué es el Dinero?",
    highlight:
      "El dinero es una herramienta. Nos ayuda a almacenar valor, intercambiar bienes y medir el valor de las cosas. Pero no todo el dinero es igual.",
    content:
      "A lo largo de la historia, la humanidad ha usado conchas, sal, oro, papel y bits como dinero. Para que algo funcione como dinero, debe cumplir tres funciones principales: ser un medio de intercambio, una unidad de cuenta y un depósito de valor.\n\nPero no todo el dinero es igual. Lo que hace que algo sea \"buen dinero\" depende de sus propiedades:\n\n• Escasez: no puede ser reproducido infinitamente\n• Durabilidad: no se deteriora con el tiempo\n• Portabilidad: fácil de transportar\n• Divisibilidad: se puede fraccionar\n• Aceptabilidad: la gente confía en él\n\nEl oro era buen dinero porque era escaso y duradero. Pero era difícil de transportar y dividir. El papel es fácil de transportar, pero pierde valor porque se imprime sin límite.\n\nBitcoin combina lo mejor de ambos: la escasez del oro con la portabilidad de lo digital. Es dinero para la era de la información.",
    thumbnail: "/trail/what-is-money/thumb.avif",
    category: "fundamentos",
    images: [
      { src: "/trail/what-is-money/gallery/01.avif", alt: "Antiguas monedas de oro y plata de diferentes civilizaciones" },
      { src: "/trail/what-is-money/gallery/02.avif", alt: "Evolución del dinero: conchas, monedas, billetes y bitcoin" },
    ],
  },
  {
    slug: "the-problem",
    number: 3,
    title: "El Problema del Dinero Fiat",
    highlight:
      "El dinero tradicional pierde valor con el tiempo. Constantemente se imprime más… haciendo que el tuyo valga menos. Esto se llama inflación.",
    content:
      "Desde que el mundo abandonó el patrón oro en 1971, el dinero ha sido creado de la nada por los bancos centrales. Esto ha llevado a una pérdida de poder adquisitivo del 96% para el dólar estadounidense desde la creación de la Reserva Federal en 1913.\n\nPiensa en esto: si alguien puede crear dinero de la nada, entonces el dinero que tú ganaste con tu trabajo vale menos cada segundo que pasa. La inflación no es un accidente: es una característica del sistema.\n\nLos bancos centrales deciden cuánto dinero existe. Tú no tienes voz ni voto. Cuando imprimen billones para rescates y guerras, quien paga la cuenta eres tú — con tu poder adquisitivo.\n\nEl ahorro se convierte en una ilusión. Trabajar más duro no alcanza. Invertir se vuelve obligación.\n\nNo es libertad. Es una jaula invisible. Y la mayoría de las personas ni siquiera la ven.",
    thumbnail: "/trail/the-problem/thumb.avif",
    category: "economía",
    images: [
      { src: "/trail/the-problem/gallery/01.avif", alt: "Gráfico de la pérdida de poder adquisitivo del dólar desde 1913" },
      { src: "/trail/the-problem/gallery/02.avif", alt: "Máquina de imprimir billetes en un banco central" },
    ],
  },
  {
    slug: "satoshi-vision",
    number: 4,
    title: "La Visión de Satoshi",
    highlight:
      "El 31 de octubre de 2008, alguien publicó un documento de 9 páginas que cambiaría el mundo para siempre. Nadie sabe quién es. Solo conocemos el seudónimo: Satoshi Nakamoto.",
    content:
      "El whitepaper de Bitcoin fue publicado por \"Satoshi Nakamoto\" en una lista de correo de criptografía. La propuesta era radical: un sistema de dinero electrónico peer-to-peer que no necesitaba bancos, gobiernos ni intermediarios. Solo matemáticas, código y consenso.\n\nSatoshi minó el primer bloque — el bloque génesis — el 3 de enero de 2009. Dentro del código escribió un mensaje: un titular de periódico sobre el rescate bancario en el Reino Unido. Era una declaración de principios.\n\nUn sistema financiero que no puede ser manipulado por nadie. Un dinero que pertenece al pueblo, no a los bancos.\n\nSatoshi desapareció en 2010. Nunca regresó. Pero su creación sigue creciendo, sin dueño, sin líderes, sin punto único de fallo. El whitepaper de 9 páginas se convirtió en la semilla de la revolución monetaria más importante de la historia moderna.",
    thumbnail: "/trail/satoshi-vision/thumb.avif",
    category: "historia",
    images: [
      { src: "/trail/satoshi-vision/gallery/01.avif", alt: "Página del whitepaper de Bitcoin con fórmulas matemáticas" },
      { src: "/trail/satoshi-vision/gallery/02.avif", alt: "Código del bloque génesis con el mensaje de Satoshi incrustado" },
    ],
  },
  {
    slug: "how-bitcoin-works",
    number: 5,
    title: "Cómo Funciona Bitcoin",
    highlight:
      "Bitcoin usa la cadena de bloques para crear un registro inmutable, transparente y descentralizado — sin confianza en terceros.",
    content:
      "Bitcoin es simple en concepto, profundo en diseño. Imagina un libro de contabilidad público donde cada transacción se registra para siempre. Eso es la blockchain.\n\nPero nadie puede modificarlo. ¿Por qué? Porque miles de computadoras alrededor del mundo tienen una copia idéntica. Para cambiar una línea, tendrías que cambiarlas todas simultáneamente. Eso es prácticamente imposible.\n\nLos mineros compiten por validar transacciones y agregar nuevos bloques a la cadena. A cambio, reciben bitcoin nuevo y comisiones. Este proceso se llama Proof of Work.\n\nCada 10 minutos, un nuevo bloque se agrega. Cada 210,000 bloques, la recompensa se reduce a la mitad. Esto se llama halving, y garantiza que nunca habrá más de 21 millones de bitcoin.\n\nEscasez programática. No se puede imprimir. No se puede manipular. Solo se puede verificar.",
    thumbnail: "/trail/how-bitcoin-works/thumb.avif",
    category: "tecnología",
    images: [
      { src: "/trail/how-bitcoin-works/gallery/01.avif", alt: "Representación visual de bloques encadenados en la blockchain" },
      { src: "/trail/how-bitcoin-works/gallery/01.avif", alt: "Nodos de la red Bitcoin conectados globalmente" },
    ],
  },
  {
    slug: "decentralization",
    number: 6,
    title: "Descentralización",
    highlight:
      "La descentralización elimina los puntos únicos de fallo y distribuye el poder entre todos los participantes de la red.",
    content:
      "El poder centralizado es frágil. Un solo punto de fallo puede derribar todo un sistema. Los bancos pueden cerrar. Los gobiernos pueden confiscar. Las corporaciones pueden censurar. Cuando el control está en unas pocas manos, la libertad de todos depende de sus decisiones.\n\nBitcoin es diferente. No hay CEO, no hay sede central, no hay servidor principal que puedas apagar. Es una red distribuida de miles de nodos independientes, cada uno ejecutando el mismo código, verificando las mismas reglas.\n\nNadie puede detenerlo. Nadie puede cambiar las reglas solo. Cualquier cambio requiere consenso de la mayoría de la red.\n\nEsto no es solo tecnología. Es una filosofía: el poder debe estar distribuido, no concentrado. La libertad requiere resiliencia. Y la resiliencia viene de la descentralización.",
    thumbnail: "/trail/decentralization/thumb.avif",
    category: "filosofía",
    images: [
      { src: "/trail/decentralization/gallery/01.avif", alt: "Red de nodos descentralizados conectados en todo el planeta" },
      { src: "/trail/decentralization/gallery/02.avif", alt: "Contraste entre sistema centralizado y descentralizado" },
    ],
  },
  {
    slug: "self-custody",
    number: 7,
    title: "Autocustodia",
    highlight:
      "La autocustodia es la esencia de la soberanía financiera — si no controlas las claves, no controlas el dinero.",
    content:
      "\"No son tus claves, no es tu bitcoin.\" Esta frase es la regla de oro del ecosistema Bitcoin.\n\nCuando dejas tu bitcoin en un exchange, estás confiando en que una empresa no será hackeada, no congelará tus fondos, no quiebre. Estás en las mismas manos de las que huiste.\n\nLa autocustodia significa que tú, y solo tú, controlas las claves privadas que dan acceso a tu bitcoin. Nadie puede congelar tu cuenta. Nadie puede censurarte. Nadie puede confiscar lo que es tuyo.\n\nCon una wallet como Electrum, Sparrow o Coldcard, tus bitcoin están realmente en tu poder. Es responsabilidad, sí. Pero también es libertad verdadera.\n\nBitcoin sin autocustodia es como tener oro pero dejarlo en la bóveda de alguien más. Puede que te lo presten cuando lo pidas… o puede que no.",
    thumbnail: "/trail/self-custody/thumb.avif",
    category: "tecnología",
    images: [
      { src: "/trail/self-custody/gallery/01.avif", alt: "Hardware wallet mostrando claves privadas de forma segura" },
      { src: "/trail/self-custody/gallery/02.avif", alt: "Persona sosteniendo su propia wallet con soberanía financiera" },
    ],
  },
  {
    slug: "the-halving",
    number: 8,
    title: "El Halving",
    highlight:
      "Cada cuatro años, algo extraordinario sucede en Bitcoin. La recompensa que reciben los mineros se reduce a la mitad — un calendario monetario que nadie puede alterar.",
    content:
      "Cada cuatro años, algo extraordinario sucede en Bitcoin. La recompensa que reciben los mineros se reduce a la mitad. Esto se llama halving, y está programado en el código desde el día uno. Nadie puede cambiarlo. Nadie puede detenerlo.\n\nEn 2009, los mineros recibían 50 BTC por bloque. En 2012: 25. En 2016: 12.5. En 2020: 6.25. En 2024: 3.125.\n\nCada halving reduce la oferta nueva de bitcoin que entra al mercado. Si la demanda se mantiene o crece, y la oferta disminuye… el precio tiende a subir. Es economía básica.\n\nPero el halving no es solo sobre el precio. Es sobre la predictibilidad. Mientras que los bancos centrales imprimen dinero de forma impredecible, Bitcoin sigue un calendario que todo el mundo puede verificar con anticipación.\n\nPlanificación frente a caos. Matemáticas frente a decisiones políticas. Así se construye la confianza a largo plazo.",
    thumbnail: "/trail/the-halving/thumb.avif",
    category: "economía",
    images: [
      { src: "/trail/the-halving/gallery/01.avif", alt: "Gráfico del calendario de halvings de Bitcoin desde 2009" },
      { src: "/trail/the-halving/gallery/02.avif", alt: "Comparación visual de la reducción de recompensa por bloque" },
    ],
  },
  {
    slug: "lightning-network",
    number: 9,
    title: "Lightning Network",
    highlight:
      "Lightning Network escala Bitcoin para pagos cotidianos — instantáneos, baratos y globales.",
    content:
      "Bitcoin es poderoso, pero lento para pagos cotidianos. La red base procesa unos 7 transacciones por segundo. Visa procesa miles. ¿Cómo compite Bitcoin?\n\nLa respuesta es Lightning Network: una segunda capa construida sobre Bitcoin que permite pagos instantáneos, casi sin comisiones y a escala global.\n\nFunciona como una autopista de peaje prepagada: abres un canal de pago, realizas miles de transacciones fuera de la cadena principal, y solo registras el saldo final cuando cierras el canal.\n\nCon Lightning puedes pagar un café en El Salvador, enviar remesas a Nigeria, o comprar un artículo online todo en segundos, pagando fracciones de centavo en comisiones.\n\nNo es teoría. Es realidad. Miles de negocios ya lo aceptan. Países enteros como El Salvador lo han adoptado.\n\nLightning convierte a Bitcoin de reserva de valor en dinero verdaderamente usable para el día a día.",
    thumbnail: "/trail/lightning-network/thumb.avif",
    category: "tecnología",
    images: [
      { src: "/trail/lightning-network/gallery/01.avif", alt: "Red de canales de pago Lightning Network interconectados" },
      { src: "/trail/lightning-network/gallery/02.avif", alt: "Pago instantáneo con Bitcoin a través de Lightning en un comercio" },
    ],
  },
  {
    slug: "future-of-freedom",
    number: 10,
    title: "El Futuro de la Libertad",
    highlight:
      "Bitcoin representa un cambio paradigmático: dinero sin permiso, libertad sin fronteras, soberanía sin intermediarios.",
    content:
      "Bitcoin no es solo dinero. Es un movimiento. Un cambio fundamental en la relación entre el individuo y el poder.\n\nPor primera vez en la historia, existe un dinero que nadie puede crear, nadie puede congelar, nadie puede censurar y nadie puede detener. Esto cambia todo. Significa que cualquier persona, en cualquier lugar del mundo, puede participar en la economía global sin permiso.\n\nNo importa si vives en Caracas, Lagos, Beirut o Buenos Aires. No importa si tu gobierno es democrático o dictatorial. Bitcoin no pide permiso. No necesita aprobación.\n\nPero la libertad no es gratuita. Requiere responsabilidad. Requiere educación. Requiere que te conviertas en tu propio banco.\n\nEl sendero que has recorrido no es el final. Es el comienzo. La verdadera jornada empieza cuando tomas control de tu propio dinero.\n\nDel control… a la libertad. De la confianza en instituciones… a la confianza en las matemáticas.\n\nBienvenido al futuro.",
    thumbnail: "/trail/future-of-freedom/thumb.avif",
    category: "filosofía",
    images: [
      { src: "/trail/future-of-freedom/gallery/01.avif", alt: "Amanecer sobre un horizonte digital simbolizando el futuro de Bitcoin" },
      { src: "/trail/future-of-freedom/gallery/02.avif", alt: "Manos sosteniendo un símbolo de Bitcoin con el mundo como telón de fondo" },
    ],
  },
];