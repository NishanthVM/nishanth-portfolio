import { experience, person, socials } from '../data/portfolio';
import { formatYearMonth } from '../lib/dates';
import { ExternalLink } from './ExternalLink';
import { ArrowDown, Download, GitHub, Globe, LinkedIn } from './Icons';
import { StackDiagram } from './StackDiagram';

const SOCIAL_ICONS = { linkedin: LinkedIn, github: GitHub, portfolio: Globe } as const;

export function Hero() {
  const current = experience.find((r) => r.end === null);

  return (
    <section id="home" className="hero" aria-labelledby="hero-title" tabIndex={-1}>
      <div className="hero__grid" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          {current ? (
            <p className="hero__status hero-in" style={{ ['--d' as string]: '0ms' }}>
              <span className="hero__pulse" aria-hidden="true" />
              {current.title} at {current.company}
              <span className="hero__status-since">since {formatYearMonth(current.start)}</span>
            </p>
          ) : null}

          <h1 id="hero-title" className="hero__name">
            <span className="hero__name-line hero-in" style={{ ['--d' as string]: '80ms' }}>
              Nishanth
            </span>
            <span className="hero__name-line hero__name-line--2 hero-in" style={{ ['--d' as string]: '180ms' }}>
              VM<span className="hero__name-dot">.</span>
            </span>
          </h1>

          <p className="hero__role hero-in" style={{ ['--d' as string]: '300ms' }}>
            {person.title}
            <span className="hero__role-sep" aria-hidden="true">
              /
            </span>
            <span className="hero__role-stack">{person.specialization}</span>
          </p>

          <p className="hero__intro hero-in" style={{ ['--d' as string]: '400ms' }}>
            {person.intro}
          </p>

          <div className="hero__ctas hero-in" style={{ ['--d' as string]: '500ms' }}>
            <a className="btn btn--primary" href="#projects">
              View my work
            </a>
            <a className="btn btn--ghost" href="#contact">
              Contact me
            </a>
            <a className="btn btn--text" href={person.resumeHref} download={person.resumeFileName}>
              <Download size={16} />
              Download résumé
            </a>
          </div>

          <ul className="hero__socials hero-in" style={{ ['--d' as string]: '600ms' }} aria-label="Profiles">
            {socials.map((s) => {
              const Icon = SOCIAL_ICONS[s.id];
              return (
                <li key={s.id}>
                  <ExternalLink href={s.href} className="hero__social">
                    <Icon size={16} />
                    <span>{s.label}</span>
                  </ExternalLink>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hero__visual hero-in" style={{ ['--d' as string]: '450ms' }}>
          <StackDiagram />
        </div>
      </div>

      <a className="hero__scroll" href="#about" aria-label="Scroll to About">
        <span className="hero__scroll-line" aria-hidden="true" />
        <ArrowDown size={14} />
      </a>
    </section>
  );
}
