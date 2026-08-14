import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Section, fadeUp, motion } from "./Section";
import { profile } from "../data/profile";

export function Contact() {
  return (
    <Section id="contact" label="04 · Contact" title="Let's talk">
      <motion.p
        variants={fadeUp}
        className="max-w-xl text-base leading-relaxed text-[var(--color-text-dim)]"
      >
        I'm open to new software engineering roles — reach out if something looks like a fit.
      </motion.p>

      <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-md bg-[var(--color-accent)] px-4 py-2 font-mono text-sm font-medium text-[#06121a] transition-transform hover:scale-[1.03]"
        >
          <Mail size={16} /> {profile.email}
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
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] px-4 py-2 font-mono text-sm text-[var(--color-text)] transition-colors hover:border-[var(--color-border-hover)] hover:text-[var(--color-accent)]"
        >
          <GithubIcon size={16} /> GitHub
        </a>
      </motion.div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-8">
      <p className="mx-auto max-w-4xl font-mono text-xs text-[var(--color-text-faint)]">
        © {new Date().getFullYear()} {profile.name}. Built with React, Vite &amp; Tailwind.
      </p>
    </footer>
  );
}
