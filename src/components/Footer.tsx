import { navItems, person, projects, socials } from '../data/portfolio';
import { ExternalLink } from './ExternalLink';
import { Behance, GitHub, LinkedIn } from './Icons';

const behanceHref = projects.flatMap((p) => p.links).find((l) => l.kind === 'behance')?.href;

function formatBuildMonth(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
}

export function Footer() {
  const year = new Date().getFullYear();
  const linkedin = socials.find((s) => s.id === 'linkedin');
  const github = socials.find((s) => s.id === 'github');
  const quickLinks = navItems.filter((n) => n.id !== 'education');
  const updated = formatBuildMonth(__BUILD_DATE__);

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__name">{person.name}</p>
          <p className="footer__role">{person.title}</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <ul>
            {quickLinks.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="footer__social" aria-label="Profiles">
          {linkedin ? (
            <li>
              <ExternalLink href={linkedin.href} className="icon-btn" aria-label="LinkedIn">
                <LinkedIn size={16} />
              </ExternalLink>
            </li>
          ) : null}
          {github ? (
            <li>
              <ExternalLink href={github.href} className="icon-btn" aria-label="GitHub">
                <GitHub size={16} />
              </ExternalLink>
            </li>
          ) : null}
          {behanceHref ? (
            <li>
              <ExternalLink href={behanceHref} className="icon-btn" aria-label="Behance">
                <Behance size={16} />
              </ExternalLink>
            </li>
          ) : null}
        </ul>
      </div>
      <div className="container footer__base">
        <p>
          © {year} {person.name}. Designed and built with React and Vite.
        </p>
        {updated ? <p>Last updated {updated}</p> : null}
      </div>
    </footer>
  );
}
