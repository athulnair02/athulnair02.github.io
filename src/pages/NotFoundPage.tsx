import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion, fadeUp } from "../components/Section";

export function NotFoundPage() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-start justify-center px-6">
      <motion.div initial="hidden" animate="show" variants={fadeUp}>
        <p className="font-mono text-sm text-[var(--color-accent)]">404</p>
        <h1 className="mt-2 text-2xl font-semibold text-[var(--color-text)] md:text-3xl">
          Nothing here.
        </h1>
        <p className="mt-3 max-w-md text-base leading-relaxed text-[var(--color-text-dim)]">
          The page you're looking for doesn't exist, or moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] px-4 py-2 font-mono text-sm text-[var(--color-text)] transition-colors hover:border-[var(--color-border-hover)] hover:text-[var(--color-accent)]"
        >
          <ArrowLeft size={16} /> Back home
        </Link>
      </motion.div>
    </section>
  );
}
