import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { asset } from "@/lib/assets";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[88vh] items-center overflow-hidden bg-navy text-white"
    >
      <div className="absolute inset-0 -z-10">
        <motion.img
          src={asset("assets/afhub/hero.png")}
          alt="AF Hub de Negocios — plaza corporativa"
          className="h-full w-full object-cover opacity-70 will-change-transform"
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(0,27,53,0.92) 0%, rgba(0,27,53,0.65) 45%, rgba(0,27,53,0.25) 100%)",
          }}
        />
      </div>

      <div className="container-x relative py-24 md:py-32">
        <motion.div
          className="max-w-2xl"
          variants={stagger(0.09, 0.15)}
          initial="hidden"
          animate="show"
        >
          <motion.span variants={fadeUp} className="eyebrow text-gold mb-6 block">
            Ecosistema de Negocios
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="heading-display text-white text-[44px] sm:text-6xl md:text-7xl"
          >
            AF <span className="text-gold">|</span>{" "}
            <span className="italic font-light">Hub de Negocios</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-xl font-serif text-xl md:text-2xl italic text-white/90 leading-relaxed border-l border-gold pl-6"
          >
            “Conectamos negocios, potenciamos experiencias.”
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-lg text-base md:text-lg text-white/75 font-light leading-relaxed"
          >
            Un ecosistema de marcas que se conectan y crecen bajo una misma visión: ofrecer
            experiencias de calidad.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="#unidades" className="btn-primary">
              Conocer unidades
            </a>
            <a href="#contacto" className="btn-secondary">
              Contactar
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#nosotros"
        aria-label="Bajar a la siguiente sección"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-white/50 hover:text-gold transition-colors"
      >
        Descubrir
        <span className="h-10 w-px bg-gold/60" />
      </motion.a>
    </section>
  );
}
