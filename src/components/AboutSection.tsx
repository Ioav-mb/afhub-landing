import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { asset } from "@/lib/assets";

export default function AboutSection() {
  return (
    <section id="nosotros" className="bg-white py-24 md:py-32">
      <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <motion.div
          className="order-2 lg:order-1"
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.span variants={fadeLeft} className="eyebrow">
            [ Trayectoria & Visión ]
          </motion.span>
          <motion.h2 variants={fadeLeft} className="heading-section mt-5">
            ¿Quiénes somos?
          </motion.h2>
          <motion.p
            variants={fadeLeft}
            className="mt-4 font-serif italic text-xl md:text-2xl text-navy/65"
          >
            El nuevo hub de Asunción.
          </motion.p>

          <motion.span
            className="block h-px bg-gold mt-8 origin-left"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ width: "4rem" }}
          />

          <div className="mt-8 space-y-5">
            <motion.p variants={fadeUp} className="body-lg">
              <span className="font-medium text-navy">AF | HUB de Negocios</span> es un ecosistema
              de marcas que se conectan y crecen bajo una misma visión.
            </motion.p>
            <motion.p variants={fadeUp} className="body-lg">
              Reunimos distintas unidades orientadas a servicios, bienestar, conveniencia,
              alimentación y aprendizaje, siempre con foco en la calidad de la experiencia.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="order-1 lg:order-2 relative"
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div
            className="absolute -inset-3 md:-inset-5 border border-gold/40 pointer-events-none"
            initial={{ opacity: 0, x: 0, y: 0 }}
            whileInView={{ opacity: 1, x: "1rem", y: "1rem" }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden
          />
          <img
            src={asset("assets/afhub/about.png")}
            alt="Campus corporativo AF"
            className="relative z-10 w-full aspect-[4/3] object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
