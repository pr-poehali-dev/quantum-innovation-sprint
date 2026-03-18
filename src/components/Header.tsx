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
    { label: "О нас", href: "#about" },
    { label: "Возможности", href: "#features" },
    { label: "Скачать", href: "#download" },
    { label: "Присоединиться", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
        } ${className ?? ""}`}
      >
        <div className="flex justify-between items-center px-6 py-4">
          <div className="text-white text-sm uppercase tracking-widest font-bold">connectly</div>

          <nav className="hidden md:flex gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-white/80 hover:text-white transition-colors duration-200 uppercase text-xs tracking-wide"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-white p-1 cursor-pointer"
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
            className="fixed top-0 left-0 right-0 bottom-0 z-30 bg-black flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-5 right-6 text-white cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <Icon name="X" size={24} />
            </button>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-white text-2xl uppercase tracking-widest hover:text-neutral-300 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
