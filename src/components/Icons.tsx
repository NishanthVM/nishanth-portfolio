import type { SVGProps } from 'react';

/**
 * Inline stroke icons (Lucide-style geometry) plus the two brand marks.
 * Hand-rolled to avoid shipping an icon library for ~14 glyphs.
 */
type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 18, children, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const ArrowUpRight = (p: IconProps) => (
  <Base {...p}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </Base>
);

export const ArrowDown = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 5v14" />
    <path d="m19 12-7 7-7-7" />
  </Base>
);

export const ArrowUp = (p: IconProps) => (
  <Base {...p}>
    <path d="m5 12 7-7 7 7" />
    <path d="M12 19V5" />
  </Base>
);

export const Download = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 15V3" />
    <path d="m7 10 5 5 5-5" />
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  </Base>
);

export const Mail = (p: IconProps) => (
  <Base {...p}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </Base>
);

export const Phone = (p: IconProps) => (
  <Base {...p}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  </Base>
);

export const MapPin = (p: IconProps) => (
  <Base {...p}>
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </Base>
);

export const Globe = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9.5" />
    <path d="M2.5 12h19" />
    <path d="M12 2.5a14.5 14.5 0 0 1 0 19 14.5 14.5 0 0 1 0-19Z" />
  </Base>
);

export const Sun = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </Base>
);

export const Moon = (p: IconProps) => (
  <Base {...p}>
    <path d="M20.5 14.1A8.5 8.5 0 1 1 9.9 3.5a6.6 6.6 0 0 0 10.6 10.6Z" />
  </Base>
);

export const Close = (p: IconProps) => (
  <Base {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </Base>
);

export const Copy = (p: IconProps) => (
  <Base {...p}>
    <rect x="8.5" y="8.5" width="12" height="12" rx="2" />
    <path d="M15.5 8.5V5.5a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3" />
  </Base>
);

export const Check = (p: IconProps) => (
  <Base {...p}>
    <path d="M20 6 9 17l-5-5" />
  </Base>
);

export const GitHub = ({ size = 18, ...rest }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...rest}>
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
  </svg>
);

export const LinkedIn = ({ size = 18, ...rest }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...rest}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

export const Behance = ({ size = 18, ...rest }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...rest}>
    <path d="M7.8 5.5c.7 0 1.3.06 1.88.19.56.12 1.04.33 1.45.6.4.27.71.64.93 1.1.22.45.33 1.02.33 1.68 0 .72-.17 1.32-.5 1.8-.33.48-.81.87-1.45 1.18.88.25 1.53.7 1.96 1.32.44.63.65 1.38.65 2.27 0 .72-.14 1.34-.42 1.86-.28.53-.66.96-1.13 1.29-.48.34-1.02.58-1.63.74-.6.16-1.23.24-1.87.24H0V5.5h7.8Zm-.42 5.62c.56 0 1.01-.13 1.37-.4.36-.26.53-.69.53-1.29 0-.33-.06-.6-.18-.82a1.32 1.32 0 0 0-.48-.5 1.97 1.97 0 0 0-.69-.25 4.3 4.3 0 0 0-.8-.07H3.4v3.33h3.98Zm.2 5.9c.3 0 .6-.03.87-.09.28-.06.52-.16.73-.3.2-.14.37-.33.5-.57.12-.24.18-.55.18-.92 0-.73-.2-1.25-.62-1.57-.41-.31-.96-.47-1.64-.47H3.4v3.92h4.18Zm9.3-.06c.45.43 1.08.65 1.92.65.6 0 1.12-.15 1.55-.45.43-.3.7-.62.8-.96h2.62c-.42 1.3-1.06 2.23-1.93 2.79-.87.56-1.92.84-3.15.84-.85 0-1.62-.14-2.31-.41a4.84 4.84 0 0 1-1.74-1.17 5.3 5.3 0 0 1-1.1-1.81 6.62 6.62 0 0 1-.39-2.31c0-.82.13-1.58.4-2.28.27-.7.65-1.31 1.14-1.82.49-.51 1.07-.91 1.75-1.2.68-.3 1.43-.44 2.25-.44.92 0 1.72.18 2.4.53.68.36 1.24.84 1.68 1.44.44.6.75 1.29.95 2.06.19.77.26 1.58.2 2.42h-7.8c.04.97.3 1.68.76 2.12Zm3.37-5.71c-.36-.39-.91-.6-1.64-.6-.48 0-.87.08-1.19.24-.31.16-.56.36-.75.6-.19.24-.32.49-.4.76-.07.27-.12.5-.13.72h4.83c-.07-.76-.33-1.32-.72-1.72Zm-4.83-4.6h6.04v1.47h-6.04V6.65Z" />
  </svg>
);
