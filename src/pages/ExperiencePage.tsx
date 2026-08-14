import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Section, fadeUp, motion } from "../components/Section";
import { ExperienceGantt } from "../components/ExperienceGantt";
import { experience } from "../data/experience";

export function ExperiencePage() {
  return (
    <Section id="experience-page" label="Experience" title="Where I've worked" maxWidth="max-w-3xl">
      <motion.div variants={fadeUp}>
        <Link
          to="/#about"
          className="mb-10 inline-flex items-center gap-2 font-mono text-sm text-[var(--color-text-dim)] transition-colors hover:text-[var(--color-accent)]"
        >
          <ArrowLeft size={14} /> Back home
        </Link>
      </motion.div>

      <ExperienceGantt />

      <div className="flex flex-col gap-14">
        {experience.map((entry) => (
          <motion.div key={entry.slug} id={entry.slug} variants={fadeUp} className="scroll-mt-24">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h2 className="text-lg font-semibold text-[var(--color-text)]">
                {entry.role} <span className="text-[var(--color-text-faint)]">·</span>{" "}
                <span className="text-[var(--color-accent)]">{entry.org}</span>
              </h2>
              <p className="font-mono text-xs text-[var(--color-text-faint)]">
                {entry.start} — {entry.end}
              </p>
            </div>
            <p className="mt-1 font-mono text-xs text-[var(--color-text-faint)]">{entry.location}</p>

            <div className="mt-4 flex flex-col gap-4">
              {entry.narrative.map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed text-[var(--color-text-dim)]">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
