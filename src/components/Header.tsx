"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Globe, Bitcoin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "next-themes";

export default function Header() {
  const { t, locale, toggleLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Use useSyncExternalStore for mounted state to avoid lint warning
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: "hero", label: t("navHome") },
    { key: "counter", label: t("navCounter") },
    { key: "donate", label: t("navDonate") },
    { key: "faq", label: t("navFAQ") },
  ];

  const closeMobile = () => setMobileOpen(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A1C3A]/95 backdrop-blur-md shadow-lg"
          : "bg-[#0A1C3A]/75 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#hero" onClick={closeMobile}
            className="flex items-center gap-2 group"
          >
            <Bitcoin className="h-7 w-7 text-[#F89C24] group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xl font-bold text-white tracking-tight font-[Arimo]">
              Magnolia
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={`#${item.key}`}
                className="px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 font-[Arimo] font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleLanguage}
                className="text-white/80 hover:text-white hover:bg-white/10 px-6 py-2 h-auto"
                aria-label={locale === "es" ? "Switch to English" : "Cambiar a Español"}
              >
                <Globe className="h-4 w-4" />
                <span className="ml-1 text-xs font-bold">{locale.toUpperCase()}</span>
              </Button>
            )}

            {/* Theme Toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-white/80 hover:text-white hover:bg-white/10"
                aria-label="Toggle dark mode"
              >
                <AnimatePresence mode="wait">
                  {theme === "dark" ? (
                    <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Sun className="h-4 w-4" />
                    </motion.div>
                  ) : (
                    <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Moon className="h-4 w-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            )}

            {/* Donate CTA */}
            <a href="#donate" className="hidden sm:inline-flex">
              <Button
                className="bg-[#F89C24] text-white hover:bg-[#e08b1a] font-[Arimo] font-bold text-sm shadow-lg shadow-[#F89C24]/20"
              >
                {t("navDonate")}
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white/80 hover:text-white hover:bg-white/10"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0A1C3A]/95 backdrop-blur-md overflow-hidden border-t border-white/10"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.key}
                  href={`#${item.key}`}
                  onClick={closeMobile}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="w-full block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors font-[Arimo] font-medium"
                >
                  {item.label}
                </motion.a>
              ))}
              <a href="#donate" onClick={closeMobile} className="block mt-2">
                <Button
                  className="w-full bg-[#F89C24] text-white hover:bg-[#e08b1a] font-[Arimo] font-bold"
                >
                  {t("navDonate")}
                </Button>
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
