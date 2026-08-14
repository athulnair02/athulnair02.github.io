import { Link } from "react-router-dom";
import { Lock } from "lucide-react";
import { GithubIcon } from "./icons";
import { fadeUp, motion } from "./Section";
import type { Project } from "../data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const shownStack = project.stack.slice(0, 3);
  const extra = project.stack.length - shownStack.length;

  return (
    <motion.div variants={fadeUp}>
      <Link
        to={`/projects/${project.slug}`}
        className="group flex h-full flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 transition-colors hover:border-[var(--color-border-hover)]"
      >
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)]">
            {project.name}
          </h3>
          {project.private ? (
            <Lock size={14} className="mt-1 shrink-0 text-[var(--color-text-faint)]" />
          ) : (
            <GithubIcon size={14} className="mt-1 shrink-0 text-[var(--color-text-faint)]" />
          )}
        </div>

        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-dim)]">{project.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {shownStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--color-border)] px-2 py-0.5 font-mono text-xs text-[var(--color-text-faint)]"
            >
              {tech}
            </span>
          ))}
          {extra > 0 && (
            <span className="rounded-full border border-[var(--color-border)] px-2 py-0.5 font-mono text-xs text-[var(--color-text-faint)]">
              +{extra}
            </span>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
