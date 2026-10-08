/**
 * Single source of content for the portfolio.
 * Every fact below is taken from Nishanth VM's resume (Nishanth-VM-Resume.pdf).
 * All URLs are the exact hyperlink targets embedded in that PDF.
 * Edit this file to update the site; components only handle presentation.
 */

export interface YearMonth {
  year: number;
  /** 1–12 */
  month: number;
}

export interface SocialLink {
  id: 'linkedin' | 'github' | 'portfolio';
  label: string;
  href: string;
  handle: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ProjectLink {
  kind: 'live' | 'behance';
  label: string;
  href: string;
}

export interface ProjectSection {
  heading: string;
  points: string[];
}

export interface Project {
  id: string;
  title: string;
  kicker: string;
  period: string;
  client?: string;
  summary: string;
  stack: string[];
  highlights: string[];
  sections: ProjectSection[];
  links: ProjectLink[];
}

export interface Role {
  id: string;
  title: string;
  company: string;
  location: string;
  start: YearMonth;
  /** null means the role is current */
  end: YearMonth | null;
  isSoftware: boolean;
  /** Project ids from this file that the resume ties to this role */
  relatedProjectIds?: string[];
  notes?: string[];
}

export const person = {
  name: 'Nishanth VM',
  firstName: 'Nishanth',
  title: 'Full-Stack Web Developer',
  specialization: 'MERN / Next.js / PERN',
  intro:
    'I build scalable, user-centric web applications with React, Next.js, Node.js, Express, PostgreSQL and MongoDB, from the interface people touch to the APIs and data behind it.',
  email: 'nishanthvm94@gmail.com',
  phoneDisplay: '+91 62826 97698',
  phoneHref: 'tel:+916282697698',
  postalCode: '680511',
  country: 'India',
  resumeHref: '/resume/Nishanth-VM-Resume.pdf',
  resumeFileName: 'Nishanth-VM-Resume.pdf',
} as const;

export const socials: SocialLink[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nishanthvm/',
    handle: 'in/nishanthvm',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/NishanthVM',
    handle: 'NishanthVM',
  },
  {
    id: 'portfolio',
    label: 'Portfolio',
    href: 'https://nishanthvm.vercel.app/',
    handle: 'nishanthvm.vercel.app',
  },
];

export const about = {
  lead:
    'A full-stack web developer working across the MERN and PERN stacks, focused on applications that scale and stay pleasant to use.',
  body: [
    'I build with React and Next.js on the front end, Node.js and Express behind it, and PostgreSQL or MongoDB underneath. Much of my work sits at the integration points that make a product real: AI features, authentication and payments.',
    'I like solving the problem properly, then shipping interfaces that are responsive, fast and aligned with what the business actually needs.',
  ],
  capabilities: [
    { label: 'Stacks', value: 'MERN, PERN, Next.js' },
    { label: 'AI integration', value: 'OpenAI API, Gemini API' },
    { label: 'Authentication', value: 'Clerk, Firebase' },
    { label: 'Payments', value: 'Stripe' },
  ],
  principles: [
    {
      title: 'Problem-solving first',
      text: 'Understand the requirement, then pick the simplest architecture that holds up.',
    },
    {
      title: 'Built to scale',
      text: 'Clean data models, background jobs and APIs designed to grow with the product.',
    },
    {
      title: 'User-centric',
      text: 'Responsive, accessible interfaces that make everyday tasks quicker.',
    },
    {
      title: 'Business-aligned',
      text: 'Features delivered against real goals, in step with designers and backend teams.',
    },
  ],
};

export const skills: SkillGroup[] = [
  { category: 'Languages', items: ['JavaScript', 'Python'] },
  {
    category: 'Frontend',
    items: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'ShadCN UI',
      'Material UI',
      'Bootstrap',
      'HTML5',
      'CSS3',
    ],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Inngest', 'Clerk', 'Stripe', 'OpenAI API', 'Gemini API'],
  },
  { category: 'Databases', items: ['MongoDB', 'PostgreSQL', 'Prisma ORM', 'Firebase', 'Neon'] },
  { category: 'Tools & DevOps', items: ['Git', 'GitHub', 'Postman', 'Vercel', 'Render', 'VS Code'] },
  { category: 'Soft skills', items: ['Communication', 'Leadership', 'Time Management'] },
];

