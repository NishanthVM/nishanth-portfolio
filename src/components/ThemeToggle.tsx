import type { Theme } from '../hooks/useTheme';
import { Moon, Sun } from './Icons';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const next = theme === 'dark' ? 'light' : 'dark';
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      data-theme-state={theme}
    >
      <span className="theme-toggle__track" aria-hidden="true">
        <span className="theme-toggle__thumb">
          <Moon className="theme-toggle__icon theme-toggle__icon--moon" size={13} />
          <Sun className="theme-toggle__icon theme-toggle__icon--sun" size={13} />
        </span>
      </span>
    </button>
  );
}
