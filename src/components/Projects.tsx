import { ExternalLink, FileText, GitBranch } from "lucide-react";
import { Section, fadeUp, motion } from "./Section";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../data/projects";
import { research } from "../data/skills";

export function Projects() {
  return (
    <Section id="projects" label="02 · Work" title="What I've done" maxWidth="max-w-5xl">
      <motion.p variants={fadeUp} className="mb-4 font-mono text-sm text-[var(--color-text-faint)]">
        Projects
      </motion.p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>

      <motion.p
        variants={fadeUp}
        className="mb-4 mt-12 font-mono text-sm text-[var(--color-text-faint)]"
      >
        Publications & Research
      </motion.p>
      <div className="flex flex-col gap-4">
        <motion.a
          variants={fadeUp}
          href={research.paper.url}
          target="_blank"
          rel="noreferrer"
          className="group flex items-start gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 transition-colors hover:border-[var(--color-border-hover)]"
        >
          <FileText size={20} className="mt-1 shrink-0 text-[var(--color-accent)]" />
          <div>
            <p className="text-base font-medium text-[var(--color-text)]">{research.paper.title}</p>
            <p className="mt-1 font-mono text-sm text-[var(--color-text-dim)]">
              {research.paper.venue} <span className="text-[var(--color-text-faint)]">·</span> DOI:{" "}
              {research.paper.doi}
            </p>
          </div>
          <ExternalLink
            size={16}
            className="ml-auto mt-1 shrink-0 text-[var(--color-text-faint)] transition-colors group-hover:text-[var(--color-accent)]"
          />
        </motion.a>

        <motion.a
          variants={fadeUp}
          href={research.incasem.url}
          target="_blank"
          rel="noreferrer"
          className="group flex items-start gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 transition-colors hover:border-[var(--color-border-hover)]"
        >
          <GitBranch size={20} className="mt-1 shrink-0 text-[var(--color-accent)]" />
          <div>
            <p className="text-base font-medium text-[var(--color-text)]">
              Contributor · {research.incasem.org}/{research.incasem.name}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-dim)]">
              {research.incasem.description}
            </p>
          </div>
          <ExternalLink
            size={16}
            className="ml-auto mt-1 shrink-0 text-[var(--color-text-faint)] transition-colors group-hover:text-[var(--color-accent)]"
          />
        </motion.a>
      </div>
    </Section>
  );
}
