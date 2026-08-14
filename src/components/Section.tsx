import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  label?: string;
  title?: string;
  maxWidth?: string;
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Section({
  id,
  children,
  className = "",
  label,
  title,
  maxWidth = "max-w-4xl",
}: SectionProps) {
  return (
    <section id={id} className={`mx-auto ${maxWidth} px-6 py-20 md:py-28 ${className}`}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {(label || title) && (
          <motion.div variants={fadeUp} className="mb-10">
            {label && (
              <p className="mb-2 font-mono text-sm text-[var(--color-accent)]">{label}</p>
            )}
            {title && (
              <h2 className="text-2xl font-semibold text-[var(--color-text)] md:text-3xl">
                {title}
              </h2>
            )}
          </motion.div>
        )}
        {children}
      </motion.div>
    </section>
  );
}

export { motion };
