import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#unidades", label: "Unidades" },
  { href: "#valores", label: "Valores" },
  { href: "#ubicacion", label: "Ubicación" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 bg-navy text-white border-b transition-colors ${
        scrolled ? "border-gold/30" : "border-gold/10"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <a href="#inicio" className="flex items-baseline gap-3 group">
          <span className="font-serif text-2xl md:text-[26px] font-semibold tracking-tight text-gold">
            AF
          </span>
          <span className="h-5 w-px bg-gold/50" aria-hidden />
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-semibold text-white/85">
            Hub de Negocios
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[12px] uppercase tracking-[0.22em] font-semibold text-white/75 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden md:inline-flex btn bg-gold text-navy hover:bg-white"
        >
          Contactar
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden h-10 w-10 flex flex-col items-center justify-center gap-1.5 border border-white/15"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <span
            className={`h-px w-5 bg-white transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span className={`h-px w-5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-px w-5 bg-white transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden bg-navy border-t border-white/5 transition-[max-height] duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="container-x flex flex-col py-6 gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-[0.22em] font-semibold text-white/80 hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="btn bg-gold text-navy hover:bg-white w-fit"
          >
            Contactar
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
