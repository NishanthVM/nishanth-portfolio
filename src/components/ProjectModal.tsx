import { useEffect, useRef } from 'react';
import type { Project } from '../data/portfolio';
import { ExternalLink } from './ExternalLink';
import { ArrowUpRight, Behance, Close } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

/**
 * Native <dialog>: gives focus trapping, Escape-to-close and an inert background for free.
 * Closing plays a short exit animation before the dialog is actually closed.
 */
export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (project && !dialog.open) {
      dialog.showModal();
      document.body.classList.add('modal-open');
      dialog.scrollTop = 0;
    }
  }, [project]);

  const requestClose = () => {
    const dialog = ref.current;
    if (!dialog) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      dialog.close();
      return;
    }
    dialog.classList.add('is-closing');
    window.setTimeout(() => {
      dialog.classList.remove('is-closing');
      dialog.close();
    }, 220);
  };

  return (
    <dialog
      ref={ref}
      className="modal"
      aria-labelledby="modal-title"
      onClose={() => {
        document.body.classList.remove('modal-open');
        onClose();
      }}
      onCancel={(e) => {
        e.preventDefault();
        requestClose();
      }}
      onClick={(e) => {
        // Clicking the backdrop (the dialog element itself, outside the panel) closes it.
        if (e.target === e.currentTarget) requestClose();
      }}
    >
      {project ? (
        <div className="modal__panel">
          <header className="modal__head">
            <div>
              <p className="modal__meta">
                {project.period}
                {project.client ? ` · for ${project.client}` : ''}
              </p>
              <h2 className="modal__title" id="modal-title">
                {project.title}
              </h2>
              <p className="modal__kicker">{project.kicker}</p>
            </div>
            <button type="button" className="icon-btn" onClick={requestClose} aria-label="Close case study">
              <Close size={18} />
            </button>
          </header>

          <div className="modal__body">
            <p className="modal__summary">{project.summary}</p>

            {project.sections.map((s) => (
              <section className="modal__section" key={s.heading}>
                <h3>{s.heading}</h3>
                <ul>
                  {s.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </section>
            ))}

            <section className="modal__section">
              <h3>Tech stack</h3>
              <ul className="chips chips--sm">
                {project.stack.map((t) => (
                  <li className="chip" key={t}>
                    {t}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {project.links.length > 0 ? (
            <footer className="modal__foot">
              {project.links.map((l) => (
                <ExternalLink
                  key={l.href}
                  href={l.href}
                  className={l.kind === 'live' ? 'btn btn--primary btn--sm' : 'btn btn--ghost btn--sm'}
                >
                  {l.kind === 'behance' ? <Behance size={15} /> : null}
                  {l.label}
                  <ArrowUpRight size={15} />
                </ExternalLink>
              ))}
            </footer>
          ) : null}
        </div>
      ) : null}
    </dialog>
  );
}
