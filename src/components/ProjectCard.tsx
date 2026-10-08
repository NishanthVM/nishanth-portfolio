import type { Project } from '../data/portfolio';
import { ExternalLink } from './ExternalLink';
import { ArrowUpRight, Behance } from './Icons';

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project, trigger: HTMLButtonElement) => void;
}

function hostOf(href: string): string {
  try {
    return new URL(href).host.replace(/^www\./, '');
  } catch {
    return href;
  }
}

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const live = project.links.find((l) => l.kind === 'live');
  const behance = project.links.find((l) => l.kind === 'behance');

  return (
    <article className="project" data-reveal aria-labelledby={`project-${project.id}-title`}>
      <div className="project__meta">
        <span className="project__index">{String(index + 1).padStart(2, '0')}</span>
        <span className="project__period">{project.period}</span>
        {project.client ? <span className="project__client">for {project.client}</span> : null}
      </div>

      <div className="project__body">
        {live ? (
          <div className="project__url" aria-hidden="true">
            <span className="project__url-lock" />
            {hostOf(live.href)}
          </div>
        ) : null}
        <h3 className="project__title" id={`project-${project.id}-title`}>
          {project.title}
        </h3>
        <p className="project__kicker">{project.kicker}</p>
        <p className="project__summary">{project.summary}</p>

        <ul className="project__highlights" aria-label="Highlights">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <ul className="chips chips--sm" aria-label="Tech stack">
          {project.stack.map((t) => (
            <li className="chip" key={t}>
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="project__actions">
        <button
          type="button"
          className="btn btn--primary btn--sm"
          onClick={(e) => onOpen(project, e.currentTarget)}
          aria-haspopup="dialog"
        >
          Read case study
        </button>
        {live ? (
          <ExternalLink href={live.href} className="link-arrow">
            Live site <ArrowUpRight size={15} />
          </ExternalLink>
        ) : null}
        {behance ? (
          <ExternalLink href={behance.href} className="link-arrow">
            <Behance size={15} /> Behance <ArrowUpRight size={15} />
          </ExternalLink>
        ) : null}
      </div>
    </article>
  );
}