export const projects: Project[] = [
  {
    id: 'mmm',
    title: 'Myself and My Moves',
    kicker: 'Administrative dashboard for an educational institution',
    period: 'Dec 2025 – Mar 2026',
    client: 'TedWiz LLP',
    summary:
      'Dynamic UI for an educational institution’s admin dashboard: student records, attendance, events and payment history, built with Next.js and Material UI.',
    stack: ['Next.js', 'Material UI', 'Firebase', 'Node.js'],
    highlights: ['Student management', 'Attendance tracking', 'Event management', 'Payment history'],
    sections: [
      {
        heading: 'Overview',
        points: [
          'Engineered and deployed dynamic UI components for an educational institution’s administrative dashboard using Next.js and Material UI.',
          'Designed and implemented the core features below to improve the experience and functionality for administrators.',
        ],
      },
      {
        heading: 'Key features',
        points: [
          'Student management: interfaces for listing students and for adding and updating student information.',
          'Attendance tracking: interfaces for marking student attendance records.',
          'Event management: event listing and event creation pages.',
          'Payment history: student fee payment history and event payment history pages.',
        ],
      },
      {
        heading: 'Contribution',
        points: [
          'Optimised the UX/UI for accessibility, responsiveness and smooth functionality, improving the platform’s usability and administrative efficiency.',
          'Collaborated cross-functionally with designers and backend teams to deliver scalable features aligned with business objectives and overall performance.',
        ],
      },
    ],
    links: [
      { kind: 'live', label: 'Visit live site', href: 'https://myselfandmymoves.com/' },
      {
        kind: 'behance',
        label: 'View on Behance',
        href: 'https://www.behance.net/gallery/192229751/MMM-Web-Application',
      },
    ],
  },
  {
    id: 'gocart',
    title: 'GoCart',
    kicker: 'Multi-vendor e-commerce platform',
    period: '2025',
    summary:
      'A full-stack marketplace where vendors open and run their own stores, with role-based access, admin approval, Stripe subscriptions and background jobs.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL (Neon)', 'Prisma', 'Clerk', 'Stripe', 'ImageKit', 'Inngest', 'Vercel'],
    highlights: ['Admin / Vendor / Customer roles', 'Vendor approval', 'Stripe subscriptions', 'Background jobs'],
    sections: [
      {
        heading: 'Overview',
        points: [
          'Engineered a full-stack application with Next.js (App Router) and TypeScript for a scalable, high-performance architecture.',
          'Multi-vendor functionality lets users create and manage their own stores, with an admin approval system for new vendors.',
        ],
      },
      {
        heading: 'Key features',
        points: [
          'Clerk authentication for sign-up, login and session management, with role-based access control for Admin, Vendor and Customer roles.',
          'Admin dashboard for managing stores, discount coupons, premium subscriptions and platform analytics.',
          'Stripe checkout, recurring billing and subscription management for premium vendors.',
          'Responsive UI with Tailwind CSS and ShadCN/UI, focused on accessibility, speed and consistency across devices.',
        ],
      },
      {
        heading: 'Technical architecture',
        points: [
          'PostgreSQL (Neon) with Prisma ORM for data modelling, schema migrations and transactional integrity.',
          'Inngest background jobs for asynchronous work such as notifications and periodic maintenance.',
          'ImageKit for cloud image storage, optimisation and CDN delivery.',
          'Deployed on Vercel with automated CI/CD, environment variable management and production optimisations.',
          'Performance work: caching, lazy loading, database indexing and Next.js static optimisation.',
        ],
      },
    ],
    links: [{ kind: 'live', label: 'Visit live site', href: 'https://gocart-alpha.vercel.app/' }],
  },
  {
    id: 'quickai',
    title: 'QuickAI',
    kicker: 'AI tools SaaS platform',
    period: '2025',
    summary:
      'A PERN-stack SaaS that gives subscribers access to premium AI-powered tools, with Clerk accounts, Stripe recurring billing and an Express API.',
    stack: ['PostgreSQL', 'Express', 'React', 'Node.js', 'Clerk', 'Stripe', 'OpenAI API', 'Render'],
    highlights: ['PERN architecture', 'Subscription billing', 'AI request handling', 'REST APIs'],
    sections: [
      {
        heading: 'Overview',
        points: [
          'Built a full-stack AI SaaS platform on the PERN architecture (PostgreSQL, Express, React, Node.js) for scalable, maintainable development.',
        ],
      },
      {
        heading: 'Key features',
        points: [
          'User authentication and profile management with Clerk: secure login, sign-up and session handling.',
          'Stripe subscription billing that unlocks premium AI-powered tools through recurring payments.',
          'Responsive React UI with modern state management and a clean component structure.',
        ],
      },
      {
        heading: 'Technical architecture',
        points: [
          'PostgreSQL (Neon) as a serverless database with Prisma ORM for reliability and performance.',
          'RESTful APIs with Express.js and Node.js handling AI requests, subscription validation and user data securely.',
          'Deployed on Vercel / Render with environment-specific configuration and CI/CD pipelines.',
        ],
      },
    ],
    links: [{ kind: 'live', label: 'Visit live site', href: 'https://quick-ai-gamma-green.vercel.app/' }],
  },
];

/** Reverse-chronological. Ted Wiz LLP is current (resume listed 03/2026; updated to present). */
export const experience: Role[] = [
  {
    id: 'tedwiz',
    title: 'Web Developer',
    company: 'Ted Wiz LLP',
    location: 'Thrissur',
    start: { year: 2025, month: 12 },
    end: null,
    isSoftware: true,
    relatedProjectIds: ['mmm'],
    notes: [
      'Built the admin dashboard UI for Myself and My Moves with Next.js and Material UI: student management, attendance, events and payment history.',
      'Work with designers and backend teams to ship accessible, responsive features.',
    ],
  },
  {
    id: 'neuraq',
    title: 'MERN Stack Web Developer',
    company: 'Neuraq Technologies',
    location: 'Malappuram',
    start: { year: 2025, month: 8 },
    end: { year: 2025, month: 11 },
    isSoftware: true,
  },
  {
    id: 'blackowl',
    title: 'Manager',
    company: 'Black Owl Men’s Wear',
    location: 'Thrissur',
    start: { year: 2020, month: 1 },
    end: { year: 2025, month: 7 },
    isSoftware: false,
  },
  {
    id: 'dhrishyam',
    title: 'Electrical Specialist',
    company: 'Dhrishyam Eye Care Hospital',
    location: 'Chavakkad',
    start: { year: 2016, month: 12 },
    end: { year: 2019, month: 10 },
    isSoftware: false,
  },
];

export const education = {
  degree: 'B.E., Electrical & Electronics Engineering',
  degreeShort: 'B.E / EEE',
  university: 'Anna University',
  college: 'SNCET College',
  period: '2011 – 2015',
};

export const languages = ['English', 'Malayalam', 'Tamil'];

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
] as const;

export type SectionId = (typeof navItems)[number]['id'];
