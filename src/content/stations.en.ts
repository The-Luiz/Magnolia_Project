import type { Station } from "@/lib/stations";

export const stations: Station[] = [
  {
    slug: "welcome",
    number: 1,
    title: "Welcome to the Bitcoin Trail",
    highlight:
      "You are about to walk through the story of money. From control… to freedom. From trust in institutions… to trust in math.",
    content:
      "Money is one of humanity's oldest technologies. It has evolved from shells and precious metals to paper bills and numbers on a screen. But for the first time in history, there is a type of money that does not depend on any government, bank, or central authority: Bitcoin.\n\nBitcoin is not just a digital currency. It is an idea that changed the world forever. It was born in the ashes of the 2008 financial crisis, as a response to a broken system. No one knows who created it. We only know the pseudonym: Satoshi Nakamoto. But his creation lives, grows, and strengthens every day.\n\nThis trail will guide you through the fundamental stations: what money is, why the current system fails, how Bitcoin solves those problems, and what it means for you and the future of humanity.\n\nEach station is one step closer to understanding. You don't need to be an expert. You only need curiosity.\n\nWelcome to the trail.",
    thumbnail: "/trail/welcome/thumb.avif",
    category: "fundamentos",
    images: [
      { src: "/trail/welcome/gallery/01.avif", alt: "Trail entrance with Bitcoin Trail signage" },
      { src: "/trail/welcome/gallery/02.avif", alt: "Panoramic view of Magnolia Bitcoin Trail at sunrise" },
    ],
  },
  {
    slug: "what-is-money",
    number: 2,
    title: "What is Money?",
    highlight:
      "Money is a tool. It helps us store value, exchange goods, and measure worth. But not all money is created equal.",
    content:
      "Throughout history, humanity has used shells, salt, gold, paper, and bits as money. For something to function as money, it must fulfill three main roles: a medium of exchange, a unit of account, and a store of value.\n\nBut not all money is equal. What makes something \"good money\" depends on its properties:\n\n• Scarcity: it cannot be reproduced infinitely\n• Durability: it does not deteriorate over time\n• Portability: easy to transport\n• Divisibility: it can be split into smaller units\n• Acceptability: people trust in it\n\nGold was good money because it was scarce and durable. But it was difficult to transport and divide. Paper is easy to carry, but loses value because it is printed without limit.\n\nBitcoin combines the best of both: the scarcity of gold with the portability of digital. It is money for the information age.",
    thumbnail: "/trail/what-is-money/thumb.avif",
    category: "fundamentos",
    images: [
      { src: "/trail/what-is-money/gallery/01.avif", alt: "Ancient gold and silver coins from different civilizations" },
      { src: "/trail/what-is-money/gallery/02.avif", alt: "Evolution of money: shells, coins, bills, and bitcoin" },
    ],
  },
  {
    slug: "the-problem",
    number: 3,
    title: "The Problem with Fiat Money",
    highlight:
      "Traditional money loses value over time. More is constantly printed… making yours worth less. This is called inflation.",
    content:
      "Since the world abandoned the gold standard in 1971, money has been created out of thin air by central banks. This has led to a 96% loss of purchasing power for the US dollar since the creation of the Federal Reserve in 1913.\n\nThink about this: if someone can create money from nothing, then the money you earned through your work is worth less every second that passes. Inflation is not an accident: it is a feature of the system.\n\nCentral banks decide how much money exists. You have no say. When they print trillions for bailouts and wars, you pay the bill — with your purchasing power.\n\nSaving becomes an illusion. Working harder is not enough. Investing becomes mandatory.\n\nIt is not freedom. It is an invisible cage. And most people do not even see it.",
    thumbnail: "/trail/the-problem/thumb.avif",
    category: "economía",
    images: [
      { src: "/trail/the-problem/gallery/01.avif", alt: "Chart of US dollar purchasing power loss since 1913" },
      { src: "/trail/the-problem/gallery/02.avif", alt: "Money printing press at a central bank" },
    ],
  },
  {
    slug: "satoshi-vision",
    number: 4,
    title: "Satoshi's Vision",
    highlight:
      "On October 31, 2008, someone published a 9-page document that would change the world forever. No one knows who they are. We only know the pseudonym: Satoshi Nakamoto.",
    content:
      "The Bitcoin whitepaper was published by \"Satoshi Nakamoto\" on a cryptography mailing list. The proposal was radical: a peer-to-peer electronic cash system that needed no banks, no governments, no intermediaries. Only math, code, and consensus.\n\nSatoshi mined the first block — the genesis block — on January 3, 2009. Embedded in the code was a message: a newspaper headline about the UK bank bailout. It was a statement of principles.\n\nA financial system that cannot be manipulated by anyone. Money that belongs to the people, not the banks.\n\nSatoshi disappeared in 2010. Never returned. But his creation keeps growing, with no owner, no leaders, no single point of failure. The 9-page whitepaper became the seed of the most important monetary revolution in modern history.",
    thumbnail: "/trail/satoshi-vision/thumb.avif",
    category: "historia",
    images: [
      { src: "/trail/satoshi-vision/gallery/01.avif", alt: "Bitcoin whitepaper page with mathematical formulas" },
      { src: "/trail/satoshi-vision/gallery/02.avif", alt: "Genesis block code with Satoshi's embedded message" },
    ],
  },
  {
    slug: "how-bitcoin-works",
    number: 5,
    title: "How Bitcoin Works",
    highlight:
      "Bitcoin uses the blockchain to create an immutable, transparent, and decentralized ledger — without trust in third parties.",
    content:
      "Bitcoin is simple in concept, profound in design. Imagine a public ledger where every transaction is recorded forever. That is the blockchain.\n\nBut no one can modify it. Why? Because thousands of computers around the world each have an identical copy. To change one line, you would have to change all of them simultaneously. That is practically impossible.\n\nMiners compete to validate transactions and add new blocks to the chain. In return, they receive new bitcoin and fees. This process is called Proof of Work.\n\nEvery 10 minutes, a new block is added. Every 210,000 blocks, the reward is cut in half. This is called the halving, and it ensures there will never be more than 21 million bitcoin.\n\nProgrammatic scarcity. It cannot be printed. It cannot be manipulated. It can only be verified.",
    thumbnail: "/trail/how-bitcoin-works/thumb.avif",
    category: "tecnología",
    images: [
      { src: "/trail/how-bitcoin-works/gallery/01.avif", alt: "Visual representation of chained blocks in the blockchain" },
      { src: "/trail/how-bitcoin-works/gallery/02.avif", alt: "Bitcoin network nodes connected globally" },
    ],
  },
  {
    slug: "decentralization",
    number: 6,
    title: "Decentralization",
    highlight:
      "Decentralization eliminates single points of failure and distributes power among all participants in the network.",
    content:
      "Centralized power is fragile. A single point of failure can bring down an entire system. Banks can close. Governments can confiscate. Corporations can censor. When control is in a few hands, everyone's freedom depends on their decisions.\n\nBitcoin is different. There is no CEO, no headquarters, no main server you can shut down. It is a distributed network of thousands of independent nodes, each running the same code, verifying the same rules.\n\nNo one can stop it. No one can change the rules alone. Any change requires consensus from the majority of the network.\n\nThis is not just technology. It is a philosophy: power should be distributed, not concentrated. Freedom requires resilience. And resilience comes from decentralization.",
    thumbnail: "/trail/decentralization/thumb.avif",
    category: "filosofía",
    images: [
      { src: "/trail/decentralization/gallery/01.avif", alt: "Network of decentralized nodes connected across the planet" },
      { src: "/trail/decentralization/gallery/02.avif", alt: "Contrast between centralized and decentralized systems" },
    ],
  },
  {
    slug: "self-custody",
    number: 7,
    title: "Self-Custody",
    highlight:
      "Self-custody is the essence of financial sovereignty — if you don't control the keys, you don't control the money.",
    content:
      "\"Not your keys, not your coins.\" This phrase is the golden rule of the Bitcoin ecosystem.\n\nWhen you leave your bitcoin on an exchange, you are trusting that a company will not be hacked, will not freeze your funds, will not go bankrupt. You are back in the same hands you ran from.\n\nSelf-custody means that you, and only you, control the private keys that give access to your bitcoin. No one can freeze your account. No one can censor you. No one can confiscate what is yours.\n\nWith a wallet like Electrum, Sparrow, or Coldcard, your bitcoin are truly in your power. It is responsibility, yes. But it is also true freedom.\n\nBitcoin without self-custody is like owning gold but leaving it in someone else's vault. They might lend it to you when you ask… or they might not.",
    thumbnail: "/trail/self-custody/thumb.avif",
    category: "tecnología",
    images: [
      { src: "/trail/self-custody/gallery/01.avif", alt: "Hardware wallet securely displaying private keys" },
      { src: "/trail/self-custody/gallery/02.avif", alt: "Person holding their own wallet with financial sovereignty" },
    ],
  },
  {
    slug: "the-halving",
    number: 8,
    title: "The Halving",
    highlight:
      "Every four years, something extraordinary happens in Bitcoin. The reward miners receive is cut in half — a monetary calendar that no one can alter.",
    content:
      "Every four years, something extraordinary happens in Bitcoin. The reward miners receive is cut in half. This is called the halving, and it has been programmed into the code since day one. No one can change it. No one can stop it.\n\nIn 2009, miners received 50 BTC per block. In 2012: 25. In 2016: 12.5. In 2020: 6.25. In 2024: 3.125.\n\nEach halving reduces the new supply of bitcoin entering the market. If demand stays the same or grows, and supply decreases… the price tends to rise. It is basic economics.\n\nBut the halving is not just about price. It is about predictability. While central banks print money unpredictably, Bitcoin follows a schedule that anyone can verify in advance.\n\nPlanning versus chaos. Math versus political decisions. This is how long-term trust is built.",
    thumbnail: "/trail/the-halving/thumb.avif",
    category: "economía",
    images: [
      { src: "/trail/the-halving/gallery/01.avif", alt: "Bitcoin halving schedule chart from 2009" },
      { src: "/trail/the-halving/gallery/02.avif", alt: "Visual comparison of block reward reduction over time" },
    ],
  },
  {
    slug: "lightning-network",
    number: 9,
    title: "Lightning Network",
    highlight:
      "The Lightning Network scales Bitcoin for everyday payments — instant, cheap, and global.",
    content:
      "Bitcoin is powerful, but slow for everyday payments. The base layer processes about 7 transactions per second. Visa processes thousands. How does Bitcoin compete?\n\nThe answer is the Lightning Network: a second layer built on top of Bitcoin that enables instant payments, nearly zero fees, and global scale.\n\nIt works like a prepaid toll road: you open a payment channel, make thousands of transactions off the main chain, and only record the final balance when you close the channel.\n\nWith Lightning you can pay for a coffee in El Salvador, send remittances to Nigeria, or buy an item online — all in seconds, paying fractions of a penny in fees.\n\nThis is not theory. It is reality. Thousands of businesses already accept it. Entire countries like El Salvador have adopted it.\n\nLightning turns Bitcoin from a store of value into money that is truly usable every day.",
    thumbnail: "/trail/lightning-network/thumb.avif",
    category: "tecnología",
    images: [
      { src: "/trail/lightning-network/gallery/01.avif", alt: "Interconnected Lightning Network payment channels" },
      { src: "/trail/lightning-network/gallery/02.avif", alt: "Instant Bitcoin payment via Lightning at a store" },
    ],
  },
  {
    slug: "future-of-freedom",
    number: 10,
    title: "The Future of Freedom",
    highlight:
      "Bitcoin represents a paradigm shift: permissionless money, borderless freedom, sovereignty without intermediaries.",
    content:
      "Bitcoin is not just money. It is a movement. A fundamental shift in the relationship between the individual and power.\n\nFor the first time in history, there is a form of money that no one can create, no one can freeze, no one can censor, and no one can stop. This changes everything. It means that anyone, anywhere in the world, can participate in the global economy without permission.\n\nIt does not matter if you live in Caracas, Lagos, Beirut, or Buenos Aires. It does not matter if your government is democratic or dictatorial. Bitcoin does not ask for permission. It does not need approval.\n\nBut freedom is not free. It requires responsibility. It requires education. It requires you to become your own bank.\n\nThe trail you have walked is not the end. It is the beginning. The real journey starts when you take control of your own money.\n\nFrom control… to freedom. From trust in institutions… to trust in math.\n\nWelcome to the future.",
    thumbnail: "/trail/future-of-freedom/thumb.avif",
    category: "filosofía",
    images: [
      { src: "/trail/future-of-freedom/gallery/01.avif", alt: "Sunrise over a digital horizon symbolizing Bitcoin's future" },
      { src: "/trail/future-of-freedom/gallery/02.avif", alt: "Hands holding a Bitcoin symbol with the world as backdrop" },
    ],
  },
];
