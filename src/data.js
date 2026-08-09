// ── Mock data shared across the app ──────────────────────────

export const STUDENT = {
  name: 'Arjun Mehta',
  initials: 'AM',
  college: 'NIT Trichy',
  track: 'Frontend Development',
  trackShort: 'Frontend',
  streak: 11,
  shipped: 11,
  total: 60,
  startDate: '2024-10-01',
}

// 60 days — 1-11 done, 12 active, rest locked
export function getDayStatus(day) {
  if (day < 12) return 'done'
  if (day === 12) return 'active'
  return 'locked'
}

export const TRACKS = [
  {
    id: 'frontend',
    name: 'Frontend Development',
    icon: '🎨',
    desc: 'HTML, CSS, JS, React & UI craft',
    color: '#0df286',
    bg: 'rgba(13, 242, 134, 0.1)',
    difficulty: 'Beginner–Intermediate',
    students: 142,
  },
  {
    id: 'fullstack',
    name: 'Full Stack Development',
    icon: '⚡',
    desc: 'React + Node.js, APIs, databases',
    color: '#0ea5e9',
    bg: 'rgba(14, 165, 233, 0.1)',
    difficulty: 'Intermediate',
    students: 98,
  },
  {
    id: 'aiml',
    name: 'AI / ML',
    icon: '🤖',
    desc: 'Python, sklearn, PyTorch, LLMs',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.1)',
    difficulty: 'Intermediate–Advanced',
    students: 76,
  },
  {
    id: 'backend',
    name: 'Backend Development',
    icon: '🔧',
    desc: 'APIs, auth, databases, DevOps',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.1)',
    difficulty: 'Intermediate',
    students: 54,
  },
  {
    id: 'datascience',
    name: 'Data Science',
    icon: '📊',
    desc: 'Pandas, EDA, visualisation, SQL',
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.1)',
    difficulty: 'Beginner–Advanced',
    students: 61,
  },
]

export const ACTIVITY_FEED = [
  {
    id: 1,
    name: 'Priya Sharma',
    college: 'IIT Bombay',
    initials: 'PS',
    color: '#0df286',
    track: 'Frontend',
    day: 12,
    time: '11:42 PM',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    note: 'Built a custom multi-select dropdown with keyboard nav.',
  },
  {
    id: 2,
    name: 'Rohit Verma',
    college: 'BITS Pilani',
    initials: 'RV',
    color: '#0ea5e9',
    track: 'Full Stack',
    day: 12,
    time: '11:28 PM',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    note: 'REST API + React dropdown combo — server-side filtering FTW.',
  },
  {
    id: 3,
    name: 'Sneha Patil',
    college: 'VJTI Mumbai',
    initials: 'SP',
    color: '#f59e0b',
    track: 'AI/ML',
    day: 11,
    time: '10:58 PM',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    note: 'Fine-tuned a small classifier for Day 11. Accuracy: 94%.',
  },
  {
    id: 4,
    name: 'Karthik Rajan',
    college: 'PSG Tech',
    initials: 'KR',
    color: '#8b5cf6',
    track: 'Backend',
    day: 12,
    time: '10:21 PM',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    note: 'Express endpoint with caching layer done. Clean logs.',
  },
  {
    id: 5,
    name: 'Ananya Iyer',
    college: 'RV College',
    initials: 'AI',
    color: '#ec4899',
    track: 'Frontend',
    day: 12,
    time: '9:55 PM',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    note: 'Accessible dropdown with ARIA labels. Screen reader tested.',
  },
]

