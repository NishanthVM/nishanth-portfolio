import { useState } from 'react';
import { person, socials } from '../data/portfolio';
import { ExternalLink } from './ExternalLink';
import { ArrowUpRight, Check, Copy, Download, GitHub, Globe, LinkedIn, Mail, MapPin, Phone } from './Icons';
import { SectionHeading } from './SectionHeading';

const SOCIAL_ICONS = { linkedin: LinkedIn, github: GitHub, portfolio: Globe } as const;

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(person.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (insecure context); the mailto link still works.
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="section section--contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading index="06" label="Contact" id="contact-title" title="Let's build something." />

        <div className="contact">
          <div className="contact__primary" data-reveal>
            <p className="contact__lead">
              Have a product to build or a role to fill? Email is the quickest way to reach me.
            </p>
            <div className="contact__email-row">
              <a className="contact__email" href={`mailto:${person.email}`}>
                {person.email}
              </a>
              <button
                type="button"
                className="icon-btn"
                onClick={copyEmail}
                aria-label={copied ? 'Email address copied' : 'Copy email address'}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
              <span className="sr-only" role="status" aria-live="polite">
                {copied ? 'Email address copied to clipboard' : ''}
              </span>
            </div>
            <div className="contact__ctas">
              <a className="btn btn--primary" href={`mailto:${person.email}`}>
                <Mail size={16} /> Send an email
              </a>
              <a className="btn btn--ghost" href={person.phoneHref}>
                <Phone size={16} /> Call {person.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="contact__side" data-reveal>
            <ul className="contact__list">
              {socials.map((s) => {
                const Icon = SOCIAL_ICONS[s.id];
                return (
                  <li key={s.id}>
                    <ExternalLink href={s.href} className="contact__link">
                      <Icon size={17} />
                      <span className="contact__link-label">{s.label}</span>
                      <span className="contact__link-handle">{s.handle}</span>
                      <ArrowUpRight size={15} className="contact__link-arrow" />
                    </ExternalLink>
                  </li>
                );
              })}
              <li>
                <a className="contact__link" href={person.resumeHref} download={person.resumeFileName}>
                  <Download size={17} />
                  <span className="contact__link-label">Résumé</span>
                  <span className="contact__link-handle">PDF</span>
                  <ArrowUpRight size={15} className="contact__link-arrow" />
                </a>
              </li>
            </ul>
            <p className="contact__where">
              <MapPin size={15} /> PIN {person.postalCode}, {person.country}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
