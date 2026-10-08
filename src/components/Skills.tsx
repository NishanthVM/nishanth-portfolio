import { skills } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';

export function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          index="02"
          label="Skills"
          id="skills-title"
          title="Tools I reach for."
          intro="Grouped the way I use them: from the language, through the interface and server, down to the data and the deploy."
        />

        <div className="skills">
          {skills.map((group, gi) => (
            <div className="skills__row" key={group.category} data-reveal style={{ ['--i' as string]: gi }}>
              <h3 className="skills__cat">
                <span className="skills__count" aria-hidden="true">
                  {String(group.items.length).padStart(2, '0')}
                </span>
                {group.category}
              </h3>
              <ul className="chips" aria-label={group.category}>
                {group.items.map((item, i) => (
                  <li key={item} className="chip" style={{ ['--j' as string]: i }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
