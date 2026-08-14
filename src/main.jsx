import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const projects = [
  {
    number: "01",
    type: "SaaS platform",
    title: "ZolveHR CRM Modules",
    description:
      "The live CRM workspace inside ZolveHR — lead pipelines, contact management, and sales tracking modules built for day-to-day team use.",
    stack: ["React.js", "TypeScript", "Node.js", "Express.js", "MySQL"],
    link: "app.zolvehr.com/crm/modules",
    accent: "mint",
  },
  {
    number: "02",
    type: "SaaS platform",
    title: "ZolveHR",
    description:
      "A multi-tenant CRM and HRMS platform that brings attendance, payroll, recruitment, shifts, and employee management into one clear operating system.",
    stack: ["React.js", "TypeScript", "Node.js", "Express.js", "MySQL"],
    link: "www.zolvehr.com",
    accent: "mint",
  },
  {
    number: "03",
    type: "Education",
    title: "Sona Valliappa Academy",
    description:
      "A responsive education website with a dynamic front end, Laravel-powered content, enquiry forms, email notifications, and reusable UI patterns.",
    stack: ["React.js", "Laravel", "REST APIs", "Tailwind CSS"],
    link: "www.sonavalliappaacademy.com",
    accent: "blue",
  },
  {
    number: "04",
    type: "E-commerce",
    title: "E-Commerce Store",
    description:
      "A full-stack shopping experience with product discovery, cart and order management, secure checkout, payments, inventory, and sales reporting.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    link: "www.indxindshopee.com",
    accent: "orange",
  },
];

const skills = [
  ["01", "Frontend", "React.js · JavaScript · TypeScript · Tailwind CSS"],
  ["02", "Backend", "Node.js · Express.js · PHP · Laravel"],
  ["03", "Data & APIs", "MySQL · MongoDB · RESTful APIs · Payment APIs"],
  [
    "04",
    "Delivery",
    "Linux · Git · GitHub · Deployment · Server configuration",
  ],
];

function ArrowUpRight({ small = false }) {
  return (
    <span className={small ? "arrow arrow-small" : "arrow"} aria-hidden="true">
      ↗
    </span>
  );
}

const testimonials = [
  { text: 'Smooth and safe trip to Ooty. The driver was polite and knew all the best viewpoints. Highly recommended!', name: 'Arun Kumar', place: 'Coimbatore' },
  { text: 'Booked a 3-day Munnar package for our family. Clean vehicle, comfortable stays and great pricing.', name: 'Priya Sundar', place: 'Chennai' },
  { text: 'Very professional service. The team replied instantly on WhatsApp and arranged everything perfectly.', name: 'Faisal Rahman', place: 'Bangalore' },
  { text: 'Affordable Coorg package with excellent coordination. Felt safe and well looked after throughout.', name: 'Latha Venkatesh', place: 'Coimbatore' },
];

