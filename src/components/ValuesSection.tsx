import { motion } from "framer-motion";
import { fadeUp, fadeUpSm, stagger, viewportOnce } from "@/lib/motion";

type Value = {
  title: string;
  description: string;
};

const values: Value[] = [
  {
    title: "Comunidad",
    description: "Creamos conexiones entre personas, marcas y experiencias.",
  },
  {
    title: "Calidad",
    description: "Cuidamos cada detalle para ofrecer propuestas de alto nivel.",
  },
  {
    title: "Confianza",
    description: "Construimos relaciones sólidas y duraderas.",
  },
  {
    title: "Crecimiento",
    description: "Impulsamos nuevas oportunidades dentro del ecosistema.",
  },
];

export default function ValuesSection() {
  return (
    <section id="valores" className="bg-navy text-white py-24 md:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="container-x relative">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.span variants={fadeUp} className="eyebrow text-gold">
            [ Lo que nos define ]
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-[34px] md:text-5xl font-medium leading-tight mt-5"
          >
            Nuestros valores
          </motion.h2>
          <motion.span
            className="block h-px w-16 bg-gold mx-auto mt-8 origin-center"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        <motion.ul
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10"
          variants={stagger(0.08, 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {values.map((v, i) => (
            <motion.li
              key={v.title}
              variants={fadeUpSm}
              className="bg-navy p-8 md:p-10 transition-colors duration-300 hover:bg-white/[0.03] group"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold/80">
                0{i + 1}
              </span>
              <h3 className="font-serif text-2xl md:text-[28px] mt-5 text-white">{v.title}</h3>
              <span className="block h-px w-8 bg-gold my-5 transition-all duration-500 group-hover:w-14" />
              <p className="text-sm md:text-base text-white/70 leading-relaxed font-light">
                {v.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
