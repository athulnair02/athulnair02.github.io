import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data/profile";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden px-6"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-4xl"
      >
        <motion.p variants={item} className="mb-4 font-mono text-sm text-[var(--color-accent)]">
          <span className="text-[var(--color-text-faint)]">$</span> whoami
        </motion.p>

        <motion.h1
          variants={item}
          className="text-4xl font-bold tracking-tight text-[var(--color-text)] sm:text-5xl md:text-6xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-3 font-mono text-lg text-[var(--color-text-dim)] md:text-xl"
        >
          {profile.title} <span className="text-[var(--color-text-faint)]">·</span> {profile.location}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-text-dim)] md:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[var(--color-accent)] px-4 py-2 font-mono text-sm font-medium text-[#06121a] transition-transform hover:scale-[1.03]"
          >
            <GithubIcon size={16} /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] px-4 py-2 font-mono text-sm text-[var(--color-text)] transition-colors hover:border-[var(--color-border-hover)] hover:text-[var(--color-accent)]"
          >
            <LinkedinIcon size={16} /> LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] px-4 py-2 font-mono text-sm text-[var(--color-text)] transition-colors hover:border-[var(--color-border-hover)] hover:text-[var(--color-accent)]"
          >
            <Mail size={16} /> Email
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} className="text-[var(--color-text-faint)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
