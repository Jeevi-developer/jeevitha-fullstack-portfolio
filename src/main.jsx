import { StrictMode, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const EMAIL = 'gvsivagiri@gmail.com';
const PHONE = '7010993302';
const GITHUB = 'https://github.com/Jeevi-developer';
const LINKEDIN = 'https://linkedin.com/in/jeevitha-raghuraman-ababa817a';

const skills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 88 },
  { name: 'Node.js', level: 85 },
  { name: 'Express', level: 85 },
  { name: 'MongoDB', level: 82 },
  { name: 'HTML5', level: 92 },
  { name: 'CSS3', level: 90 },
  { name: 'TypeScript', level: 78 },
  { name: 'Redux', level: 80 },
  { name: 'Git', level: 85 },
  { name: 'REST APIs', level: 86 },
  { name: 'JWT Auth', level: 82 },
];

const techStack = [
  'React', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Redux',
  'TypeScript', 'HTML5', 'CSS3', 'Git', 'REST', 'JWT', 'Stripe', 'Bootstrap',
];

const projects = [
  {
    title: 'Crypto Exchange Platform',
    tag: 'Full-Stack',
    desc: 'A cryptocurrency exchange server with KYC verification, wallet management, trade matching engine, and email notifications via Brevo. Includes middleware-based auth and admin controls.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Brevo API'],
    repo: 'https://github.com/Jeevi-developer/crypto-exchange-server',
    featured: true,
  },
  {
    title: 'E-Commerce Platform',
    tag: 'Full-Stack',
    desc: 'A full e-commerce solution with separate client and server repositories. Features product catalog, cart, checkout, user authentication, and order management.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    repo: 'https://github.com/Jeevi-developer/ecommerce-client',
    featured: true,
  },
  {
    title: 'Shopee Client',
    tag: 'Frontend',
    desc: 'A React-based shopping application with product browsing, search, cart management, and a clean responsive UI.',
    tech: ['React', 'JavaScript', 'CSS3'],
    repo: 'https://github.com/Jeevi-developer/shopee-client',
    featured: false,
  },
  {
    title: 'Shopee Server',
    tag: 'Backend',
    desc: 'Backend API for the Shopee e-commerce app handling products, orders, authentication, and database operations.',
    tech: ['Node.js', 'Express', 'MongoDB'],
    repo: 'https://github.com/Jeevi-developer/shopee-server',
    featured: false,
  },
  {
    title: 'Task Management App',
    tag: 'Full-Stack',
    desc: 'A project and task management tool for organizing workflows with task creation, assignment, and status tracking.',
    tech: ['React', 'Node.js', 'Express'],
    repo: 'https://github.com/Jeevi-developer/task-management-project',
    featured: false,
  },
  {
    title: 'Doctor Clinic Template',
    tag: 'Frontend',
    desc: 'A responsive clinic website template with appointment booking, doctor profiles, and service listings.',
    tech: ['React', 'CSS3', 'HTML5'],
    repo: 'https://github.com/Jeevi-developer/doctor-clinic-template',
    featured: false,
  },
];

const services = [
  { icon: 'code', title: 'Frontend Development', text: 'Building responsive, performant user interfaces with React and modern JavaScript.' },
  { icon: 'server', title: 'Backend Development', text: 'Designing RESTful APIs and server-side logic with Node.js, Express, and MongoDB.' },
  { icon: 'layers', title: 'Full-Stack Integration', text: 'Connecting frontend and backend into seamless end-to-end applications.' },
  { icon: 'database', title: 'Database Design', text: 'Modeling and managing MongoDB databases with efficient schemas and queries.' },
];

