import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Route } from "@/data/routes";

interface MobileMenuProps {
  routes: Route[];
  currentPath: string;
}

export default function MobileMenu({ routes, currentPath }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-60 flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 lg:hidden"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          className="block h-0.5 w-6 rounded-full bg-current transition-colors"
          style={{ transformOrigin: "center" }}
        />
        <motion.span
          animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
          className="block h-0.5 w-6 rounded-full bg-current"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          className="block h-0.5 w-6 rounded-full bg-current transition-colors"
          style={{ transformOrigin: "center" }}
        />
      </button>

      {/* Full-screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink lg:hidden"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-primary blur-[120px]" />
              <div className="absolute bottom-1/4 left-0 h-64 w-64 rounded-full bg-secondary blur-[100px]" />
            </div>

            <nav className="relative z-10 flex flex-col items-center gap-2">
              {routes.map((route, index) => (
                <motion.a
                  key={route.href}
                  href={route.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className={`text-3xl font-semibold tracking-tight transition-colors duration-200 md:text-4xl ${
                    currentPath === route.href
                      ? "text-primary"
                      : "text-white/80 hover:text-primary"
                  }`}
                  style={{
                    fontFamily: "var(--font-heading)",
                    padding: "0.75rem 2rem",
                  }}
                >
                  {route.label}
                </motion.a>
              ))}

              {/* CTA in mobile menu */}
              <motion.a
                href="/contacto"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.4,
                  delay: routes.length * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold tracking-widest text-ink uppercase transition-all duration-300 hover:bg-primary-light"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Cotizar ahora
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
