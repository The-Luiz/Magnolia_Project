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
      { src: "/trail/how-bitcoin-works/gallery/02.avif", alt: "Nodos de la red Bitcoin conectados globalmente" },
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
    slug: "only-21-million",
    number: 10,
    title: "Solo 21 Millones",
    highlight:
      "Solo habrá 21 millones de Bitcoin. Ningún gobierno, empresa o persona puede cambiar eso. La escasez no es una promesa — es código.",
    content:
      "En todos los sistemas monetarios de la historia, siempre hubo alguien con el poder de crear más. Se minó más oro. Se imprimió más papel. Se añadieron más ceros a una hoja de cálculo. Ese poder siempre fue abusado.\n\nBitcoin es el primer dinero en la historia donde ese poder no existe. El suministro total está limitado a 21 millones, escrito directamente en el protocolo. Ningún voto, ningún decreto ejecutivo, ninguna medida de emergencia puede cambiarlo. Las reglas son aplicadas por matemáticas, no por confianza.\n\nAhora mismo, aproximadamente 19.7 millones de bitcoin han sido minados. Los 1.3 millones restantes se irán liberando gradualmente durante los próximos cien años, reduciéndose con cada halving hasta que el último bitcoin sea minado alrededor del año 2140.\n\nLa escasez crea valor. El oro es valioso porque hay una cantidad limitada en la tierra. Bitcoin es valioso porque hay un límite matemáticamente aplicado en el código.\n\nPor primera vez, puedes tener una forma de dinero y saber con certeza que nadie jamás la diluirá.",
    thumbnail: "/trail/only-21-million/thumb.avif",
    category: "fundamentos",
    images: [
      { src: "/trail/only-21-million/gallery/01.avif", alt: "Representación visual del límite de 21 millones de Bitcoin" },
      { src: "/trail/only-21-million/gallery/02.avif", alt: "Curva de emisión de Bitcoin mostrando la reducción de oferta con el tiempo" },
    ],
  },
  {
    slug: "not-your-keys",
    number: 11,
    title: "No Son Tus Claves, No Es Tu Bitcoin",
    highlight:
      "La autocustodia es la esencia de la soberanía financiera — si no controlas las claves, no controlas el dinero.",
    content:
      "\"No son tus claves, no es tu bitcoin.\" Esta frase es la regla de oro del ecosistema Bitcoin.\n\nCuando dejas tu bitcoin en un exchange, estás confiando en que una empresa no será hackeada, no congelará tus fondos, no quebrará. Estás de vuelta en las mismas manos de las que huiste.\n\nLa autocustodia significa que tú, y solo tú, controlas las claves privadas que dan acceso a tu bitcoin. Nadie puede congelar tu cuenta. Nadie puede censurarte. Nadie puede confiscar lo que es tuyo.\n\nCon una wallet como Electrum, Sparrow o Coldcard, tus bitcoin están realmente en tu poder. Es responsabilidad, sí. Pero también es libertad verdadera.\n\nBitcoin sin autocustodia es como tener oro pero dejarlo en la bóveda de alguien más. Puede que te lo presten cuando lo pidas… o puede que no.",
    thumbnail: "/trail/not-your-keys/thumb.avif",
    category: "fundamentos",
    images: [
      { src: "/trail/not-your-keys/gallery/01.avif", alt: "Hardware wallet y frase semilla de respaldo en una placa de acero" },
      { src: "/trail/not-your-keys/gallery/02.avif", alt: "Manos sosteniendo una llave con el símbolo de Bitcoin" },
    ],
  },
  {
    slug: "permissionless",
    number: 12,
    title: "Nadie Puede Detenerte",
    highlight:
      "Envía dinero a cualquier persona, en cualquier parte del mundo, en minutos. Sin aprobación bancaria. Sin fronteras. Sin monto mínimo.",
    content:
      "Antes de Bitcoin, enviar dinero a través de fronteras requería el permiso de bancos, gobiernos y procesadores de pago. Cada transacción pasaba por intermediarios que podían retrasarla, gravarla, revertirla o bloquearla por completo.\n\nBitcoin cambió eso. Una transacción en la red Bitcoin es validada por matemáticas y consenso, no por ninguna institución. Nadie puede detener una transacción válida. Nadie puede censurar quién envía o recibe. Nadie puede exigir tu identidad antes de permitirte participar.\n\nUna familia en El Salvador puede enviar cinco dólares a un familiar en Estados Unidos por una fracción de centavo en comisiones, en menos de una hora. Un periodista en un país autoritario puede recibir donaciones de simpatizantes de todo el mundo sin ninguna cuenta bancaria. Un refugiado sin identificación gubernamental puede guardar y mover sus ahorros sin pedir permiso a nadie.\n\nEsto no es una función añadida encima de Bitcoin. Es lo que Bitcoin es. Sin permiso. Sin fronteras. Imparable.",
    thumbnail: "/trail/permissionless/thumb.avif",
    category: "filosofía",
    images: [
      { src: "/trail/permissionless/gallery/01.avif", alt: "Mapa del mundo con rutas de transacciones Bitcoin conectando continentes" },
      { src: "/trail/permissionless/gallery/02.avif", alt: "Persona enviando Bitcoin desde un teléfono en un entorno rural" },
    ],
  },
  {
    slug: "banking-the-unbanked",
    number: 13,
    title: "Bancarizando a los No Bancarizados",
    highlight:
      "1.400 millones de adultos no tienen cuenta bancaria. Bitcoin solo requiere un teléfono e internet. Sin identificación. Sin saldo mínimo. Sin permiso.",
    content:
      "El sistema bancario global no fue construido para todos. Abrir una cuenta requiere documentación, una dirección física, un saldo mínimo y la aprobación de una institución que decide si mereces ser atendido. Para 1.400 millones de personas, esa barrera es demasiado alta.\n\nNo son pobres porque sean malos con el dinero. Están excluidos porque el sistema no fue diseñado para incluirlos. Sin cuenta bancaria, es casi imposible ahorrar de forma segura, recibir un salario, construir crédito o participar en la economía formal.\n\nBitcoin no pide nada de eso. Un teléfono, acceso a internet y una aplicación de wallet gratuita son suficientes para enviar, recibir y ahorrar dinero con las mismas herramientas disponibles para cualquier persona en Nueva York o Londres.\n\nEn Nigeria, la gente usa Bitcoin para proteger sus ahorros del colapso monetario. En Afganistán, mujeres que no pueden abrir cuentas bancarias bajo el régimen talibán reciben ingresos a través de wallets de Bitcoin. En El Salvador, los agricultores reciben pagos Lightning directamente de compradores en otros países.\n\nEl acceso financiero no es un lujo. Bitcoin lo está haciendo universal.",
    thumbnail: "/trail/banking-the-unbanked/thumb.avif",
    category: "filosofía",
    images: [
      { src: "/trail/banking-the-unbanked/gallery/01.avif", alt: "Persona en zona rural usando un smartphone básico para recibir Bitcoin" },
      { src: "/trail/banking-the-unbanked/gallery/02.avif", alt: "Mapa de adopción de Bitcoin mostrando crecimiento en economías en desarrollo" },
    ],
  },
  {
    slug: "generational-wealth",
    number: 14,
    title: "Riqueza Generacional",
    highlight:
      "Bitcoin puede transmitirse directamente de padres a hijos — sin banco, sin abogado, sin proceso sucesorio. Una frase de 12 palabras lo lleva todo.",
    content:
      "Cada generación a lo largo de la historia ha intentado transmitir algo de valor a la siguiente. Durante la mayor parte de la historia humana, eso significaba tierra, herramientas u oro. En la era moderna, significa navegar bancos, abogados, impuestos sucesorios e instituciones que cobran una comisión en cada paso.\n\nBitcoin cambia los mecanismos de la herencia de forma fundamental. Una frase semilla de 12 palabras — memorizada, escrita en acero o guardada de forma segura — lleva acceso completo a cualquier cantidad de bitcoin. Puede transmitirse de un padre a un hijo en cualquier parte del mundo, sin intermediario, sin comisión, sin aprobación gubernamental y sin demora.\n\nNo puede ser congelada por una orden judicial mientras se procesa un testamento. No puede ser confiscada por un gobierno que dispute la sucesión. No puede ser inflada antes de que la próxima generación la reciba.\n\nPara familias que construyen riqueza a largo plazo a través de fronteras, monedas y generaciones, Bitcoin es la primera herramienta que funciona igual en todos los países y bajo todos los gobiernos.\n\nEstás en un bosque que Oksana e Inna construyeron para la próxima generación. Esta estación trata sobre la misma idea.",
    thumbnail: "/trail/generational-wealth/thumb.avif",
    category: "filosofía",
    images: [
      { src: "/trail/generational-wealth/gallery/01.avif", alt: "Tres generaciones de una familia caminando juntas por un sendero del bosque" },
      { src: "/trail/generational-wealth/gallery/02.avif", alt: "Placa de acero con frase semilla representando una herencia duradera" },
    ],
  },
  {
    slug: "bitcoin-and-energy",
    number: 15,
    title: "Bitcoin y la Energía",
    highlight:
      "La minería de Bitcoin consume energía — y eso es precisamente lo que lo hace confiable. El trabajo no puede falsificarse.",
    content:
      "Una de las críticas más comunes a Bitcoin es su consumo energético. Es verdad: la red Bitcoin usa cantidades significativas de electricidad. Pero la razón es la parte más importante de la historia.\n\nProof of Work — el mecanismo que asegura Bitcoin — requiere que los mineros gasten energía computacional real para agregar un nuevo bloque a la cadena. Este gasto energético no es un desperdicio. Es un ancla física para la confianza digital. Para reescribir el historial de transacciones, un atacante necesitaría rehacer todo el trabajo que se ha realizado. Ese costo hace que el fraude sea prohibitivamente caro.\n\nTambién vale la pena entender quién está minando. Una proporción creciente de la minería de Bitcoin usa energía varada o desperdiciada: gas que de otro modo sería quemado en pozos petroleros, exceso de energía hidroeléctrica durante temporadas de baja demanda, energía geotérmica en lugares como Islandia y El Salvador. Los mineros van donde la energía es barata — y la energía barata a menudo es energía que de otro modo no se usaría.\n\nEl debate sobre la energía es real y vale la pena tenerlo. Pero la conclusión es más matizada de lo que los titulares sugieren.",
    thumbnail: "/trail/bitcoin-and-energy/thumb.avif",
    category: "tecnología",
    images: [
      { src: "/trail/bitcoin-and-energy/gallery/01.avif", alt: "Instalación de minería de Bitcoin alimentada por energía hidroeléctrica renovable" },
      { src: "/trail/bitcoin-and-energy/gallery/02.avif", alt: "Operación de minería Bitcoin geotérmica en Islandia" },
    ],
  },
  {
    slug: "bitcoin-vs-gold",
    number: 16,
    title: "Bitcoin y el Oro",
    highlight:
      "El oro preservó valor durante 5.000 años. Bitcoin tomó sus mejores propiedades y eliminó sus limitaciones.",
    content:
      "El oro ha sido el depósito de valor de la humanidad durante milenios. Es escaso, duradero, universalmente reconocido y no puede crearse artificialmente en cantidades significativas. Imperios surgieron y cayeron, pero el oro mantuvo su poder adquisitivo a través de los siglos.\n\nPero el oro tiene limitaciones que el mundo moderno expuso. Es pesado. Es caro de transportar y almacenar de forma segura. Verificar su pureza requiere equipos. Dividirlo en pequeñas cantidades es poco práctico. Y en la era digital, no puedes enviar oro por internet.\n\nBitcoin toma lo que hizo valioso al oro — escasez, durabilidad, resistencia a la devaluación — y resuelve lo que lo hizo impráctico. No pesa nada. Puede enviarse a cualquier parte del mundo en minutos. Su autenticidad se verifica matemáticamente, no físicamente. Puede dividirse en 100 millones de unidades llamadas satoshis. Y su límite de suministro es aplicado por código, no por geología.\n\nEl oro es escaso porque la tierra lo hizo así. Bitcoin es escaso porque las matemáticas lo hacen así. Ambos son honestos. Solo uno funciona en internet.",
    thumbnail: "/trail/bitcoin-vs-gold/thumb.avif",
    category: "economía",
    images: [
      { src: "/trail/bitcoin-vs-gold/gallery/01.avif", alt: "Lingotes de oro junto a un símbolo de Bitcoin representando la comparación" },
      { src: "/trail/bitcoin-vs-gold/gallery/02.avif", alt: "Gráfico de comparación de propiedades del dinero: oro vs Bitcoin" },
    ],
  },
  {
    slug: "global-adoption",
    number: 17,
    title: "Bitcoin en el Mundo",
    highlight:
      "De El Salvador a Suiza, de Nigeria a Filipinas — Bitcoin está siendo adoptado por razones reales por personas reales.",
    content:
      "La adopción de Bitcoin no es uniforme en todo el mundo, y eso es revelador. Los lugares donde Bitcoin crece más rápido son a menudo los lugares donde el sistema financiero existente ha fallado de forma más visible.\n\nEn El Salvador, Bitcoin se convirtió en moneda de curso legal en 2021. El gobierno construyó una wallet Lightning llamada Chivo y distribuyó 30 dólares en bitcoin a cada ciudadano. El objetivo era reducir el costo de las remesas — una parte significativa del PIB del país — de comisiones del 5-10% a casi cero.\n\nEn Nigeria, una de las tasas de adopción de Bitcoin más altas del mundo existe porque el naira ha perdido más del 80% de su valor en los últimos años. Los nigerianos comunes usan Bitcoin para preservar ahorros que su propia moneda no puede proteger.\n\nEn Lugano, Suiza, el gobierno de la ciudad declaró a Bitcoin de facto moneda de curso legal. Los residentes pueden pagar impuestos, servicios públicos y servicios municipales en Bitcoin.\n\nEn las Montañas Pocono de Pensilvania, Magnolia Bitcoin Village está construyendo el primer sendero Bitcoin de la naturaleza y el monumento a Satoshi en Estados Unidos — aquí mismo, donde estás parado.\n\nEl movimiento es global. Y lo están construyendo personas, no corporaciones.",
    thumbnail: "/trail/global-adoption/thumb.avif",
    category: "historia",
    images: [
      { src: "/trail/global-adoption/gallery/01.avif", alt: "Bitcoin Beach en El Zonte, El Salvador" },
      { src: "/trail/global-adoption/gallery/02.avif", alt: "Estatua de Satoshi en Lugano, Suiza" },
    ],
  },
  {
    slug: "responsibility",
    number: 18,
    title: "La Libertad Requiere Responsabilidad",
    highlight:
      "Con el control financiero total viene la responsabilidad financiera total. Bitcoin recompensa a quienes aprenden, protegen sus claves y piensan a largo plazo.",
    content:
      "Bitcoin te da algo que ningún banco, ningún gobierno y ninguna institución puede darte: control total de tu propio dinero. Nadie puede congelarlo. Nadie puede confiscarlo sin tus claves. Nadie puede inflarlo.\n\nPero esa libertad viene con un peso al que la mayoría de las personas no están acostumbradas a cargar.\n\nSi pierdes tu frase semilla, ninguna línea de atención al cliente puede recuperar tus fondos. Si envías bitcoin a una dirección incorrecta, ningún banco puede revertir la transacción. Si caes en una estafa, ningún regulador puede devolver lo que te tomaron. Las mismas propiedades que hacen a Bitcoin resistente a la confiscación gubernamental también lo hacen resistente al rescate.\n\nEsto no es una razón para evitar Bitcoin. Es una razón para tomarlo en serio. Para aprender antes de guardar. Para hacer copias de seguridad de tu frase semilla en algo duradero. Para verificar las direcciones cuidadosamente. Para ser escéptico de cualquiera que prometa rendimientos o pida acceso.\n\nVivir soberanamente no es pasivo. Es una elección activa de hacerse responsable de lo que es tuyo. El sendero te ha dado la base. Lo que construyas sobre ella depende de ti.",
    thumbnail: "/trail/responsibility/thumb.avif",
    category: "filosofía",
    images: [
      { src: "/trail/responsibility/gallery/01.avif", alt: "Persona escribiendo cuidadosamente una frase semilla de Bitcoin como respaldo" },
      { src: "/trail/responsibility/gallery/02.avif", alt: "Brújula en un sendero del bosque representando la navegación soberana" },
    ],
  },
  {
    slug: "bitcoin-in-magnolia",
    number: 19,
    title: "Bitcoin en Magnolia",
    highlight:
      "Esto no es una exhibición de museo. Bitcoin ya funciona aquí — aceptado en el resort, el centro de bienestar y el programa infantil.",
    content:
      "Todo lo que has leído en este sendero ya está en práctica en Magnolia.\n\nMagnolia Streamside Resort acepta Bitcoin para alojamiento, eventos y experiencias. Magnolia Quantum Wellness acepta Bitcoin para cada servicio. El Jardín del Bosque Infantil ya ha organizado un puesto de limonada donde los niños aceptaron satoshis en un iPad — su primera transacción, su primera lección de dinero sano.\n\nEl resort ofrece un 5% de descuento en cualquier compra realizada con Lightning. Una instalación de BTCPay Server maneja los pagos sin ningún procesador de terceros. Sin Stripe, sin Square, sin intermediario llevándose un porcentaje.\n\nAquí, junto al arroyo, se realizan reuniones mensuales de Bitcoin — sesiones de configuración de wallets, noches educativas y el tipo de comunidad que se forma cuando las personas comparten una convicción sobre algo importante.\n\nOksana e Inna Vizuete construyeron Magnolia desde 118 acres de tierra virgen en Pensilvania. Lo hicieron sin esperar permiso. Cuando descubrieron Bitcoin, reconocieron el mismo impulso: la convicción de que no necesitas pedirle a alguien más que construyas en lo que crees.\n\nNo solo estás visitando un bosque. Estás parado dentro de una comunidad Bitcoin en funcionamiento.",
    thumbnail: "/trail/bitcoin-in-magnolia/thumb.avif",
    category: "historia",
    images: [
      { src: "/trail/bitcoin-in-magnolia/gallery/01.avif", alt: "Señalización de Bitcoin aceptado en la entrada de Magnolia Streamside Resort" },
      { src: "/trail/bitcoin-in-magnolia/gallery/02.avif", alt: "Pago Lightning siendo realizado en el centro de bienestar de Magnolia" },
    ],
  },
  {
    slug: "the-future",
    number: 20,
    title: "Un Nuevo Sistema Financiero",
    highlight:
      "Bitcoin no es solo una moneda mejor. Es una nueva capa de internet — un protocolo financiero abierto sobre el que cualquiera puede construir.",
    content:
      "Estamos temprano. Eso es fácil de olvidar cuando Bitcoin aparece diariamente en las noticias financieras y es mantenido por grandes instituciones. Pero en el contexto de la historia, aún estamos en el primer capítulo.\n\nInternet fue inventado en los años 70. La mayoría de las personas no lo usaron hasta los años 90. Las aplicaciones que lo definieron — búsqueda, redes sociales, streaming, comercio electrónico — fueron construidas décadas después del protocolo. Estamos en un momento similar con Bitcoin.\n\nLightning Network está haciendo posibles los micropagos a una escala que nunca fue factible antes. Los desarrolladores están construyendo sobre Bitcoin de la misma forma que construyeron sobre el internet primitivo. Herramientas financieras que no requieren bancos, sistemas de identidad que no requieren gobiernos y rieles de pago que no requieren intermediarios se están creando ahora mismo.\n\nLa pregunta no es si este sistema existirá. Ya existe. La pregunta es si lo entenderás lo suficiente como para participar en él en tus propios términos.\n\nHas caminado 19 estaciones para llegar aquí. Ya tienes más comprensión que la mayoría de las personas en la tierra.",
    thumbnail: "/trail/the-future/thumb.avif",
    category: "filosofía",
    images: [
      { src: "/trail/the-future/gallery/01.avif", alt: "Visualización abstracta de la Lightning Network expandiéndose globalmente" },
      { src: "/trail/the-future/gallery/02.avif", alt: "Capas del protocolo Bitcoin mostrando la cadena base y Lightning Network" },
    ],
  },
  {
    slug: "your-journey-begins",
    number: 21,
    title: "Tu Viaje Comienza",
    highlight:
      "El sendero termina aquí. El viaje no. Lo que hagas a continuación depende de ti.",
    content:
      "Has caminado 2 millas a través de la historia del dinero. Desde los orígenes del intercambio hasta la invención de Bitcoin. De la inflación a la soberanía. Desde 2008 hasta hoy.\n\nHas estado en un bosque de Pensilvania y has aprendido cosas que la mayoría de las personas — incluso las que tienen educación financiera — nunca se han tomado el tiempo de entender.\n\nAhora la pregunta es: ¿qué harás con eso?\n\nSi quieres profundizar, escanea el código en esta estación. Te llevará a recursos para configurar tu primera wallet, aprender más sobre Bitcoin y conectarte con la comunidad de Magnolia Bitcoin Village.\n\nSi quieres apoyar lo que se está construyendo aquí — el sendero que acabas de recorrer, el monumento a Satoshi, el programa infantil, las reuniones mensuales — visita geyser.fund y busca Magnolia Bitcoin Village.\n\nSi quieres volver, siempre eres bienvenido. El sendero estará aquí. El arroyo estará aquí. Y la comunidad seguirá creciendo.\n\nDel control… a la libertad. De la confianza en instituciones… a la confianza en las matemáticas.\n\nGracias por caminar con nosotros.",
    thumbnail: "/trail/your-journey-begins/thumb.avif",
    category: "fundamentos",
    images: [
      { src: "/trail/your-journey-begins/gallery/01.avif", alt: "Vista de la estación final con luz solar filtrándose por el bosque de Magnolia" },
      { src: "/trail/your-journey-begins/gallery/02.avif", alt: "El arroyo de Magnolia a la hora dorada marcando el final del sendero" },
    ],
  },
];