import { experience, projects } from '../data/portfolio';
import { formatDuration, formatYearMonth, isoYearMonth, roleMonths } from '../lib/dates';
import { SectionHeading } from './SectionHeading';

export function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          index="04"
          label="Experience"
          id="experience-title"
          title="Where I've worked."
          intro="Web development since 2025, after earlier roles in electrical work and retail management."
        />

        <ol className="timeline" data-reveal>
          {experience.map((role, i) => {
            const related = (role.relatedProjectIds ?? [])
              .map((id) => projects.find((p) => p.id === id))
              .filter((p): p is NonNullable<typeof p> => Boolean(p));
            const current = role.end === null;

            return (
              <li
                key={role.id}
                className={`timeline__item${current ? ' is-current' : ''}${role.isSoftware ? '' : ' is-earlier'}`}
                style={{ ['--i' as string]: i }}
              >
                <span className="timeline__node" aria-hidden="true" />
                <div className="timeline__when">
                  <span className="timeline__dates">
                    <time dateTime={isoYearMonth(role.start)}>{formatYearMonth(role.start)}</time>
                    {' – '}
                    {role.end ? <time dateTime={isoYearMonth(role.end)}>{formatYearMonth(role.end)}</time> : 'Present'}
                  </span>
                  <span className="timeline__duration">{formatDuration(roleMonths(role))}</span>
                </div>
                <div className="timeline__what">
                  <h3 className="timeline__title">
                    {role.title}
                    {current ? <span className="badge">Current</span> : null}
                  </h3>
                  <p className="timeline__company">
                    {role.company}
                    <span className="timeline__loc">{role.location}</span>
                  </p>
                  <p className="timeline__kind">{role.isSoftware ? 'Web development' : 'Earlier career'}</p>
                  {role.notes?.length ? (
                    <ul className="timeline__notes">
                      {role.notes.map((n) => (
                        <li key={n}>{n}</li>
                      ))}
                    </ul>
                  ) : null}
                  {related.length ? (
                    <p className="timeline__related">
                      Project:{' '}
                      {related.map((p, idx) => (
                        <span key={p.id}>
                          {idx > 0 ? ', ' : ''}
                          <a href="#projects">{p.title}</a>
                        </span>
                      ))}
                    </p>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
