"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Sun, Moon, Globe, ArrowLeft, Bitcoin, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/components/ThemeProvider";

export default function StationHeader() {
  const { locale, toggleLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isIndex = pathname === "/trail";

  useEffect(() => {
    setMounted(true);
  }, []);

  const backLabel = locale === "es" ? "Índice" : "Index";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0A1C3A]/95 backdrop-blur-md shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left: Back button (hidden on index) + Logo */}
          <div className="flex items-center gap-3">
            {!isIndex && (
              <Link
                href="/trail"
                className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors text-sm font-[Arimo] font-medium"
                aria-label={backLabel}
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">{backLabel}</span>
              </Link>
            )}

            <Link href="/" className="flex items-center gap-2 group">
              <Bitcoin className="h-6 w-6 text-[#F89C24] group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-base sm:text-lg font-bold text-white tracking-tight font-[Arimo]">
                Magnolia
              </span>
            </Link>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-1">
            {/* Language Toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleLanguage}
                className="text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 h-auto"
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
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="h-4 w-4" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="h-4 w-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="sm:hidden text-white/80 hover:text-white hover:bg-white/10"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
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
            className="sm:hidden bg-[#0A1C3A]/95 backdrop-blur-md overflow-hidden border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-2">
              {!isIndex && (
                <Link
                  href="/trail"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center gap-2 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors font-[Arimo] font-medium"
                >
                  <ArrowLeft className="h-4 w-4" />
                  {backLabel}
                </Link>
              )}
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="w-full flex items-center gap-2 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors font-[Arimo] font-medium"
              >
                <Bitcoin className="h-4 w-4 text-[#F89C24]" />
                Magnolia Bitcoin Trail
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
