import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { Route } from "@/data/routes";

interface MobileMenuProps {
  routes: Route[];
  currentPath: string;
}

export default function MobileMenu({ routes, currentPath }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const overlayContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[99999] flex flex-col justify-between bg-ink lg:hidden h-screen w-screen overflow-y-auto"
        >
          {/* Header inside Portal Overlay */}
          <div className="flex items-center justify-between px-5 py-4 lg:py-5 w-full shrink-0 relative z-10">
            <a href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
              <img
                src="/lightLogo.png"
                alt="Doblado Valle"
                className="h-10 w-auto md:h-14 object-contain"
              />
            </a>
            <button
              onClick={() => setIsOpen(false)}
              className="flex h-10 w-10 cursor-pointer items-center justify-center text-white hover:text-primary transition-colors focus:outline-none"
              aria-label="Cerrar menú"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-primary blur-[120px]" />
            <div className="absolute bottom-1/4 left-0 h-64 w-64 rounded-full bg-secondary blur-[100px]" />
          </div>

          {/* Nav links */}
          <nav className="relative z-10 flex flex-col items-center gap-3 my-auto py-6">
            {routes.map((route, index) => (
              <motion.a
                key={route.href}
                href={route.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.05,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className={`text-2xl font-semibold tracking-tight transition-colors duration-200 sm:text-3xl md:text-4xl ${
                  currentPath === route.href
                    ? "text-primary"
                    : "text-white/85 hover:text-primary"
                }`}
                style={{
                  fontFamily: "var(--font-heading)",
                  padding: "0.5rem 1.5rem",
                }}
              >
                {route.label}
              </motion.a>
            ))}

            {/* Social links */}
            <div className="mt-6 border-t border-white/15 pt-6 w-full max-w-xs px-4">
              <p className="text-xs text-concrete uppercase tracking-widest font-semibold mb-4 text-center">
                Síguenos
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-colors hover:bg-primary hover:text-ink"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-colors hover:bg-primary hover:text-ink"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </nav>
          <div className="pb-6 text-center text-xs text-white/40">
            &copy; {new Date().getFullYear()} Doblado Valle
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative z-[101] flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 lg:hidden transition-colors ${
          isOpen
            ? "text-white"
            : "text-white [.scrolled_&]:text-ink [.scrolled_&]:dark:text-white"
        }`}
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

      {/* Render overlay via Portal into document.body */}
      {mounted && createPortal(overlayContent, document.body)}
    </>
  );
}
