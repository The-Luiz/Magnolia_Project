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
    slug: "only-21-million",
    number: 10,
    title: "Only 21 Million",
    highlight:
      "There will only ever be 21 million Bitcoin. No government, company, or person can change that. Scarcity is not a promise — it is code.",
    content:
      "In every monetary system in history, someone has always had the power to create more. More gold was mined. More paper was printed. More zeros were added to a spreadsheet. That power has always been abused.\n\nBitcoin is the first money in history where that power does not exist. The total supply is capped at 21 million, written directly into the protocol. No vote, no executive order, no emergency measure can change it. The rules are enforced by math, not by trust.\n\nRight now, about 19.7 million bitcoin have been mined. The remaining 1.3 million will be released gradually over the next hundred years, shrinking with each halving until the last bitcoin is mined around the year 2140.\n\nScarcity creates value. Gold is valuable because there is a limited amount of it in the earth. Bitcoin is valuable because there is a mathematically enforced limit in the code.\n\nFor the first time, you can hold a form of money and know with certainty that no one will ever dilute it.",
    thumbnail: "/trail/only-21-million/thumb.avif",
    category: "fundamentos",
    images: [
      { src: "/trail/only-21-million/gallery/01.avif", alt: "Visual representation of 21 million Bitcoin supply cap" },
      { src: "/trail/only-21-million/gallery/02.avif", alt: "Bitcoin issuance curve showing the decreasing supply over time" },
    ],
  },
  {
    slug: "not-your-keys",
    number: 11,
    title: "Not Your Keys, Not Your Coins",
    highlight:
      "Self-custody is the essence of financial sovereignty — if you don't control the keys, you don't control the money.",
    content:
      "\"Not your keys, not your coins.\" This phrase is the golden rule of the Bitcoin ecosystem.\n\nWhen you leave your bitcoin on an exchange, you are trusting that a company will not be hacked, will not freeze your funds, will not go bankrupt. You are back in the same hands you ran from.\n\nSelf-custody means that you, and only you, control the private keys that give access to your bitcoin. No one can freeze your account. No one can censor you. No one can confiscate what is yours.\n\nWith a wallet like Electrum, Sparrow, or Coldcard, your bitcoin are truly in your power. It is responsibility, yes. But it is also true freedom.\n\nBitcoin without self-custody is like owning gold but leaving it in someone else's vault. They might lend it to you when you ask… or they might not.",
    thumbnail: "/trail/not-your-keys/thumb.avif",
    category: "fundamentos",
    images: [
      { src: "/trail/not-your-keys/gallery/01.avif", alt: "A hardware wallet and seed phrase backup on a steel plate" },
      { src: "/trail/not-your-keys/gallery/02.avif", alt: "Hands holding a key with a Bitcoin symbol" },
    ],
  },
  {
    slug: "permissionless",
    number: 12,
    title: "No One Can Stop You",
    highlight:
      "Send money to anyone, anywhere in the world, in minutes. No bank approval. No borders. No minimum amount.",
    content:
      "Before Bitcoin, sending money across borders required the permission of banks, governments, and payment processors. Every transaction passed through intermediaries who could delay it, tax it, reverse it, or block it entirely.\n\nBitcoin changed that. A transaction on the Bitcoin network is validated by mathematics and consensus — not by any institution. No one can stop a valid transaction. No one can censor who sends or receives. No one can demand your identity before allowing you to participate.\n\nA family in El Salvador can send five dollars to a relative in the United States for a fraction of a penny in fees, in under an hour. A journalist in an authoritarian country can receive donations from supporters around the world without any bank account. A refugee with no government ID can store and move their savings without asking anyone's permission.\n\nThis is not a feature added on top of Bitcoin. It is what Bitcoin is. Permissionless. Borderless. Unstoppable.",
    thumbnail: "/trail/permissionless/thumb.avif",
    category: "filosofía",
    images: [
      { src: "/trail/permissionless/gallery/01.avif", alt: "World map with Bitcoin transaction paths connecting continents" },
      { src: "/trail/permissionless/gallery/02.avif", alt: "Person sending Bitcoin from a phone in a rural setting" },
    ],
  },
  {
    slug: "banking-the-unbanked",
    number: 13,
    title: "Banking the Unbanked",
    highlight:
      "1.4 billion adults have no bank account. Bitcoin requires only a phone and internet access. No ID. No minimum balance. No permission.",
    content:
      "The global banking system was not built for everyone. Opening an account requires documentation, a physical address, a minimum balance, and the approval of an institution that decides whether you are worth serving. For 1.4 billion people, that bar is too high.\n\nThey are not poor because they are bad with money. They are excluded because the system was not designed to include them. Without a bank account, it is nearly impossible to save securely, receive a salary, build credit, or participate in the formal economy.\n\nBitcoin does not ask for any of that. A phone, internet access, and a free wallet app are enough to send, receive, and save money with the same tools available to anyone in New York or London.\n\nIn Nigeria, people use Bitcoin to protect savings from currency collapse. In Afghanistan, women who cannot open bank accounts under Taliban rule receive income through Bitcoin wallets. In El Salvador, farmers receive Lightning payments directly from buyers in other countries.\n\nFinancial access is not a luxury. Bitcoin is making it universal.",
    thumbnail: "/trail/banking-the-unbanked/thumb.avif",
    category: "filosofía",
    images: [
      { src: "/trail/banking-the-unbanked/gallery/01.avif", alt: "Person in a rural area using a basic smartphone to receive Bitcoin" },
      { src: "/trail/banking-the-unbanked/gallery/02.avif", alt: "Bitcoin adoption map showing growth in developing economies" },
    ],
  },
  {
    slug: "generational-wealth",
    number: 14,
    title: "Generational Wealth",
    highlight:
      "Bitcoin can be passed directly from parent to child — no bank, no lawyer, no estate process. A 12-word phrase carries everything.",
    content:
      "Every generation throughout history has tried to pass something of value to the next. For most of human history, that meant land, tools, or gold. In the modern era, it means navigating banks, lawyers, estate taxes, and institutions that extract a fee at every step.\n\nBitcoin changes the mechanics of inheritance fundamentally. A 12-word seed phrase — memorized, written on steel, or stored securely — carries full access to any amount of bitcoin. It can be passed from a parent to a child anywhere in the world, with no intermediary, no fee, no government approval, and no delay.\n\nIt cannot be frozen by a court order while a will is processed. It cannot be seized by a government that disputes the estate. It cannot be inflated away before the next generation receives it.\n\nFor families building long-term wealth across borders, across currencies, and across generations, Bitcoin is the first tool that works the same in every country and under every government.\n\nYou are standing in a forest that Oksana and Inna built for the next generation. This station is about the same idea.",
    thumbnail: "/trail/generational-wealth/thumb.avif",
    category: "filosofía",
    images: [
      { src: "/trail/generational-wealth/gallery/01.avif", alt: "Three generations of a family walking a forest trail together" },
      { src: "/trail/generational-wealth/gallery/02.avif", alt: "A steel seed phrase backup plate representing lasting inheritance" },
    ],
  },
  {
    slug: "bitcoin-and-energy",
    number: 15,
    title: "Bitcoin and Energy",
    highlight:
      "Bitcoin mining consumes energy — and that is precisely what makes it trustworthy. Work cannot be faked.",
    content:
      "One of the most common criticisms of Bitcoin is its energy consumption. It is true: the Bitcoin network uses significant amounts of electricity. But the reason why is the most important part of the story.\n\nProof of Work — the mechanism that secures Bitcoin — requires miners to spend real computational energy to add a new block to the chain. This energy expenditure is not a waste. It is a physical anchor for digital trust. To rewrite the history of transactions, an attacker would need to redo all the work that was ever done. That cost makes fraud prohibitively expensive.\n\nIt is also worth understanding who is doing the mining. A growing share of Bitcoin mining now uses stranded or wasted energy: gas that would otherwise be flared at oil wells, excess hydroelectric power during off-peak seasons, geothermal energy in places like Iceland and El Salvador. Bitcoin miners go where energy is cheap — and cheap energy is often energy that would otherwise go unused.\n\nThe energy debate is real and worth having. But the conclusion is more nuanced than the headlines suggest.",
    thumbnail: "/trail/bitcoin-and-energy/thumb.avif",
    category: "tecnología",
    images: [
      { src: "/trail/bitcoin-and-energy/gallery/01.avif", alt: "Bitcoin mining facility powered by renewable hydroelectric energy" },
      { src: "/trail/bitcoin-and-energy/gallery/02.avif", alt: "Geothermal Bitcoin mining operation in Iceland" },
    ],
  },
  {
    slug: "bitcoin-vs-gold",
    number: 16,
    title: "Bitcoin and Gold",
    highlight:
      "Gold held value for 5,000 years. Bitcoin took its best properties and removed its limitations.",
    content:
      "Gold has been humanity's store of value for millennia. It is scarce, durable, universally recognized, and cannot be created artificially in meaningful quantities. Empires rose and fell, but gold held its purchasing power across centuries.\n\nBut gold has limitations that the modern world exposed. It is heavy. It is expensive to transport and store securely. Verifying its purity requires equipment. Dividing it into small amounts is impractical. And in the digital age, you cannot send gold across the internet.\n\nBitcoin takes what made gold valuable — scarcity, durability, resistance to debasement — and solves what made gold impractical. It weighs nothing. It can be sent anywhere in the world in minutes. Its authenticity is verified mathematically, not physically. It can be divided into 100 million units (called satoshis). And its supply cap is enforced by code, not by geology.\n\nGold is scarce because the earth made it that way. Bitcoin is scarce because math makes it that way. Both are honest. Only one works on the internet.",
    thumbnail: "/trail/bitcoin-vs-gold/thumb.avif",
    category: "economía",
    images: [
      { src: "/trail/bitcoin-vs-gold/gallery/01.avif", alt: "Gold bars next to a Bitcoin symbol representing the comparison" },
      { src: "/trail/bitcoin-vs-gold/gallery/02.avif", alt: "Properties of money comparison chart: gold vs Bitcoin" },
    ],
  },
  {
    slug: "global-adoption",
    number: 17,
    title: "Bitcoin Around the World",
    highlight:
      "From El Salvador to Switzerland, from Nigeria to the Philippines — Bitcoin is being adopted for real reasons by real people.",
    content:
      "Bitcoin adoption is not uniform around the world, and that is revealing. The places where Bitcoin is growing fastest are often the places where the existing financial system has failed most visibly.\n\nIn El Salvador, Bitcoin became legal tender in 2021. The government built a Lightning wallet called Chivo and distributed $30 in bitcoin to every citizen. The intent was to reduce the cost of remittances — a significant portion of the country's GDP — from 5-10% fees to near zero.\n\nIn Nigeria, one of the world's highest rates of Bitcoin adoption exists because the naira has lost over 80% of its value in recent years. Ordinary Nigerians use Bitcoin to preserve savings that their own currency cannot protect.\n\nIn Lugano, Switzerland, the city government declared Bitcoin a de facto legal tender. Residents can pay taxes, utilities, and city services in Bitcoin.\n\nIn the Pocono Mountains of Pennsylvania, Magnolia Bitcoin Village is building the first Bitcoin nature trail and Satoshi monument in the United States — right here, where you are standing.\n\nThe movement is global. And it is being built by people, not by corporations.",
    thumbnail: "/trail/global-adoption/thumb.avif",
    category: "historia",
    images: [
      { src: "/trail/global-adoption/gallery/01.avif", alt: "Bitcoin Beach in El Zonte, El Salvador" },
      { src: "/trail/global-adoption/gallery/02.avif", alt: "Satoshi statue in Lugano, Switzerland" },
    ],
  },
  {
    slug: "responsibility",
    number: 18,
    title: "Freedom Requires Responsibility",
    highlight:
      "With full financial control comes full financial responsibility. Bitcoin rewards those who learn, protect their keys, and think long-term.",
    content:
      "Bitcoin gives you something that no bank, no government, and no institution can give you: full control of your own money. No one can freeze it. No one can confiscate it without your keys. No one can inflate it away.\n\nBut that freedom comes with a weight that most people are not used to carrying.\n\nIf you lose your seed phrase, no customer service line can recover your funds. If you send bitcoin to the wrong address, no bank can reverse the transaction. If you fall for a scam, no regulator can return what was taken. The same properties that make Bitcoin resistant to government seizure also make it resistant to rescue.\n\nThis is not a reason to avoid Bitcoin. It is a reason to take it seriously. To learn before you hold. To back up your seed phrase on something durable. To verify addresses carefully. To be skeptical of anyone who promises returns or asks for access.\n\nSovereign living is not passive. It is an active choice to take responsibility for what is yours. The trail has given you the foundation. What you build on it is up to you.",
    thumbnail: "/trail/responsibility/thumb.avif",
    category: "filosofía",
    images: [
      { src: "/trail/responsibility/gallery/01.avif", alt: "Person carefully writing down a Bitcoin seed phrase for backup" },
      { src: "/trail/responsibility/gallery/02.avif", alt: "Compass on a forest trail representing sovereign navigation" },
    ],
  },
  {
    slug: "bitcoin-in-magnolia",
    number: 19,
    title: "Bitcoin at Magnolia",
    highlight:
      "This is not a museum exhibit. Bitcoin is already running here — accepted at the resort, the wellness center, and the children's program.",
    content:
      "Everything you have read on this trail is already in practice at Magnolia.\n\nMagnolia Streamside Resort accepts Bitcoin for lodging, events, and experiences. Magnolia Quantum Wellness accepts Bitcoin for every service. The Children's Forest Garden has already run a lemonade stand where kids accepted satoshis on an iPad — their first transaction, their first lesson in sound money.\n\nThe resort offers a 5% discount on any purchase made with Lightning. A BTCPay Server installation handles payments without any third-party processor. No Stripe, no Square, no intermediary taking a cut.\n\nMonthly Bitcoin gatherings happen here by the stream — wallet setup sessions, education evenings, and the kind of community that forms when people share a conviction about something important.\n\nOksana and Inna Vizuete built Magnolia from 118 acres of raw Pennsylvania land. They did it without waiting for permission. When they discovered Bitcoin, they recognized the same impulse: the conviction that you do not need to ask someone else to build what you believe in.\n\nYou are not just visiting a forest. You are standing inside a working Bitcoin community.",
    thumbnail: "/trail/bitcoin-in-magnolia/thumb.avif",
    category: "historia",
    images: [
      { src: "/trail/bitcoin-in-magnolia/gallery/01.avif", alt: "Bitcoin accepted signage at Magnolia Streamside Resort entrance" },
      { src: "/trail/bitcoin-in-magnolia/gallery/02.avif", alt: "Lightning payment being made at the Magnolia wellness center" },
    ],
  },
  {
    slug: "the-future",
    number: 20,
    title: "A New Financial System",
    highlight:
      "Bitcoin is not just a better currency. It is a new layer of the internet — an open financial protocol that anyone can build on.",
    content:
      "We are early. That is easy to forget when Bitcoin is covered daily in financial news and held by major institutions. But in the context of history, we are still in the first chapter.\n\nThe internet was invented in the 1970s. Most people did not use it until the 1990s. The applications that defined it — search, social media, streaming, e-commerce — were built decades after the protocol. We are at a similar moment with Bitcoin.\n\nLightning Network is making micropayments possible at a scale that was never feasible before. Developers are building on top of Bitcoin the way they built on top of the early internet. Financial tools that do not require banks, identity systems that do not require governments, and payment rails that do not require intermediaries are being created right now.\n\nThe question is not whether this system will exist. It already does. The question is whether you will understand it well enough to participate in it on your own terms.\n\nYou have walked 19 stations to get here. You already have more understanding than most people on earth.",
    thumbnail: "/trail/the-future/thumb.avif",
    category: "filosofía",
    images: [
      { src: "/trail/the-future/gallery/01.avif", alt: "Abstract visualization of the Lightning Network expanding globally" },
      { src: "/trail/the-future/gallery/02.avif", alt: "Bitcoin protocol layers showing base chain and Lightning Network" },
    ],
  },
  {
    slug: "your-journey-begins",
    number: 21,
    title: "Your Journey Begins",
    highlight:
      "The trail ends here. The journey does not. What you do next is up to you.",
    content:
      "You have walked 2 miles through the story of money. From the origins of exchange to the invention of Bitcoin. From inflation to sovereignty. From 2008 to today.\n\nYou have stood in a Pennsylvania forest and learned things that most people — even financially literate people — have never taken the time to understand.\n\nNow the question is: what do you do with it?\n\nIf you want to go deeper, scan the code on this station. It will take you to resources for setting up your first wallet, learning more about Bitcoin, and connecting with the Magnolia Bitcoin Village community.\n\nIf you want to support what is being built here — the trail you just walked, the Satoshi monument, the children's program, the monthly gatherings — visit geyser.fund and search for Magnolia Bitcoin Village.\n\nIf you want to come back, you are always welcome. The trail will be here. The stream will be here. And the community will keep growing.\n\nFrom control… to freedom. From trust in institutions… to trust in math.\n\nThank you for walking with us.",
    thumbnail: "/trail/your-journey-begins/thumb.avif",
    category: "fundamentos",
    images: [
      { src: "/trail/your-journey-begins/gallery/01.avif", alt: "Final station view with sunlight filtering through Magnolia forest" },
      { src: "/trail/your-journey-begins/gallery/02.avif", alt: "Magnolia stream at golden hour marking the end of the trail" },
    ],
  },
];