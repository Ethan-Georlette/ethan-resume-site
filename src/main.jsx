import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Mail,
  Download,
  ExternalLink,
  SquareTerminal,
  Server,
  Boxes,
  Code2,
  ChevronRight,
  MapPin,
  GraduationCap,
  BriefcaseBusiness,
} from 'lucide-react';
import './styles.css';

const profile = {
  name: 'Ethan Georlette',
  title: 'Computer Science Student · DevOps & Platform Engineering',
  location: 'Israel',
  email: 'Ethan.Georlette1@gmail.com',
  github: 'https://github.com/Ethan-Georlette',
  linkedin: 'https://www.linkedin.com/in/ethan-georlette',
};

const skills = [
  { group: 'Programming', items: ['Java', 'C#', 'Python', 'C', 'JavaScript', 'Node.js'] },
  { group: 'DevOps & Platforms', items: ['Docker', 'Docker Compose', 'Git', 'GitHub Actions · basic exposure', 'Kubernetes · basic familiarity'] },
  { group: 'Systems & Networking', items: ['Linux', 'TCP/IP', 'Linux networking', 'TLS', 'Reverse proxies'] },
  { group: 'Data & Infrastructure', items: ['PostgreSQL', 'SQL', 'MinIO', 'Traefik', 'REST APIs'] },
];

const projects = [
  {
    icon: Server,
    title: 'Self-Hosted Private Cloud',
    subtitle: 'Raspberry Pi 5 · Linux · Docker Compose',
    description:
      'A private cloud environment built from containerized backend, storage, database and reverse-proxy services. I use it as a practical lab for deployment, networking, authentication and infrastructure troubleshooting.',
    tags: ['Docker Compose', 'Spring Boot', 'PostgreSQL', 'MinIO', 'Traefik', 'JWT', 'TLS'],
    link: profile.github,
  },
  {
    icon: Code2,
    title: 'Two-Pass Assembler',
    subtitle: 'C · Systems Programming',
    description:
      'A modular assembler-style translator for a custom instruction set, including parsing, symbol and label management, operand validation, encoding and line-level error reporting.',
    tags: ['C', 'Parsing', 'Symbol Table', 'Encoding', 'Error Handling'],
    link: profile.github,
  },
];

const terminalCommands = {
  help: [
    'Available commands:',
    '  whoami        short profile',
    '  skills        technical stack',
    '  projects      current projects',
    '  docker ps     private-cloud service demo',
    '  contact       links and email',
    '  clear         clear terminal',
  ],
  whoami: [
    'ethan@portfolio',
    'CS student focused on DevOps, Linux, cloud-native infrastructure and platform engineering.',
    'Current professional background: infrastructure support, troubleshooting and vendor coordination.',
  ],
  skills: [
    'Java  C#  Python  C  JavaScript  Node.js',
    'Linux  Docker  Docker Compose  Git',
    'PostgreSQL  MinIO  Traefik  REST APIs',
    'Learning path: CI/CD → Observability → Terraform → AWS → Kubernetes',
  ],
  projects: [
    '1. family-cloud     containerized private cloud / homelab',
    '2. two-pass-asm    modular assembler in C',
  ],
  'docker ps': [
    'CONTAINER        SERVICE         STATUS',
    'family-api       spring-boot     Up (healthy)',
    'family-db        postgres        Up (healthy)',
    'family-storage   minio           Up',
    'edge-proxy       traefik         Up',
    '',
    '(portfolio demo — not a live shell)',
  ],
  contact: [
    `GitHub   ${profile.github}`,
    `LinkedIn ${profile.linkedin}`,
    `Email    ${profile.email}`,
  ],
};

