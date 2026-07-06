"use client";

import StationHeader from "@/components/StationHeader";
import Footer from "@/components/Footer";

export default function TrailLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background transition-colors duration-300">
      <StationHeader />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
