import { motion } from "framer-motion";
import { fadeUp, fadeUpSm, stagger, viewportOnce } from "@/lib/motion";
import { asset } from "@/lib/assets";

type Unit = {
  name: string;
  tagline: string;
  description: string;
  icon: string;
};

const units: Unit[] = [
  {
    name: "AF Fleet",
    tagline: "Car Rental",
    description: "Soluciones de movilidad y alquiler de vehículos.",
    icon: asset("assets/afhub/icon-fleet.png"),
  },
  {
    name: "AF Gym",
    tagline: "Functional Training",
    description: "Entrenamiento funcional, bienestar y comunidad.",
    icon: asset("assets/afhub/icon-gym.png"),
  },
  {
    name: "AF Fit",
    tagline: "Healthy Food",
    description: "Opciones saludables para un estilo de vida activo.",
    icon: asset("assets/afhub/icon-fit.png"),
  },
  {
    name: "AF Market",
    tagline: "Fit & Convenience",
    description: "Conveniencia, selección y practicidad en el día a día.",
    icon: asset("assets/afhub/icon-market.png"),
  },
  {
    name: "Litabelli",
    tagline: "Aprender jugando",
    description: "Experiencias educativas y lúdicas para aprender jugando.",
    icon: asset("assets/afhub/icon-litabelli.png"),
  },
];

export default function UnitsSection() {
  return (
    <section id="unidades" className="bg-[#F6F6F2] border-y border-navy/5 py-24 md:py-32">
      <div className="container-x">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.span variants={fadeUp} className="eyebrow">
            [ Marcas del ecosistema ]
          </motion.span>
          <motion.h2 variants={fadeUp} className="heading-section mt-5">
            Nuestras unidades
          </motion.h2>
          <motion.span
            className="block h-px w-16 bg-gold mx-auto mt-8 origin-center"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.p variants={fadeUp} className="body-lg mt-6">
            Cinco propuestas complementarias, una misma visión de calidad.
          </motion.p>
        </motion.div>

        <motion.ul
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-7"
          variants={stagger(0.09, 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {units.map((unit) => (
            <motion.li
              key={unit.name}
              variants={fadeUpSm}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="group bg-white border border-navy/10 p-7 md:p-8 flex flex-col items-center text-center transition-[border-color,box-shadow] duration-300 hover:border-gold hover:shadow-[0_18px_40px_-20px_rgba(0,27,53,0.25)]"
            >
              <div className="h-20 w-20 flex items-center justify-center mb-7 transition-transform duration-500 group-hover:scale-110">
                <img
                  src={unit.icon}
                  alt={`${unit.name} icon`}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-[20px] md:text-[22px] font-medium text-navy">
                {unit.name}
              </h3>
              <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-gold font-semibold">
                {unit.tagline}
              </p>
              <span className="block h-px w-8 bg-navy/15 my-5 group-hover:bg-gold group-hover:w-14 transition-all duration-500" />
              <p className="text-sm leading-relaxed text-ink/65">{unit.description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
