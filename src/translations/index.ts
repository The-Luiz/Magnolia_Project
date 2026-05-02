export type Locale = "es" | "en";

export const translations = {
  es: {
    // Header
    navHome: "Inicio",
    navCounter: "Contador en Vivo",
    navDonate: "Donar",
    navFAQ: "FAQ",

    // Hero
    heroBadge: " Honrando a Satoshi Nakamoto",
    heroTitle: "Construyendo el Legado de Bitcoin en",
    heroTitleHighlight: "Magnolia",
    heroSubtitle:
      "Un santuario al aire libre de 118 acres dedicado a celebrar la contribución más revolucionaria de la humanidad: Bitcoin. Únete a nosotros para construir un monumento vivo a la libertad financiera.",
    heroCTA: "Donar Bitcoin Ahora",
    heroLearnMore: "Conoce Nuestro Proyecto",

    // Counter
    counterBadge: "Transparencia en Tiempo Real",
    counterTitle: "Contador de Recaudación en Vivo",
    counterSubtitle:
      "Cada satoshi es rastreable. Observa cómo crece nuestro fondo de manera transparente a través de la blockchain.",
    counterRaised: "Recaudado",
    counterGoal: "Meta",
    counterOf: "de",
    counterBTC: "BTC",
    counterUSD: "USD aproximado",
    counterUpdated: "Última actualización",
    counterDonors: "Contribuciones registradas",
    counterViewBlockchain: "Ver en Blockchain",

    // Fund Usage
    fundBadge: "Dónde irán tus fondos",
    fundTitle: "Proyectos que Construiremos",
    fundSubtitle:
      "Tu contribución se destinará a crear experiencias educativas y monumentales que perdurarán por generaciones.",
    project1Title: "Estatua de Satoshi Nakamoto",
    project1Desc:
      "Una majestuosa escultura en bronce que honrará la identidad anónima del creador de Bitcoin, erigida como símbolo de la libertad financiera y la innovación descentralizada. Un lugar de peregrinación para la comunidad global de Bitcoin.",
    project2Title: "Magnolia Bitcoin Trail",
    project2Desc:
      "Un museo viviente de 118 acres en el bosque con estaciones educativas interactivas, exhibiciones al aire libre sobre la historia de Bitcoin, minería, criptografía y la visión de un sistema financiero abierto para todos.",
    project3Title: "Centro de Visitantes",
    project3Desc:
      "Un espacio arquitectónico innovador con pantallas interactivas, arte digital, y una biblioteca especializada en tecnología blockchain y economía descentralizada.",

    // Contribution Levels
    levelsBadge: "Niveles de Contribución",
    levelsTitle: "Tu Generosidad Tiene Recompensa",
    levelsSubtitle:
      "Cada contribución te da acceso a beneficios exclusivos y reconocimiento permanente en nuestro proyecto.",
    level1Amount: "$50+",
    level1Title: "Fundador Digital",
    level1Desc: "Tu nombre grabado permanentemente en nuestro muro digital interactivo.",
    level2Amount: "$250+",
    level2Title: "Pionero del Sendero",
    level2Desc: "Tu nombre grabado en una placa física a lo largo del Magnolia Bitcoin Trail.",
    level3Amount: "$1,000+",
    level3Title: "VIP Inaugural",
    level3Desc:
      "Invitación VIP exclusiva a la ceremonia de inauguración. Conoce a líderes de la comunidad Bitcoin.",
    level4Amount: "$5,000+",
    level4Title: "Magnolia Experience",
    level4Desc:
      "Un fin de semana privado completo: tour exclusivo, estancia premium y ceremonia de reconocimiento.",

    // Donation
    donateBadge: "Contribuye con Bitcoin",
    donateTitle: "Realiza Tu Donación",
    donateSubtitle:
      "Envía Bitcoin a nuestra dirección verificada. Cada transacción es transparente y rastreable en la blockchain.",
    donateWalletLabel: "Dirección de Billetera Bitcoin",
    donateCopyButton: "Copiar Dirección",
    donateCopied: "¡Copiado!",
    donateQRTitle: "Escanea el Código QR",
    donateInstructionsTitle: "Instrucciones de Transferencia",
    donateStep1: "Abre tu billetera Bitcoin (Electrum, BlueWallet, Strike, etc.)",
    donateStep2: "Selecciona 'Enviar' o 'Transferir'",
    donateStep3: "Pega la dirección de nuestra billetera o escanea el código QR",
    donateStep4: "Ingresa el monto que deseas donar y confirma la transacción",
    donateStep5: "Guarda tu ID de transacción como comprobante de tu donación",
    donateStep1Title: "Abre tu billetera Bitcoin",
    donateStep1Desc: "Usa cualquier billetera compatible con BTC (Coinbase, Binance, Trust Wallet, etc.)",
    donateStep2Title: "Escanea el código QR",
    donateStep2Desc: "O copia la dirección manualmente haciendo clic en el botón de copiar",
    donateStep3Title: "Ingresa el monto",
    donateStep3Desc: "Cantidad mínima sugerida: 0.001 BTC. Puedes enviar cualquier cantidad.",
    donateStep4Title: "Confirma la transacción",
    donateStep4Desc: "Revisa los detalles y confirma. La transacción se procesará en ~10 minutos.",
    donateWarning:
      "Nota: Bitcoin es un activo volátil. El valor en USD puede variar. Las donaciones son voluntarias y no reembolsables.",
    donateVerify: "Verificar Dirección en Blockchain",
    donateFeedbackTitle: "Confirmación Visual",
    donateFeedbackDesc:
      "Después de enviar, puedes verificar tu transacción usando el ID proporcionado por tu billetera.",

    // FAQ
    faqBadge: "Preguntas Frecuentes",
    faqTitle: "Resolvemos tus Dudas",
    faqQ1: "¿Cómo puedo verificar que los fondos llegan a la dirección correcta?",
    faqA1:
      "Puedes verificar cualquier transacción directamente en la blockchain. Nuestra dirección es pública y auditable. Usa exploradores como Mempool.space o BlockCypher para rastrear cada satoshi en tiempo real.",
    faqQ2: "¿Las donaciones son deducibles de impuestos?",
    faqA2:
      "Depende de tu jurisdicción. Consulta con un profesional fiscal local. Proporcionaremos recibos digitales con los detalles de la transacción blockchain para tu referencia.",
    faqQ3: "¿Qué sucede si se recauda más de la meta de $22,000?",
    faqA3:
      "Los fondos adicionales se destinarán a mejoras del proyecto: ampliación del sendero educativo, programas de becas, mantenimiento del sitio y creación de contenido educativo adicional.",
    faqQ4: "¿Hay un reembolso disponible?",
    faqA4:
      "No. Por la naturaleza irreversible de las transacciones en la blockchain de Bitcoin, no es posible procesar reembolsos. Asegúrate de verificar la dirección antes de enviar.",
    faqQ5: "¿Cómo se garantiza la transparencia del uso de fondos?",
    faqA5:
      "Publicaremos informes financieros trimestrales con el desglose de gastos. Toda la contabilidad estará disponible públicamente en nuestro sitio web, respaldada por auditorías independientes.",
    faqQ6: "¿Puedo donar con otras criptomonedas?",
    faqA6:
      "Actualmente solo aceptamos Bitcoin (BTC) para mantener la simplicidad y la transparencia. Podemos considerar otras criptomonedas en el futuro según la demanda.",
    faqViewBlockchain: "Ver Cartera en Blockchain",

    // Footer
    footerTagline:
      "Construyendo un monumento vivo a la contribución de Bitcoin a la humanidad.",
    footerAbout: "Sobre Magnolia",
    footerAboutDesc:
      "Magnolia es un proyecto dedicado a preservar y celebrar el legado de Satoshi Nakamoto y la revolución de Bitcoin.",
    footerQuickLinks: "Enlaces Rápidos",
    footerLegal: "Legal",
    footerPrivacy: "Política de Privacidad",
    footerTerms: "Términos de Uso",
    footerAudit: "Auditoría Financiera",
    footerDisclaimer: "Aviso Legal",
    footerContact: "Contacto",
    footerAddress: "Magnolia Bitcoin Memorial",
    footerAddressDetail: "118 acres, El Salvador",
    footerEmail: "contacto@magnoliabitcoin.org",
    footerRights: "Todos los derechos reservados.",
    footerDisclaimerText:
      "Las contribuciones son voluntarias y no constituyen inversión. Bitcoin es un activo volátil. Consulte asesoría profesional antes de donar.",
  },

  en: {
    // Header
    navHome: "Home",
    navCounter: "Live Counter",
    navDonate: "Donate",
    navFAQ: "FAQ",

    // Hero
    heroBadge: " Honoring Satoshi Nakamoto",
    heroTitle: "Building Bitcoin's Legacy at",
    heroTitleHighlight: "Magnolia",
    heroSubtitle:
      "An open-air sanctuary of 118 acres dedicated to celebrating humanity's most revolutionary contribution: Bitcoin. Join us to build a living monument to financial freedom.",
    heroCTA: "Donate Bitcoin Now",
    heroLearnMore: "Discover Our Project",

    // Counter
    counterBadge: "Real-Time Transparency",
    counterTitle: "Live Fundraising Counter",
    counterSubtitle:
      "Every satoshi is traceable. Watch our fund grow transparently through the blockchain.",
    counterRaised: "Raised",
    counterGoal: "Goal",
    counterOf: "of",
    counterBTC: "BTC",
    counterUSD: "Approx. USD",
    counterUpdated: "Last updated",
    counterDonors: "Recorded contributions",
    counterViewBlockchain: "View on Blockchain",

    // Fund Usage
    fundBadge: "Where your funds will go",
    fundTitle: "Projects We Will Build",
    fundSubtitle:
      "Your contribution will create educational and monumental experiences that will last for generations.",
    project1Title: "Satoshi Nakamoto Statue",
    project1Desc:
      "A majestic bronze sculpture honoring the anonymous identity of Bitcoin's creator, erected as a symbol of financial freedom and decentralized innovation. A pilgrimage site for the global Bitcoin community.",
    project2Title: "Magnolia Bitcoin Trail",
    project2Desc:
      "A 118-acre living museum in the forest with interactive educational stations, outdoor exhibits on Bitcoin history, mining, cryptography, and the vision of an open financial system for all.",
    project3Title: "Visitor Center",
    project3Desc:
      "An innovative architectural space with interactive screens, digital art, and a specialized library on blockchain technology and decentralized economics.",

    // Contribution Levels
    levelsBadge: "Contribution Tiers",
    levelsTitle: "Your Generosity Has Rewards",
    levelsSubtitle:
      "Every contribution gives you access to exclusive benefits and permanent recognition in our project.",
    level1Amount: "$50+",
    level1Title: "Digital Founder",
    level1Desc: "Your name permanently engraved on our interactive digital wall.",
    level2Amount: "$250+",
    level2Title: "Trail Pioneer",
    level2Desc: "Your name engraved on a physical plaque along the Magnolia Bitcoin Trail.",
    level3Amount: "$1,000+",
    level3Title: "VIP Inaugural",
    level3Desc:
      "Exclusive VIP invitation to the inauguration ceremony. Meet Bitcoin community leaders.",
    level4Amount: "$5,000+",
    level4Title: "Magnolia Experience",
    level4Desc:
      "A complete private weekend: exclusive tour, premium stay, and recognition ceremony.",

    // Donation
    donateBadge: "Contribute with Bitcoin",
    donateTitle: "Make Your Donation",
    donateSubtitle:
      "Send Bitcoin to our verified address. Every transaction is transparent and traceable on the blockchain.",
    donateWalletLabel: "Bitcoin Wallet Address",
    donateCopyButton: "Copy Address",
    donateCopied: "Copied!",
    donateQRTitle: "Scan the QR Code",
    donateInstructionsTitle: "Transfer Instructions",
    donateStep1: "Open your Bitcoin wallet (Electrum, BlueWallet, Strike, etc.)",
    donateStep2: "Select 'Send' or 'Transfer'",
    donateStep3: "Paste our wallet address or scan the QR code",
    donateStep4: "Enter the amount you wish to donate and confirm the transaction",
    donateStep5: "Save your transaction ID as proof of your donation",
    donateStep1Title: "Open your Bitcoin wallet",
    donateStep1Desc: "Use any BTC-compatible wallet (Coinbase, Binance, Trust Wallet, etc.)",
    donateStep2Title: "Scan the QR code",
    donateStep2Desc: "Or copy the address manually by clicking the copy button",
    donateStep3Title: "Enter the amount",
    donateStep3Desc: "Suggested minimum: 0.001 BTC. You can send any amount.",
    donateStep4Title: "Confirm the transaction",
    donateStep4Desc: "Review the details and confirm. The transaction will be processed in ~10 minutes.",
    donateWarning:
      "Note: Bitcoin is a volatile asset. The USD value may vary. Donations are voluntary and non-refundable.",
    donateVerify: "Verify Address on Blockchain",
    donateFeedbackTitle: "Visual Confirmation",
    donateFeedbackDesc:
      "After sending, you can verify your transaction using the ID provided by your wallet.",

    // FAQ
    faqBadge: "Frequently Asked Questions",
    faqTitle: "Answering Your Questions",
    faqQ1: "How can I verify that funds reach the correct address?",
    faqA1:
      "You can verify any transaction directly on the blockchain. Our address is public and auditable. Use explorers like Mempool.space or BlockCypher to track every satoshi in real time.",
    faqQ2: "Are donations tax deductible?",
    faqA2:
      "It depends on your jurisdiction. Consult with a local tax professional. We will provide digital receipts with blockchain transaction details for your reference.",
    faqQ3: "What happens if more than the $22,000 goal is raised?",
    faqA3:
      "Additional funds will be used for project improvements: expanding the educational trail, scholarship programs, site maintenance, and creating additional educational content.",
    faqQ4: "Is a refund available?",
    faqA4:
      "No. Due to the irreversible nature of transactions on the Bitcoin blockchain, refunds cannot be processed. Please verify the address before sending.",
    faqQ5: "How is transparency of fund usage guaranteed?",
    faqA5:
      "We will publish quarterly financial reports with a breakdown of expenses. All accounting will be publicly available on our website, backed by independent audits.",
    faqQ6: "Can I donate with other cryptocurrencies?",
    faqA6:
      "Currently we only accept Bitcoin (BTC) to maintain simplicity and transparency. We may consider other cryptocurrencies in the future based on demand.",
    faqViewBlockchain: "View Wallet on Blockchain",

    // Footer
    footerTagline:
      "Building a living monument to Bitcoin's contribution to humanity.",
    footerAbout: "About Magnolia",
    footerAboutDesc:
      "Magnolia is a project dedicated to preserving and celebrating the legacy of Satoshi Nakamoto and the Bitcoin revolution.",
    footerQuickLinks: "Quick Links",
    footerLegal: "Legal",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Use",
    footerAudit: "Financial Audit",
    footerDisclaimer: "Legal Disclaimer",
    footerContact: "Contact",
    footerAddress: "Magnolia Bitcoin Memorial",
    footerAddressDetail: "118 acres, El Salvador",
    footerEmail: "contact@magnoliabitcoin.org",
    footerRights: "All rights reserved.",
    footerDisclaimerText:
      "Contributions are voluntary and do not constitute an investment. Bitcoin is a volatile asset. Seek professional advice before donating.",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["es"];
