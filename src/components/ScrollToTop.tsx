import { useScrolled } from '../hooks/useScrolled';
import { ArrowUp } from './Icons';

export function ScrollToTop() {
  const visible = useScrolled(900);

  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    document.getElementById('home')?.focus({ preventScroll: true });
  };

  return (
    <button
      type="button"
      className={`to-top${visible ? ' is-visible' : ''}`}
      onClick={toTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      <ArrowUp size={18} />
    </button>
  );
}
