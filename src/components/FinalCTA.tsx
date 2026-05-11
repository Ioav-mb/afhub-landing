import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { asset } from "@/lib/assets";

export default function FinalCTA() {
  return (
    <section
      id="contacto"
      className="relative isolate flex min-h-[60vh] items-center overflow-hidden bg-navy text-white py-24 md:py-32"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={asset("assets/afhub/final-cta.png")}
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-navy/65" />
      </div>

      <div className="container-x relative">
        <motion.div
          className="max-w-2xl"
          variants={stagger(0.09)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.span variants={fadeUp} className="eyebrow text-gold">
            [ Sumate al ecosistema ]
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-[36px] md:text-6xl font-medium leading-[1.05] mt-6"
          >
            Conectemos negocios.
            <br />
            <span className="italic text-gold font-light">Potenciemos experiencias.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-lg text-base md:text-lg text-white/75 leading-relaxed font-light"
          >
            Conocé el ecosistema AF y descubrí cómo cada unidad suma valor a una visión
            compartida.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10">
            <a href="mailto:info@afhub.com.py" className="btn-primary">
              Contactar ahora
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