function SectionHeading({ kicker, title, children }) {
  return (
    <div className="section-heading">
      <span className="kicker">{kicker}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function App() {
  const [photoFailed, setPhotoFailed] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { command: '', output: ['Type “help” to explore this portfolio from the terminal.'] },
  ]);

  const quickCommands = useMemo(() => ['help', 'whoami', 'projects', 'docker ps'], []);

  const runCommand = (raw) => {
    const command = raw.trim().toLowerCase();
    if (!command) return;
    if (command === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }
    const output = terminalCommands[command] || [
      `command not found: ${command}`,
      'Try “help”.',
    ];
    setHistory((prev) => [...prev, { command, output }]);
    setInput('');
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Home">
          <span className="brand-mark">EG</span>
          <span>Ethan Georlette</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#terminal">Terminal</a>
        </nav>
        <a className="small-cta" href="mailto:Ethan.Georlette1@gmail.com">Contact</a>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <div className="status-pill"><span /> Open to DevOps / Platform opportunities</div>
            <p className="eyebrow">HELLO, I’M</p>
            <h1>Ethan<br /><span>Georlette.</span></h1>
            <p className="hero-title">{profile.title}</p>
            <p className="hero-lede">
              I enjoy working where software meets infrastructure — building systems, understanding how services communicate, and making environments more reliable and repeatable.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#projects">View projects <ChevronRight size={17} /></a>
              <a className="ghost-button" href="./Ethan_Georlette_Resume.pdf" download>
                <Download size={17} /> Resume
              </a>
            </div>
            <div className="social-row">
              <a href={profile.github} target="_blank" rel="noreferrer"><Code2 size={19} /> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><ExternalLink size={19} /> LinkedIn</a>
              <a href={`mailto:${profile.email}`}><Mail size={19} /> Email</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame">
              {!photoFailed ? (
                <img src="./profile.jpg" alt="Ethan Georlette" onError={() => setPhotoFailed(true)} />
              ) : (
                <div className="portrait-placeholder">
                  <span>EG</span>
                  <small>add public/profile.jpg</small>
                </div>
              )}
              <div className="portrait-code">~/platform-lab</div>
            </div>
            <div className="focus-card">
              <span className="focus-label">CURRENT FOCUS</span>
              <div><SquareTerminal size={18} /> Linux & automation</div>
              <div><Boxes size={18} /> Containers & cloud-native</div>
              <div><Server size={18} /> Reliability & infrastructure</div>
            </div>
          </div>
        </section>

        <section className="strip">
          <div className="container strip-inner">
            <span>LINUX</span><span>DOCKER</span><span>JAVA</span><span>PYTHON</span><span>POSTGRESQL</span><span>TRAEFIK</span><span>GIT</span>
          </div>
        </section>

        <section id="about" className="section container two-column">
          <SectionHeading kicker="01 / ABOUT" title="Software background. Infrastructure mindset.">
            I’m currently studying Computer Science while working with production and infrastructure environments. My personal lab is where I turn theory into hands-on systems work.
          </SectionHeading>
          <div className="about-grid">
            <article className="info-card">
              <GraduationCap size={22} />
              <h3>B.Sc. Computer Science</h3>
              <p>The Open University of Israel · in progress</p>
              <small>Operating Systems · Algorithms · C · Computer Organization</small>
            </article>
            <article className="info-card">
              <MapPin size={22} />
              <h3>Based in Israel</h3>
              <p>Building toward DevOps, Platform Engineering and later AI infrastructure.</p>
              <small>Available for student / junior engineering opportunities</small>
            </article>
          </div>
        </section>

        <section id="experience" className="section muted-section">
          <div className="container">
            <SectionHeading kicker="02 / EXPERIENCE" title="Production support with an engineering approach." />
            <div className="timeline-card">
              <div className="timeline-icon"><BriefcaseBusiness size={22} /></div>
              <div className="timeline-main">
                <div className="timeline-topline">
                  <div>
                    <h3>Professional Support Engineer</h3>
                    <p>Belocal</p>
                  </div>
                  <span>2022 — Present</span>
                </div>
                <ul>
                  <li>Support and troubleshoot production and infrastructure environments, including Linux-based systems and backup infrastructure.</li>
                  <li>Use logs and system diagnostics to isolate technical issues and communicate actionable findings.</li>
                  <li>Coordinate with technology vendors and manufacturers around support cases, product updates and infrastructure recommendations.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section container">
          <SectionHeading kicker="03 / PROJECTS" title="Hands-on systems work." >
            I prefer projects that let me own the full path: code, services, networking, deployment and troubleshooting.
          </SectionHeading>
          <div className="project-grid">
            {projects.map(({ icon: Icon, title, subtitle, description, tags, link }) => (
              <article className="project-card" key={title}>
                <div className="project-icon"><Icon size={24} /></div>
                <span className="project-subtitle">{subtitle}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="tag-list">
                  {tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a href={link} target="_blank" rel="noreferrer">Explore on GitHub <ExternalLink size={15} /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="section muted-section">
          <div className="container">
            <SectionHeading kicker="04 / STACK" title="Tools I use and areas I’m growing into." />
            <div className="skill-grid">
              {skills.map((skill) => (
                <article className="skill-card" key={skill.group}>
                  <h3>{skill.group}</h3>
                  <div className="skill-list">
                    {skill.items.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="terminal" className="section container terminal-section">
          <SectionHeading kicker="05 / INTERACTIVE" title="Try the portfolio terminal.">
            A small frontend-only terminal that turns the portfolio into something memorable without pretending to provide shell access.
          </SectionHeading>
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="window-dots"><i /><i /><i /></div>
              <span>ethan@portfolio:~</span>
              <small>demo shell</small>
            </div>
            <div className="terminal-body" aria-live="polite">
              {history.map((entry, index) => (
                <div className="terminal-entry" key={`${entry.command}-${index}`}>
                  {entry.command && <div><span className="prompt">ethan@portfolio:~$</span> {entry.command}</div>}
                  {entry.output.map((line, lineIndex) => <pre key={lineIndex}>{line || ' '}</pre>)}
                </div>
              ))}
              <form onSubmit={(e) => { e.preventDefault(); runCommand(input); }} className="terminal-input-row">
                <span className="prompt">ethan@portfolio:~$</span>
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  aria-label="Terminal command"
                  spellCheck="false"
                  autoComplete="off"
                />
              </form>
            </div>
            <div className="quick-commands">
              {quickCommands.map((command) => (
                <button key={command} onClick={() => runCommand(command)}>{command}</button>
              ))}
            </div>
          </div>
        </section>

        <section className="section container contact-panel">
          <div>
            <span className="kicker">06 / CONTACT</span>
            <h2>Let’s build reliable systems.</h2>
            <p>I’m especially interested in student and junior roles around DevOps, platform engineering, cloud infrastructure and AI infrastructure.</p>
          </div>
          <div className="contact-actions">
            <a className="primary-button" href={`mailto:${profile.email}`}><Mail size={17} /> Email me</a>
            <a className="ghost-button" href={profile.linkedin} target="_blank" rel="noreferrer"><ExternalLink size={17} /> LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <span>© {new Date().getFullYear()} Ethan Georlette</span>
        <span>Built with React · designed as a living engineering portfolio</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
