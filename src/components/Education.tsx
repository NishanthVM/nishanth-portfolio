import { education, languages } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';

/** Education and spoken languages share one section: both are short, factual and read together. */
export function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading index="05" label="Education" id="education-title" title="Foundations." />

        <div className="edu">
          <article className="edu__card" data-reveal>
            <p className="edu__period">{education.period}</p>
            <h3 className="edu__degree">{education.degree}</h3>
            <p className="edu__short">{education.degreeShort}</p>
            <dl className="edu__where">
              <div>
                <dt>University</dt>
                <dd>{education.university}</dd>
              </div>
              <div>
                <dt>College</dt>
                <dd>{education.college}</dd>
              </div>
            </dl>
          </article>

          <div className="langs" data-reveal aria-labelledby="languages-title">
            <h3 className="langs__title" id="languages-title">
              Languages I speak
            </h3>
            <ul className="langs__list">
              {languages.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
