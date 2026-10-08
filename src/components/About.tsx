import { about, experience } from '../data/portfolio';
import { experienceTotals, formatDuration, formatYearMonth, wholeYears } from '../lib/dates';
import { SectionHeading } from './SectionHeading';

export function About() {
  const totals = experienceTotals(experience);
  const overallYears = wholeYears(totals.overallMonths);
  const webYears = wholeYears(totals.webMonths);

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading index="01" label="About" id="about-title" title="Building the whole product, end to end." />

        <div className="about">
          <div className="about__story" data-reveal>
            <p className="about__lead">{about.lead}</p>
            {about.body.map((p) => (
              <p key={p.slice(0, 24)} className="about__body">
                {p}
              </p>
            ))}
          </div>

          <aside className="about__facts" data-reveal aria-label="At a glance">
            <dl className="facts">
              {about.capabilities.map((c) => (
                <div className="facts__row" key={c.label}>
                  <dt>{c.label}</dt>
                  <dd>{c.value}</dd>
                </div>
              ))}
              <div className="facts__row">
                <dt>Web development</dt>
                <dd>
                  {webYears >= 1 ? `${webYears}+ year${webYears > 1 ? 's' : ''}` : formatDuration(totals.webMonths)}
                  {totals.webSince ? <span className="facts__note">since {formatYearMonth(totals.webSince)}</span> : null}
                </dd>
              </div>
              <div className="facts__row">
                <dt>Overall professional</dt>
                <dd>
                  {overallYears}+ years
                  <span className="facts__note">including electrical and management roles</span>
                </dd>
              </div>
            </dl>
          </aside>
        </div>

        <ul className="principles" aria-label="How I work">
          {about.principles.map((p, i) => (
            <li className="principle" key={p.title} data-reveal style={{ ['--i' as string]: i }}>
              <h3 className="principle__title">{p.title}</h3>
              <p className="principle__text">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
