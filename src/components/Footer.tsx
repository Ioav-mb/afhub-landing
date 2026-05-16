const nav = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#unidades", label: "Unidades" },
  { href: "#valores", label: "Valores" },
  { href: "#ubicacion", label: "Ubicación" },
];

const unitsLinks = [
  "AF Fleet",
  "AF Gym",
  "AF Fit",
  "AF Market",
  "Litabelli",
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/afhubdenegocios?igsh=dHhrY2U5cW43b2Mw",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2.2c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.64.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.67 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.21 15.58 2.2 15.21 2.2 12s.01-3.58.07-4.85C2.42 3.92 3.94 2.38 7.15 2.27 8.42 2.21 8.8 2.2 12 2.2zm0 1.8c-3.16 0-3.5.01-4.74.07-2.33.11-3.42 1.21-3.53 3.53C3.68 8.5 3.67 8.84 3.67 12c0 3.16.01 3.5.07 4.74.11 2.32 1.2 3.42 3.53 3.53C8.5 20.33 8.84 20.34 12 20.34c3.16 0 3.5-.01 4.74-.07 2.33-.11 3.42-1.21 3.53-3.53.06-1.24.07-1.58.07-4.74 0-3.16-.01-3.5-.07-4.74-.11-2.32-1.2-3.42-3.53-3.53C15.5 4.01 15.16 4 12 4zm0 3.05a4.95 4.95 0 1 1 0 9.9 4.95 4.95 0 0 1 0-9.9zm0 8.17a3.22 3.22 0 1 0 0-6.44 3.22 3.22 0 0 0 0 6.44zm5.18-8.39a1.16 1.16 0 1 1 0 2.32 1.16 1.16 0 0 1 0-2.32z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/18sqPjVTBc/?mibextid=wwXIfr",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M22.68 0H1.32C.59 0 0 .59 0 1.32v21.36C0 23.41.59 24 1.32 24h11.5v-9.29H9.69V11.1h3.13V8.41c0-3.1 1.89-4.79 4.66-4.79 1.32 0 2.46.1 2.79.14v3.24l-1.92.001c-1.5 0-1.79.72-1.79 1.76v2.31h3.58l-.47 3.62h-3.11V24h6.11c.73 0 1.32-.59 1.32-1.32V1.32C24 .59 23.41 0 22.68 0z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/595983030330",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M.06 24l1.69-6.16A11.86 11.86 0 0 1 .17 11.9C.17 5.35 5.5.02 12.05.02c3.18 0 6.17 1.24 8.41 3.49a11.83 11.83 0 0 1 3.48 8.4c0 6.56-5.33 11.89-11.89 11.89-1.99 0-3.95-.5-5.69-1.45L.06 24zm6.6-3.81c1.68 1 3.28 1.59 5.39 1.59 5.45 0 9.89-4.44 9.89-9.89 0-5.46-4.42-9.89-9.88-9.89-5.45 0-9.89 4.43-9.89 9.88 0 2.23.65 3.89 1.75 5.63L3 19.16l3.66-.97zm11.39-5.46c-.3-.15-1.78-.88-2.05-.98-.27-.1-.48-.15-.68.15s-.78.98-.95 1.18c-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.41-1.49-.89-.79-1.49-1.78-1.67-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.62-.93-2.22-.24-.59-.49-.51-.68-.52H7.7c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.11 3.22 5.12 4.52.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.12-.27-.2-.57-.35z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/af-hub-de-negocios/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.73a1.76 1.76 0 1 1 0-3.52 1.76 1.76 0 0 1 0 3.52zM20 19h-3v-5.6c0-3.37-4-3.11-4 0V19h-3V8h3v1.77c1.4-2.59 7-2.78 7 2.47V19z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-10 border-t border-white/5">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">
          <div className="lg:col-span-5 space-y-7">
            <a href="#inicio" className="flex items-baseline gap-3">
              <span className="font-serif text-2xl font-semibold tracking-tight text-gold">AF</span>
              <span className="h-5 w-px bg-gold/50" aria-hidden />
              <span className="text-[11px] uppercase tracking-[0.3em] font-semibold">
                Hub de Negocios
              </span>
            </a>
            <p className="font-serif italic text-white/65 max-w-md leading-relaxed">
              “Conectamos negocios, potenciamos experiencias.”
            </p>
            <p className="text-sm text-white/55 max-w-md leading-relaxed font-light">
              Un ecosistema de marcas que se conectan y crecen bajo una misma visión: ofrecer
              experiencias de calidad.
            </p>
            <div className="flex gap-3 pt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="h-10 w-10 border border-white/15 flex items-center justify-center text-white/70 hover:text-navy hover:bg-gold hover:border-gold hover:-translate-y-0.5 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-7 space-y-5">
            <h5 className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold">
              Navegación
            </h5>
            <ul className="space-y-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/65 hover:text-gold transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-5">
            <h5 className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold">Unidades</h5>
            <ul className="space-y-3">
              {unitsLinks.map((u) => (
                <li key={u}>
                  <a
                    href="#unidades"
                    className="text-sm text-white/65 hover:text-gold transition-colors"
                  >
                    {u}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-5">
            <h5 className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold">Contacto</h5>
            <ul className="space-y-4 text-sm">
              <li className="text-white/65 leading-relaxed">
                Eligio Ayala c/ Brasil, 1079
                <br />
                Asunción, Paraguay
              </li>
              <li>
                <a
                  href="tel:0983030330"
                  className="text-white/65 hover:text-gold transition-colors"
                >
                  0983 030 330
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@afhub.com.py"
                  className="text-white/65 hover:text-gold transition-colors"
                >
                  info@afhub.com.py
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/30">
            Asunción · Paraguay
          </p>
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
            © {new Date().getFullYear()} AF Hub de Negocios — Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
