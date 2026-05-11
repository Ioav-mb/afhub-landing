import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, viewportOnce } from "@/lib/motion";

type Props = {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  amount?: number;
};

export default function Reveal({
  children,
  variants = fadeUp,
  className,
  delay = 0,
  amount = viewportOnce.amount,
}: Props) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
