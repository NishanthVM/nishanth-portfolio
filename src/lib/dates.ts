import type { Role, YearMonth } from '../data/portfolio';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function currentYearMonth(now: Date = new Date()): YearMonth {
  return { year: now.getFullYear(), month: now.getMonth() + 1 };
}

export function formatYearMonth(ym: YearMonth): string {
  return `${MONTHS[ym.month - 1]} ${ym.year}`;
}

export function formatRange(start: YearMonth, end: YearMonth | null): string {
  return `${formatYearMonth(start)} – ${end ? formatYearMonth(end) : 'Present'}`;
}

/** Machine-readable value for <time dateTime>. */
export function isoYearMonth(ym: YearMonth): string {
  return `${ym.year}-${String(ym.month).padStart(2, '0')}`;
}

/** Inclusive month count: Dec 2016 → Oct 2019 counts both Dec and Oct. */
export function monthsBetween(start: YearMonth, end: YearMonth): number {
  return (end.year - start.year) * 12 + (end.month - start.month) + 1;
}

export function roleMonths(role: Role, now: YearMonth = currentYearMonth()): number {
  return monthsBetween(role.start, role.end ?? now);
}

export function formatDuration(months: number): string {
  const y = Math.floor(months / 12);
  const m = months % 12;
  const parts: string[] = [];
  if (y > 0) parts.push(`${y} yr${y > 1 ? 's' : ''}`);
  if (m > 0) parts.push(`${m} mo${m > 1 ? 's' : ''}`);
  return parts.join(' ') || '1 mo';
}

export interface ExperienceTotals {
  /** All roles, including non-software positions */
  overallMonths: number;
  /** Software / web development roles only */
  webMonths: number;
  /** Earliest web development start */
  webSince: YearMonth | null;
}

/** Sums months worked per role. Gaps between roles are not counted. */
export function experienceTotals(roles: Role[], now: YearMonth = currentYearMonth()): ExperienceTotals {
  let overallMonths = 0;
  let webMonths = 0;
  let webSince: YearMonth | null = null;
  for (const role of roles) {
    const months = roleMonths(role, now);
    overallMonths += months;
    if (role.isSoftware) {
      webMonths += months;
      if (!webSince || role.start.year * 12 + role.start.month < webSince.year * 12 + webSince.month) {
        webSince = role.start;
      }
    }
  }
  return { overallMonths, webMonths, webSince };
}

/** Floors to whole years for a "N+ years" label; never rounds up. */
export function wholeYears(months: number): number {
  return Math.floor(months / 12);
}
