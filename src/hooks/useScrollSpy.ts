import { useEffect, useState } from 'react';

/**
 * Returns the id of the section currently crossing a line ~35% down the viewport.
 * Uses IntersectionObserver, so no scroll listeners run per frame.
 */
export function useScrollSpy(ids: readonly string[]): string {
  const [active, setActive] = useState<string>(ids[0] ?? '');

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const visible = new Map<string, boolean>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) visible.set(entry.target.id, entry.isIntersecting);
        // Pick the last section (in page order) that is crossing the line.
        const current = ids.filter((id) => visible.get(id)).pop();
        if (current) setActive(current);
      },
      { rootMargin: '-35% 0px -64% 0px', threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));

    // The last section can be too short to reach the line; treat page bottom as "last section".
    const lastId = ids[ids.length - 1];
    const onScroll = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom && lastId) setActive(lastId);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [ids]);

  return active;
}
