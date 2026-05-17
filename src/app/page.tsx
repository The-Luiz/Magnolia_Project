import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/components/ThemeProvider";
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
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <LanguageProvider>
        <div className="min-h-screen flex flex-col bg-[#F8F9FA] dark:bg-[#0A1C3A] transition-colors duration-300">
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