function Icon({ name }) {
  const paths = {
    car: 'M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11M5 11h14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-1M5 11a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1m12-7H7m12 7v-2a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2',
    clock: 'M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0',
    map: 'M9 20l-5.45-2.73A1 1 0 0 1 3 16.38V5.36a1 1 0 0 1 1.45-.9L9 7m0 13l6-3m-6 3V7m6 10l5.55 2.78A1 1 0 0 0 22 18.9V7.72a1 1 0 0 0-.55-.9L15 4m0 13V4',
    phone: 'M3 5a2 2 0 0 1 2-2h2.3a1 1 0 0 1 .95.68l1.1 3.3a1 1 0 0 1-.5 1.2l-1.7.9a12 12 0 0 0 5.5 5.5l.9-1.7a1 1 0 0 1 1.2-.5l3.3 1.1a1 1 0 0 1 .68.95V19a2 2 0 0 1-2 2A16 16 0 0 1 3 5z',
  };
  return (
    <main>
      <div className="grain" aria-hidden="true" />
      <nav className="nav container">
        {/* <a className="brand" href="#top" aria-label="Jeevitha home"><span>J</span><strong>JR</strong></a> */}
        <a className="brand" href="#top" aria-label="Jeevitha home">
          <img
            className="brand-avatar"
            src="/jeevitha-profile.png"
            alt="Jeevitha"
          />
          <strong>JR</strong>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="availability" href="mailto:gvsivagiri@gmail.com">
          <i />
          Available for work
        </a>
      </nav>

      <section className="hero container" id="top">
        <div className="hero-copy">
          <div className="eyebrow reveal">
            <span className="eyebrow-line" /> Salem, Tamil Nadu · India
          </div>
          <h1 className="reveal delay-1">
            Building the
            <br />
            <em>web,</em> <span>with intent.</span>
          </h1>
          <p className="hero-intro reveal delay-2">
            Full Stack Developer with 5+ years of experience building and
            deploying reliable web applications across modern JavaScript
            technologies.
          </p>
          <div className="hero-actions reveal delay-3">
            <a className="button button-dark" href="#work">
              Explore my work <ArrowUpRight />
            </a>
            <a className="text-link" href="mailto:gvsivagiri@gmail.com">
              Let's talk <ArrowUpRight small />
            </a>
          </div>
        </div>
        <div className="hero-aside reveal delay-2">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="hero-photo">
            <img src="/jeevitha-profile.png" alt="Jeevitha" />
          </div>
          {/* <div className="hero-note">
            <span>01</span>
            <p>
              From concept
              <br />
              to production.
            </p>
          </div> */}
        </div>
        <div className="scroll-cue">
          <span /> Scroll to explore
        </div>
      </section>

      <section className="statement container" id="about">
        <div className="section-kicker">/ A little about me</div>
        <div className="statement-grid">
          <h2>
            Digital products
            <br />
            <span>that do more.</span>
          </h2>
          <div className="statement-body">
            <p>
              I’m Jeevitha, a developer who likes the space where clean
              interfaces meet solid engineering. I work across the stack to turn
              complex requirements into products people can actually enjoy
              using.
            </p>
            <p>
              My experience spans multi-tenant SaaS, e-commerce, education
              platforms, REST APIs, payment integrations, and production
              deployments. Good software should feel simple on the surface — I
              build toward that.
            </p>
            <a className="text-link" href="mailto:gvsivagiri@gmail.com">
              Get to know me <ArrowUpRight small />
            </a>
          </div>
        </div>
      </section>

      <section className="work container" id="work">
        <div className="section-heading">
          <div className="section-kicker">/ Selected work</div>
          <span>2022 — Present</span>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article
              className={`project project-${project.accent}`}
              key={project.number}
            >
              <div className="project-top">
                <span className="project-number">{project.number}</span>
                <span className="project-type">{project.type}</span>
                <a
                  href={`https://${project.link}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${project.title}`}
                >
                  <ArrowUpRight />
                </a>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
              <div className="project-link">
                {project.link} <ArrowUpRight small />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilities container">
        <div className="section-kicker">/ What I bring</div>
        <div className="capabilities-grid">
          <h2>
            Many hats.
            <br />
            <span>One standard.</span>
          </h2>
          <div className="skill-list">
            {skills.map(([number, title, detail]) => (
              <div className="skill" key={number}>
                <span>{number}</span>
                <strong>{title}</strong>
                <p>{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta container" id="contact">
        <div className="cta-label">Have a project in mind?</div>
        <h2>
          Let’s make something
          <br />
          <em>meaningful.</em>
        </h2>
        <a className="button button-light" href="mailto:gvsivagiri@gmail.com">
          Start a conversation <ArrowUpRight />
        </a>
        <div className="cta-meta">
          <a href="mailto:gvsivagiri@gmail.com">gvsivagiri@gmail.com</a>
          <span>+91 70109 93302</span>
          <span>Salem, Tamil Nadu</span>
        </div>
      </section>

      <footer className="footer container">
        <span>© 2026 Jeevitha Raghuraman</span>
        <span>Designed & built with care</span>
        <div>
          <a
            href="https://github.com/Jeevi-developer/jeevitha-fullstack-portfolio"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowUpRight small />
          </a>
          <a
            href="https://www.linkedin.com/in/jeevitha-raghuraman-ababa817a/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ArrowUpRight small />
          </a>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