function Icon({ name }) {
  const paths = {
    code: 'M8 9l-3 3 3 3M16 9l3 3-3 3M13 5l-2 14',
    server: 'M5 5h14a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM5 14h14a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zM8 7v.01M8 16v.01',
    layers: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    database: 'M12 2C8 2 4 3 4 5v14c0 2 4 3 8 3s8-1 8-3V5c0-2-4-3-8-3zM4 9c0 2 4 3 8 3s8-1 8-3',
    github: 'M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.6.11.82-.26.82-.58v-2.02c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33s1.7.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .32.22.7.83.58C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z',
    linkedin: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM6.5 18v-8H4v8h2.5zM5.25 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM20 18v-4.5c0-2.5-1.5-3.7-3-3.7-1.2 0-1.8.7-2.2 1.2V10H12.5v8H15v-4.2c0-1.1.6-1.7 1.5-1.7s1.5.6 1.5 1.7V18H20z',
    mail: 'M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1 2l8 5 8-5',
    phone: 'M3 5a2 2 0 0 1 2-2h2.3a1 1 0 0 1 .95.68l1.1 3.3a1 1 0 0 1-.5 1.2l-1.7.9a12 12 0 0 0 5.5 5.5l.9-1.7a1 1 0 0 1 1.2-.5l3.3 1.1a1 1 0 0 1 .68.95V19a2 2 0 0 1-2 2A16 16 0 0 1 3 5z',
    arrow: 'M7 17L17 7M7 7h10v10',
    spark: 'M12 2l1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2z',
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}

/* ---------- Animated particle background ---------- */
function ParticleField() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let particles = [];
    const mouse = { x: null, y: null };

    const COLORS = ['#3b82f6', '#60a5fa', '#93c5fd'];
    const COUNT = 70;
    const LINK_DIST = 130;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function spawn() {
      particles = [];
      for (let i = 0; i < COUNT; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 1.8 + 0.8,
          c: COLORS[Math.floor(Math.random() * COLORS.length)],
          a: Math.random() * 0.5 + 0.3,
        });
      }
    }

    function tick() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        if (mouse.x !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < 120) {
            p.x += (dx / d) * 0.8;
            p.y += (dy / d) * 0.8;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c;
        ctx.globalAlpha = p.a;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const ld = Math.hypot(p.x - q.x, p.y - q.y);
          if (ld < LINK_DIST) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = '#3b82f6';
            ctx.globalAlpha = (1 - ld / LINK_DIST) * 0.18;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(tick);
    }

    function onMove(e) { mouse.x = e.clientX; mouse.y = e.clientY; }
    function onLeave() { mouse.x = null; mouse.y = null; }

    resize();
    spawn();
    tick();
    window.addEventListener('resize', () => { resize(); spawn(); });
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />;
}

/* ---------- Circular skill ring ---------- */
const RING_CIRC = 2 * Math.PI * 45;

function SkillRing({ name, level, shown }) {
  const offset = RING_CIRC - (level / 100) * RING_CIRC;
  return (
    <div className="skill-ring">
      <div className="ring-wrap">
        <svg className="ring-svg" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
          <circle className="ring-track" cx="50" cy="50" r="45" />
          <circle
            className="ring-fill"
            cx="50" cy="50" r="45"
            style={{ strokeDashoffset: shown ? offset : RING_CIRC }}
          />
        </svg>
        <span className="ring-label">{level}<small>%</small></span>
      </div>
      <span className="skill-ring-name">{name}</span>
    </div>
  );
}

function useReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, shown];
}

function Reveal({ children, className = '' }) {
  const [ref, shown] = useReveal();
  return <div ref={ref} className={`reveal ${shown ? 'in' : ''} ${className}`}>{children}</div>;
}