export const DAY_12_CHALLENGE = {
  day: 12,
  track: 'Frontend Development',
  title: 'Build a Custom Dropdown Widget',
  difficulty: 'Intermediate',
  estimatedTime: '2–3 hrs',
  tags: ['HTML', 'CSS', 'JavaScript', 'Accessibility'],
  prompt: `Today you'll build a production-quality dropdown widget entirely from scratch — no libraries, no shortcuts.

This is the kind of component that separates junior devs from engineers who actually understand the web. A real dropdown handles keyboard navigation, focus trapping, screen readers, and clean animations all at once.

Your goal is to ship a reusable dropdown component that you'd be genuinely proud to show a senior dev.`,
  requirements: [
    { id: 1, text: 'Custom-styled select trigger button (not the native <select> element)', done: true },
    { id: 2, text: 'Smooth open/close animation using CSS transitions', done: true },
    { id: 3, text: 'Keyboard navigation: Arrow keys to move, Enter to select, Escape to close', done: false },
    { id: 4, text: 'Click-outside detection to close the dropdown', done: false },
    { id: 5, text: 'ARIA attributes: role="listbox", aria-expanded, aria-selected', done: false },
    { id: 6, text: 'Searchable filter input inside the dropdown (bonus)', done: false },
  ],
  resources: [
    { title: 'MDN: ARIA Listbox Pattern', host: 'developer.mozilla.org', url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role' },
    { title: 'W3C ARIA Authoring Practices', host: 'www.w3.org', url: 'https://www.w3.org/WAI/ARIA/apg/patterns/combobox/' },
    { title: 'CSS Tricks: Custom Select Styles', host: 'css-tricks.com', url: 'https://css-tricks.com/the-current-state-of-styling-selects-in-css/' },
    { title: 'JavaScript: Focus Management', host: 'web.dev', url: 'https://web.dev/articles/focus-management' },
  ],
}

export const PEER_SUBMISSIONS = [
  {
    id: 1,
    name: 'Priya Sharma',
    college: 'IIT Bombay',
    initials: 'PS',
    color: '#0df286',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    note: 'Fully accessible, multi-select with animated checkboxes.',
  },
  {
    id: 2,
    name: 'Rohit Verma',
    college: 'BITS Pilani',
    initials: 'RV',
    color: '#0ea5e9',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    note: 'Used the Combobox pattern with fuzzy search. Clean AF.',
  },
  {
    id: 3,
    name: 'Karthik Rajan',
    college: 'PSG Tech',
    initials: 'KR',
    color: '#8b5cf6',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    note: 'Vanilla JS only. No frameworks. Keyboard nav working perfectly.',
  },
]

// ── 60-Day Journey Timeline ────────────────────────────────────
export const JOURNEY_TIMELINE = [
  {
    day: 1,
    label: 'Day 01',
    title: 'First Commit',
    desc: 'A simple component. A single page. Your very first shipped build.',
    color: '#0df286',
    phase: 'Start',
  },
  {
    day: 10,
    label: 'Day 10',
    title: 'First Milestone',
    desc: 'You have a rhythm now. Small projects are becoming habits.',
    color: '#8b5cf6',
    phase: 'Habit',
  },
  {
    day: 20,
    label: 'Day 20',
    title: 'Real Projects',
    desc: 'Builds are getting complex. APIs, state, design — all clicking.',
    color: '#0ea5e9',
    phase: 'Growing',
  },
  {
    day: 30,
    label: 'Day 30',
    title: 'Halfway There',
    desc: 'A portfolio is forming. Recruiters are noticing your GitHub.',
    color: '#10b981',
    phase: 'Portfolio',
  },
  {
    day: 40,
    label: 'Day 40',
    title: 'Full Projects',
    desc: 'End-to-end apps. From idea to deployed link in a single day.',
    color: '#f59e0b',
    phase: 'Shipping',
  },
  {
    day: 50,
    label: 'Day 50',
    title: 'Portfolio Done',
    desc: 'You\'ve shipped more in 50 days than most students do in 3 years.',
    color: '#ef4444',
    phase: 'Proven',
  },
  {
    day: 60,
    label: 'Day 60',
    title: 'Undeniable',
    desc: '60 builds. 60 LinkedIn posts. A GitHub profile that speaks for itself.',
    color: '#10b981',
    phase: 'Champion',
  },
]

// ── Testimonials ───────────────────────────────────────────────
// Note: These are fictional demo testimonials to illustrate the ABTalks experience.
export const TESTIMONIALS = [
  {
    id: 1,
    quote: 'Before ABTalks, I kept learning but rarely shipped. The daily streak changed that completely. By Day 30, I had a portfolio I was actually proud to show.',
    name: 'Aarav Singh',
    college: 'DTU Delhi',
    track: 'Frontend Development',
    initials: 'AS',
    color: '#0df286',
    day: 60,
  },
  {
    id: 2,
    quote: 'I got my first internship interview because a recruiter saw my consistent GitHub activity. 60 days of commits is impossible to fake — and interviewers respect that.',
    name: 'Meera Nair',
    college: 'NITK Surathkal',
    track: 'Full Stack',
    initials: 'MN',
    color: '#10b981',
    day: 60,
  },
  {
    id: 3,
    quote: 'I always thought I needed more knowledge before building. ABTalks forced me to build first and learn what I needed along the way. That mindset shift was everything.',
    name: 'Devraj Patel',
    college: 'DAIICT Gandhinagar',
    track: 'AI / ML',
    initials: 'DP',
    color: '#f59e0b',
    day: 47,
  },
]

// ── Dashboard — 7-day streak week ─────────────────────────────
// Mon–Sun, last 7 days. All checked for current 11-day streak.
export const WEEK_DAYS = [
  { label: 'M', done: true },
  { label: 'T', done: true },
  { label: 'W', done: true },
  { label: 'T', done: true },
  { label: 'F', done: true },
  { label: 'S', done: true },
  { label: 'S', done: true },
]

// ── Dashboard — Progress milestones ───────────────────────────
export const MILESTONES = [
  { day: 10,  label: 'Day 10',  unlocked: true  },
  { day: 20,  label: 'Day 20',  unlocked: false },
  { day: 30,  label: 'Day 30',  unlocked: false },
  { day: 45,  label: 'Day 45',  unlocked: false },
  { day: 60,  label: 'Day 60',  unlocked: false },
]

// ── Dashboard — Stats ─────────────────────────────────────────
export const STATS = {
  daysCompleted: 12,
  currentStreak: 11,
  projectsShipped: 2,
  proofSubmissions: 24,
}

// ── Dashboard — Achievements ──────────────────────────────────
export const ACHIEVEMENTS = [
  { id: 1, icon: '🔥', title: '7-Day Streak',  desc: 'Ship 7 days in a row',  unlocked: true  },
  { id: 2, icon: '🚀', title: 'First Project', desc: 'Ship your first build',  unlocked: true  },
  { id: 3, icon: '💻', title: '10 Builds',     desc: 'Complete 10 challenges', unlocked: true  },
  { id: 4, icon: '🏆', title: '30-Day Streak', desc: 'Ship 30 days in a row',  unlocked: false },
]

// ── Dashboard — Tomorrow preview ──────────────────────────────
export const TOMORROW_CHALLENGE = {
  day: 13,
  title: 'Build a GitHub Profile README',
  track: 'Frontend Development',
  estimatedTime: '45–60 min',
  desc: 'Craft a standout GitHub README that shows your work, your skills, and your personality.',
}

// ── Dashboard — Tonight's Focus ───────────────────────────────
export const TONIGHTS_FOCUS = {
  totalMin: 45,
  steps: [
    { min: 10, label: 'Understand', desc: 'Read the brief, research the approach.' },
    { min: 25, label: 'Build',      desc: 'Write the code. Ship something working.' },
    { min: 10, label: 'Document',   desc: 'Push to GitHub. Write your LinkedIn post.' },
  ],
}
