interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  id: string;
  intro?: string;
}

/** Section number + label sit in a mono gutter; the title carries the voice. */
export function SectionHeading({ index, label, title, id, intro }: SectionHeadingProps) {
  return (
    <header className="section-head" data-reveal>
      <p className="section-head__marker">
        <span className="section-head__index">{index}</span>
        <span className="section-head__rule" aria-hidden="true" />
        <span>{label}</span>
      </p>
      <h2 className="section-head__title" id={id}>
        {title}
      </h2>
      {intro ? <p className="section-head__intro">{intro}</p> : null}
    </header>
  );
}
