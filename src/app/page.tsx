"use client";

import { useCallback } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LiveCounter from "@/components/LiveCounter";
import FundUsage from "@/components/FundUsage";
import ContributionLevels from "@/components/ContributionLevels";
import DonationFlow from "@/components/DonationFlow";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

function MagnoliaApp() {
  const handleNavigate = useCallback((section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] dark:bg-[#0A1C3A] transition-colors duration-300">
      <Header onNavigate={handleNavigate} />
      <main className="flex-1">
        <HeroSection onNavigate={handleNavigate} />
        <LiveCounter />
        <FundUsage />
        <ContributionLevels />
        <DonationFlow />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <LanguageProvider>
        <MagnoliaApp />
      </LanguageProvider>
    </ThemeProvider>
  );
}
