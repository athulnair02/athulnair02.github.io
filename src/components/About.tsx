import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Section, fadeUp, motion } from "./Section";
import { profile } from "../data/profile";
import { experience } from "../data/experience";

export function About() {
  return (
    <Section id="about" label="01 · About">
      <motion.p
        variants={fadeUp}
        className="max-w-2xl text-lg leading-relaxed text-[var(--color-text-dim)]"
      >
        {profile.bio}
      </motion.p>

      <motion.div variants={fadeUp} className="mt-8 grid gap-4 sm:grid-cols-2">
        {profile.education.map((edu) => (
          <div
            key={edu.school}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4"
          >
            <p className="font-mono text-sm text-[var(--color-accent)]">{edu.school}</p>
            <p className="mt-1 text-sm text-[var(--color-text)]">{edu.degree}</p>
            {edu.note && <p className="mt-1 text-xs text-[var(--color-text-faint)]">{edu.note}</p>}
          </div>
        ))}
      </motion.div>

      <motion.p variants={fadeUp} className="mb-3 mt-10 font-mono text-sm text-[var(--color-text-faint)]">
        Experience
      </motion.p>

      <div className="flex flex-col divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
        {experience.map((entry) => (
          <motion.div
            key={entry.slug}
            variants={fadeUp}
            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3"
          >
            <p className="text-sm text-[var(--color-text)]">
              {entry.role} <span className="text-[var(--color-text-faint)]">·</span>{" "}
              <span className="text-[var(--color-accent)]">{entry.org}</span>
            </p>
            <p className="font-mono text-xs text-[var(--color-text-faint)]">
              {entry.start} — {entry.end}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div variants={fadeUp}>
        <Link
          to="/experience"
          className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-dim)]"
        >
          View full experience <ArrowRight size={14} />
        </Link>
      </motion.div>
    </Section>
  );
}