function Typewriter() {
  const phrases = ['Full-Stack Developer', 'React Engineer', 'Node.js Developer', 'Problem Solver'];
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = phrases[idx];
    const delay = deleting ? 45 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        setText(full.slice(0, text.length + 1));
        if (text.length + 1 === full.length) {
          setTimeout(() => setDeleting(true), 1600);
        }
      } else {
        setText(full.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setIdx((idx + 1) % phrases.length);
        }
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return <span className="type-text">{text}<span className="type-cursor">|</span></span>;
}

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [skillsRef, skillsShown] = useReveal();

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { threshold: 0.3 }
    );
    sections.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <StrictMode>
      <div className="site">
        <ParticleField />

        {/* ---------- Navbar ---------- */}
        <header className={`topbar ${navOpen ? 'open' : ''}`}>
          <div className="bar-inner">
            <a className="logo" href="#home" onClick={() => setNavOpen(false)}>
              <span className="logo-mark">JR</span>
              <span className="logo-text">Jeevitha<span className="logo-dot">.</span></span>
            </a>
            <nav className={`nav-links ${navOpen ? 'show' : ''}`}>
              <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => setNavOpen(false)}>Home</a>
              <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setNavOpen(false)}>About</a>
              <a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={() => setNavOpen(false)}>Skills</a>
              <a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={() => setNavOpen(false)}>Services</a>
              <a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => setNavOpen(false)}>Projects</a>
              <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setNavOpen(false)}>Contact</a>
              <a className="nav-cta" href={`mailto:${EMAIL}`}>Hire me</a>
            </nav>
            <button className="hamburger" aria-label="Menu" onClick={() => setNavOpen(v => !v)}><span /><span /><span /></button>
          </div>
        </header>

        {/* ---------- Hero ---------- */}
        <section className="hero" id="home">
          <div className="hero-glow" />
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="hero-grid">
            <div className="hero-left">
              <p className="hero-greet">Hello, I'm</p>
              <h1>Jeevitha Raghuraman</h1>
              <p className="hero-role"><Typewriter /></p>
              <p className="hero-sub">
                A passionate full-stack developer crafting clean, performant web applications
                from pixel-perfect frontends to robust backend APIs.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#projects">View my work <Icon name="arrow" /></a>
                <a className="btn btn-ghost" href={`mailto:${EMAIL}`}>Get in touch</a>
              </div>
              <div className="hero-socials">
                <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a>
                <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
                <a href={`mailto:${EMAIL}`} aria-label="Email"><Icon name="mail" /></a>
                <a href={`tel:+91${PHONE}`} aria-label="Phone"><Icon name="phone" /></a>
              </div>
            </div>
            <div className="hero-right">
              <div className="hero-card">
                <div className="hero-card-glow" />
                <div className="hero-card-inner">
                  <div className="avatar-ring">
                    <div className="avatar">JR</div>
                  </div>
                  <div className="hero-card-stats">
                    <div className="stat"><strong>9+</strong><span>Projects</span></div>
                    <div className="stat"><strong>12+</strong><span>Technologies</span></div>
                    <div className="stat"><strong>Full</strong><span>Stack</span></div>
                  </div>
                  <div className="hero-card-tech">
                    {['React', 'Node.js', 'MongoDB', 'Express'].map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-scroll">Scroll <span /></div>
        </section>

        {/* ---------- About ---------- */}
        <section className="about" id="about">
          <div className="orb orb-3" />
          <div className="container">
            <Reveal>
              <div className="section-head-left">
                <p className="kicker">/ About me</p>
                <h2>Turning ideas into <em>real products</em></h2>
              </div>
            </Reveal>
            <div className="about-grid">
              <Reveal>
                <div className="about-text">
                  <p>
                    I'm a full-stack developer based in India, specializing in the MERN stack.
                    I build end-to-end web applications — from responsive React interfaces to
                    scalable Node.js backends with MongoDB.
                  </p>
                  <p>
                    My GitHub showcases a range of projects including a crypto exchange platform
                    with KYC and wallet systems, full e-commerce solutions with separate client
                    and server architectures, task management tools, and clinic website templates.
                  </p>
                  <p>
                    I care about clean code, thoughtful UI, and APIs that just work.
                    Always eager to take on new challenges and learn along the way.
                  </p>
                  <div className="about-info">
                    <div className="info-row"><span>Name:</span><strong>Jeevitha Raghuraman</strong></div>
                    <div className="info-row"><span>Email:</span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div>
                    <div className="info-row"><span>Phone:</span><a href={`tel:+91${PHONE}`}>+91 {PHONE}</a></div>
                    <div className="info-row"><span>Role:</span><strong>Full-Stack Developer</strong></div>
                    <div className="info-row"><span>Freelance:</span><strong>Available</strong></div>
                  </div>
                  <a className="btn btn-primary" href="#contact">Let's collaborate <Icon name="arrow" /></a>
                </div>
              </Reveal>
              <Reveal>
                <div className="about-highlights">
                  <div className="highlight-card">
                    <div className="highlight-icon"><Icon name="code" /></div>
                    <h3>Clean Frontend</h3>
                    <p>Responsive, accessible React interfaces with modern CSS and thoughtful UX.</p>
                  </div>
                  <div className="highlight-card">
                    <div className="highlight-icon"><Icon name="server" /></div>
                    <h3>Robust Backend</h3>
                    <p>RESTful APIs with Node.js and Express — auth, middleware, and clean architecture.</p>
                  </div>
                  <div className="highlight-card">
                    <div className="highlight-icon"><Icon name="database" /></div>
                    <h3>Database Modeling</h3>
                    <p>MongoDB schemas designed for performance and real-world application needs.</p>
                  </div>
                  <div className="highlight-card">
                    <div className="highlight-icon"><Icon name="spark" /></div>
                    <h3>End-to-End</h3>
                    <p>From database to deployment — full-stack delivery with attention to every layer.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- Skills ---------- */}
        <section className="skills" id="skills">
          <div className="container">
            <Reveal>
              <div className="section-head">
                <p className="kicker">/ My toolkit</p>
                <h2>Skills & Technologies</h2>
                <p className="lead">The technologies I use to bring ideas to life.</p>
              </div>
            </Reveal>
            <div ref={skillsRef} className={`reveal ${skillsShown ? 'in' : ''}`}>
              <div className="skills-grid">
                {skills.map((s) => (
                  <SkillRing key={s.name} name={s.name} level={s.level} shown={skillsShown} />
                ))}
              </div>
            </div>
            <Reveal>
              <div className="tech-chips">
                {techStack.map((t) => <span key={t} className="tech-chip">{t}</span>)}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Services ---------- */}
        <section className="services" id="services">
          <div className="container">
            <Reveal>
              <div className="section-head">
                <p className="kicker">/ What I do</p>
                <h2>Services I offer</h2>
                <p className="lead">End-to-end development, from concept to deployment.</p>
              </div>
            </Reveal>
            <div className="service-grid">
              {services.map((s) => (
                <Reveal key={s.title}>
                  <div className="service-card">
                    <div className="service-icon"><Icon name={s.icon} /></div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Projects ---------- */}
        <section className="projects" id="projects">
          <div className="container">
            <Reveal>
              <div className="section-head">
                <p className="kicker">/ My work</p>
                <h2>Featured Projects</h2>
                <p className="lead">A selection of things I've built — full-stack apps, APIs, and interfaces.</p>
              </div>
            </Reveal>
            <div className="project-grid">
              {projects.map((p) => (
                <Reveal key={p.title}>
                  <article className={`project-card ${p.featured ? 'featured' : ''}`}>
                    <div className="project-top">
                      <span className="project-tag">{p.tag}</span>
                      <a href={p.repo} target="_blank" rel="noreferrer" className="project-gh" aria-label="View on GitHub">
                        <Icon name="github" />
                      </a>
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <div className="project-tech">
                      {p.tech.map((t) => <span key={t}>{t}</span>)}
                    </div>
                    <a href={p.repo} target="_blank" rel="noreferrer" className="project-link">
                      View on GitHub <Icon name="arrow" />
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Contact ---------- */}
        <section className="contact" id="contact">
          <div className="container">
            <Reveal>
              <div className="contact-card">
                <div className="contact-left">
                  <p className="kicker">/ Get in touch</p>
                  <h2>Let's build something together.</h2>
                  <p className="contact-lead">
                    I'm available for freelance work and full-time opportunities.
                    Reach out and let's talk about your project.
                  </p>
                  <div className="contact-items">
                    <a href={`mailto:${EMAIL}`} className="contact-item">
                      <span className="contact-ic"><Icon name="mail" /></span>
                      <div><small>Email</small><strong>{EMAIL}</strong></div>
                    </a>
                    <a href={`tel:+91${PHONE}`} className="contact-item">
                      <span className="contact-ic"><Icon name="phone" /></span>
                      <div><small>Phone</small><strong>+91 {PHONE}</strong></div>
                    </a>
                    <a href={GITHUB} target="_blank" rel="noreferrer" className="contact-item">
                      <span className="contact-ic"><Icon name="github" /></span>
                      <div><small>GitHub</small><strong>Jeevi-developer</strong></div>
                    </a>
                    <a href={LINKEDIN} target="_blank" rel="noreferrer" className="contact-item">
                      <span className="contact-ic"><Icon name="linkedin" /></span>
                      <div><small>LinkedIn</small><strong>Jeevitha Raghuraman</strong></div>
                    </a>
                  </div>
                </div>
                <form className="contact-form" onSubmit={(e) => {
                  e.preventDefault();
                  const fd = new FormData(e.currentTarget);
                  const subject = encodeURIComponent(`Portfolio enquiry from ${fd.get('name') || 'someone'}`);
                  const body = encodeURIComponent(`${fd.get('message') || ''}\n\nFrom: ${fd.get('name') || ''}\nEmail: ${fd.get('email') || ''}`);
                  window.open(`mailto:${EMAIL}?subject=${subject}&body=${body}`);
                }}>
                  <h3>Send a message</h3>
                  <input type="text" name="name" placeholder="Your name" required />
                  <input type="email" name="email" placeholder="Your email" required />
                  <textarea name="message" rows="5" placeholder="Tell me about your project..." required />
                  <button type="submit" className="btn btn-primary">Send message <Icon name="arrow" /></button>
                </form>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Footer ---------- */}
        <footer className="footer">
          <div className="container">
            <div className="footer-inner">
              <div className="footer-brand">
                <span className="logo-mark">JR</span>
                <div>
                  <strong>Jeevitha Raghuraman</strong>
                  <p>Full-Stack Developer • React • Node.js • MongoDB</p>
                </div>
              </div>
              <div className="footer-socials">
                <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a>
                <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
                <a href={`mailto:${EMAIL}`} aria-label="Email"><Icon name="mail" /></a>
              </div>
            </div>
            <div className="footer-bottom">
              <span>© {new Date().getFullYear()} Jeevitha Raghuraman. All rights reserved.</span>
              <span>Built with React &amp; passion.</span>
            </div>
          </div>
        </footer>
      </div>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<App />);
