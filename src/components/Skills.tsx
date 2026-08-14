import { Section, fadeUp, motion } from "./Section";
import { skills } from "../data/skills";

export function Skills() {
  return (
    <Section id="skills" label="03 · Skills" title="Tools I reach for">
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <motion.div key={group.label} variants={fadeUp}>
            <p className="mb-3 font-mono text-sm text-[var(--color-text-faint)]">{group.label}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item.name}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-3 py-1 text-sm text-[var(--color-text-dim)] transition-colors hover:border-[var(--color-border-hover)] hover:text-[var(--color-text)]"
                >
                  {item.icon && <item.icon size={14} style={{ color: item.color }} />}
                  {item.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
