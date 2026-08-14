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

function App() {
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
