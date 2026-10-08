import { useCallback, useRef, useState } from 'react';
import { projects, type Project } from '../data/portfolio';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { SectionHeading } from './SectionHeading';

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const open = useCallback((project: Project, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setSelected(project);
  }, []);

  const close = useCallback(() => {
    setSelected(null);
    // Return focus to the button that opened the dialog.
    triggerRef.current?.focus();
  }, []);

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          index="03"
          label="Projects"
          id="projects-title"
          title="Selected work."
          intro="An institutional dashboard shipped for a client, a multi-vendor marketplace and an AI SaaS platform. Open any one for the full breakdown."
        />

        <div className="projects">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={open} />
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={close} />
    </section>
  );
}
