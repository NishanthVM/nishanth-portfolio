import { useEffect, useRef, useState } from 'react';
import { navItems, person } from '../data/portfolio';
import type { Theme } from '../hooks/useTheme';
import { useScrolled } from '../hooks/useScrolled';
import { Download } from './Icons';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  active: string;
  theme: Theme;
  onToggleTheme: () => void;
}

export function Navbar({ active, theme, onToggleTheme }: NavbarProps) {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Close the mobile menu on Escape and lock background scroll while it is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    document.body.classList.add('menu-open');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('menu-open');
    };
  }, [open]);

  // If the viewport grows past the mobile breakpoint, make sure the menu state resets.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 920px)');
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}${open ? ' nav--open' : ''}`}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <nav className="nav__inner" aria-label="Primary">
        <a className="nav__brand" href="#home" aria-label={`${person.name}, back to top`}>
          <span className="nav__mark" aria-hidden="true">
            nv
          </span>
          <span className="nav__name">{person.name}</span>
        </a>

        <ul className="nav__links" id="nav-menu">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`nav__link${active === item.id ? ' is-active' : ''}`}
                aria-current={active === item.id ? 'location' : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="nav__menu-resume">
            <a className="btn btn--ghost" href={person.resumeHref} download={person.resumeFileName}>
              <Download size={16} /> Download résumé
            </a>
          </li>
        </ul>

        <div className="nav__actions">
          <a
            className="nav__resume"
            href={person.resumeHref}
            download={person.resumeFileName}
            aria-label="Download résumé (PDF)"
          >
            <Download size={15} />
            <span>Résumé</span>
          </a>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            ref={menuButtonRef}
            type="button"
            className="nav__burger"
            aria-expanded={open}
            aria-controls="nav-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}
