import { motion } from "framer-motion";
import LocationMap from "./LocationMap";
import { fadeRight, fadeUp, scaleIn, stagger, viewportOnce } from "@/lib/motion";

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=-25.28706827103126,-57.624129718013315";
const PHONE_HREF = "tel:+595983030330";

export default function LocationSection() {
  return (
    <section id="ubicacion" className="bg-[#FAFAF7] py-24 md:py-32">
      <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <LocationMap />
        </motion.div>

        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.span variants={fadeRight} className="eyebrow">
            [ Ubicación privilegiada ]
          </motion.span>
          <motion.h2 variants={fadeRight} className="heading-section mt-5">
            En el corazón de Asunción
          </motion.h2>
          <motion.span
            className="block h-px w-16 bg-gold mt-8 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="mt-10 space-y-7">
            <motion.div variants={fadeUp} className="flex items-start gap-5">
              <span
                className="mt-1 h-10 w-10 shrink-0 border border-navy/15 flex items-center justify-center text-navy"
                aria-hidden
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s-7-7.5-7-12a7 7 0 1 1 14 0c0 4.5-7 12-7 12Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-ink/40 font-semibold mb-1">
                  Dirección
                </p>
                <p className="text-lg text-navy font-medium leading-snug">
                  Eligio Ayala c/ Brasil, 1079 — Asunción, Paraguay.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-start gap-5">
              <span
                className="mt-1 h-10 w-10 shrink-0 border border-navy/15 flex items-center justify-center text-navy"
                aria-hidden
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.78.6 2.62a2 2 0 0 1-.45 2.11L8 9.79a16 16 0 0 0 6 6l1.34-1.34a2 2 0 0 1 2.11-.45c.84.28 1.72.48 2.62.6A2 2 0 0 1 22 16.92Z" />
                </svg>
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-ink/40 font-semibold mb-1">
                  Atención Personalizada
                </p>
                <p className="text-lg text-navy font-medium leading-snug">0983 030 330</p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-solid-navy flex-1 text-center"
            >
              Cómo llegar
            </a>
            <a href={PHONE_HREF} className="btn-outline-navy flex-1 text-center">
              Llamar
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
