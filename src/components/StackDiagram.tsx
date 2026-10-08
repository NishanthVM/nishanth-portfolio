/**
 * The hero's visual: Nishanth's actual stack drawn as a request path.
 * A small packet travels client → API → data and back; side services hang off the API tier.
 * Pure SVG + SMIL, no JS animation loop. Packets are hidden under reduced motion via CSS.
 */
interface Tier {
  key: string;
  label: string;
  title: string;
  sub: string;
  y: number;
}

const TIERS: Tier[] = [
  { key: 'client', label: 'client', title: 'React · Next.js', sub: 'TypeScript, Tailwind, MUI', y: 28 },
  { key: 'api', label: 'server', title: 'Node.js · Express', sub: 'REST APIs, Inngest jobs', y: 188 },
  { key: 'data', label: 'data', title: 'PostgreSQL · MongoDB', sub: 'Prisma, Neon, Firebase', y: 348 },
];

const SERVICES = [
  { label: 'Clerk', role: 'auth', x: 6, y: 168 },
  { label: 'Firebase', role: 'auth', x: 6, y: 232 },
  { label: 'Stripe', role: 'billing', x: 344, y: 168 },
  { label: 'OpenAI · Gemini', role: 'AI', x: 344, y: 232 },
];

const NODE_X = 125;
const NODE_W = 200;
const NODE_H = 72;
const CX = NODE_X + NODE_W / 2;
const SVC_W = 100;
const SVC_H = 44;

export function StackDiagram() {
  const top = TIERS[0];
  const bottom = TIERS[TIERS.length - 1];
  const spine = `M${CX} ${top.y + NODE_H} L${CX} ${bottom.y}`;
  const apiY = TIERS[1].y + NODE_H / 2;

  return (
    <figure className="stack" aria-labelledby="stack-caption">
      <div className="stack__chrome" aria-hidden="true">
        <span className="stack__dots">
          <i />
          <i />
          <i />
        </span>
        <span className="stack__file">how-i-build.stack</span>
      </div>

      <svg
        className="stack__svg"
        viewBox="0 0 450 440"
        role="img"
        aria-label="Full-stack architecture: a React and Next.js client talks to a Node.js and Express server, which reads and writes PostgreSQL and MongoDB, with Clerk and Firebase for authentication, Stripe for billing and OpenAI or Gemini for AI features."
      >
        <defs>
          <pattern id="stack-dots" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.9" className="stack__gridDot" />
          </pattern>
        </defs>
        <rect width="450" height="440" fill="url(#stack-dots)" />

        {/* spine */}
        <path d={spine} className="stack__wire" />
        {/* service wires */}
        {SERVICES.map((s) => {
          const left = s.x < CX;
          const sx = left ? s.x + SVC_W : s.x;
          const sy = s.y + SVC_H / 2;
          const nx = left ? NODE_X : NODE_X + NODE_W;
          const mid = (sx + nx) / 2;
          return (
            <path
              key={`w-${s.label}`}
              d={`M${sx} ${sy} C${mid} ${sy}, ${mid} ${apiY}, ${nx} ${apiY}`}
              className="stack__wire stack__wire--dashed"
            />
          );
        })}

        {/* travelling packets */}
        <g className="stack__packets">
          <circle r="3.5" className="stack__packet">
            <animateMotion dur="3.6s" repeatCount="indefinite" path={spine} keyPoints="0;1;0" keyTimes="0;0.5;1" calcMode="linear" />
          </circle>
          <circle r="2.5" className="stack__packet stack__packet--soft">
            <animateMotion
              dur="3.6s"
              begin="1.8s"
              repeatCount="indefinite"
              path={spine}
              keyPoints="0;1;0"
              keyTimes="0;0.5;1"
              calcMode="linear"
            />
          </circle>
        </g>

        {TIERS.map((t, i) => (
          <g key={t.key} className="stack__node" style={{ animationDelay: `${600 + i * 140}ms` }}>
            <rect x={NODE_X} y={t.y} width={NODE_W} height={NODE_H} rx="10" className="stack__box" />
            <text x={NODE_X + 14} y={t.y + 20} className="stack__label">
              {t.label}
            </text>
            <text x={NODE_X + 14} y={t.y + 43} className="stack__title">
              {t.title}
            </text>
            <text x={NODE_X + 14} y={t.y + 60} className="stack__sub">
              {t.sub}
            </text>
          </g>
        ))}

        {SERVICES.map((s, i) => (
          <g key={s.label} className="stack__node" style={{ animationDelay: `${1050 + i * 90}ms` }}>
            <rect x={s.x} y={s.y} width={SVC_W} height={SVC_H} rx="8" className="stack__box stack__box--svc" />
            <text x={s.x + 10} y={s.y + 18} className="stack__label">
              {s.role}
            </text>
            <text x={s.x + 10} y={s.y + 34} className="stack__svcTitle">
              {s.label}
            </text>
          </g>
        ))}
      </svg>

      <figcaption id="stack-caption" className="stack__caption">
        The stack I ship with, from interface to database.
      </figcaption>
    </figure>
  );
}
