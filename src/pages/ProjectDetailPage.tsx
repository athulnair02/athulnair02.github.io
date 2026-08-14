import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Lock, PlayCircle, Terminal, ImageIcon } from "lucide-react";
import { GithubIcon } from "../components/icons";
import { Section, fadeUp, motion } from "../components/Section";
import { projects, type ProjectMedia } from "../data/projects";
import { NotFoundPage } from "./NotFoundPage";

function PlaceholderIcon({ label }: { label?: string }) {
  const lower = (label ?? "").toLowerCase();
  if (lower.includes("video") || lower.includes("demo")) return <PlayCircle size={28} strokeWidth={1.5} />;
  if (lower.includes("cli") || lower.includes("terminal")) return <Terminal size={28} strokeWidth={1.5} />;
  return <ImageIcon size={28} strokeWidth={1.5} />;
}

function MediaBlock({ media }: { media: ProjectMedia }) {
  if (media.type === "image") {
    return (
      <figure className="overflow-hidden rounded-lg border border-[var(--color-border)]">
        <img src={media.src} alt={media.caption ?? ""} loading="lazy" className="w-full object-cover" />
        {media.caption && (
          <figcaption className="border-t border-[var(--color-border)] bg-[var(--color-bg-raised)] px-4 py-2 font-mono text-xs text-[var(--color-text-faint)]">
            {media.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <div className="flex aspect-video flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-bg-raised)] text-[var(--color-text-faint)]">
      <PlaceholderIcon label={media.placeholderLabel} />
      <span className="font-mono text-xs">{media.placeholderLabel ?? "Media coming soon"}</span>
    </div>
  );
}

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <Section id="project-detail" maxWidth="max-w-3xl">
      <motion.div variants={fadeUp}>
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 font-mono text-sm text-[var(--color-text-dim)] transition-colors hover:text-[var(--color-accent)]"
        >
          <ArrowLeft size={14} /> Back to projects
        </Link>
      </motion.div>

      <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-[var(--color-text)] md:text-3xl">{project.name}</h1>
          <p className="mt-2 font-mono text-sm text-[var(--color-accent)]">{project.tagline}</p>
        </div>

        {project.private ? (
          <span className="inline-flex shrink-0 items-center gap-2 rounded-md border border-[var(--color-border)] px-4 py-2 font-mono text-sm text-[var(--color-text-faint)]">
            <Lock size={16} /> Private repository
          </span>
        ) : (
          <a
            href={project.github ?? undefined}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[var(--color-accent)] px-4 py-2 font-mono text-sm font-medium text-[#06121a] transition-transform hover:scale-[1.03]"
          >
            <GithubIcon size={16} /> View on GitHub
          </a>
        )}
      </motion.div>

      <motion.div variants={fadeUp} className="mt-10">
        <p className="mb-2 font-mono text-sm text-[var(--color-text-faint)]">Goal</p>
        <p className="text-base leading-relaxed text-[var(--color-text-dim)]">{project.goal}</p>
      </motion.div>

      <motion.div variants={fadeUp} className="mt-8">
        <p className="mb-2 font-mono text-sm text-[var(--color-text-faint)]">Why I built it</p>
        <p className="text-base leading-relaxed text-[var(--color-text-dim)]">{project.whyMade}</p>
      </motion.div>

      <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-[var(--color-border)] px-2.5 py-1 font-mono text-xs text-[var(--color-text-dim)]"
          >
            {tech}
          </span>
        ))}
      </motion.div>

      <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4">
        {project.media.map((media, i) => (
          <MediaBlock key={i} media={media} />
        ))}
      </motion.div>
    </Section>
  );
}
