import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Возможности", href: "#features" },
    { label: "Скачать", href: "#download" },
    { label: "О нас", href: "#about" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100"
            : "bg-transparent"
        } ${className ?? ""}`}
      >
        <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
          <div className={`text-lg font-bold transition-colors duration-300 ${scrolled ? "text-neutral-900" : "text-white"}`}>
            <span className="text-brand">C</span>onnectly
          </div>

          <nav className="hidden md:flex gap-8 items-center">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  scrolled ? "text-neutral-600 hover:text-neutral-900" : "text-white/80 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#register"
              className="bg-brand text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-brand-dark transition-colors duration-200"
            >
              Войти
            </a>
          </nav>

          <button
            className={`md:hidden p-1 cursor-pointer transition-colors ${scrolled ? "text-neutral-900" : "text-white"}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Открыть меню"
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-white flex flex-col items-center justify-center gap-6"
          >
            <button
              className="absolute top-5 right-6 text-neutral-700 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <Icon name="X" size={24} />
            </button>
            <div className="text-2xl font-bold mb-4">
              <span className="text-brand">C</span>onnectly
            </div>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-neutral-800 text-xl font-medium hover:text-brand transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => setMenuOpen(false)}
              className="bg-brand text-white px-8 py-3 rounded-xl text-base font-semibold hover:bg-brand-dark transition-colors mt-2"
            >
              Войти
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
