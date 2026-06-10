import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import dynamic from "next/dynamic";

const LiveCounter = dynamic(() => import("@/components/LiveCounter"));
const FundUsage = dynamic(() => import("@/components/FundUsage"));
const ContributionLevels = dynamic(() => import("@/components/ContributionLevels"));
const DonationFlow = dynamic(() => import("@/components/DonationFlow"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <LanguageProvider>
        <div className="min-h-screen flex flex-col transition-colors duration-300">
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
  );
}
