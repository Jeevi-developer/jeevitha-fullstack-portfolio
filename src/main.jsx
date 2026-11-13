import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const base = import.meta.env.BASE_URL;
const projects = [
  {
    no: "01",
    name: "ZolveHR",
    type: "MULTI-TENANT SAAS · CRM / HRMS",
    summary:
      "A unified platform for employee operations, attendance, payroll, recruitment, shifts and customer relationship workflows.",
    role: "Full-stack development across React/TypeScript interfaces, Node.js services, REST APIs and MySQL data models. Worked on tenant-aware application behavior and platform modules.",
    stack: ["React", "TypeScript", "Node.js", "Express", "MySQL"],
    url: "https://app.zolvehr.com",
    tag: "SaaS",
  },
  {
    no: "02",
    name: "iNDXiND Shopee",
    type: "MULTI-VENDOR E-COMMERCE",
    summary:
      "A marketplace experience designed to support multiple sellers, product discovery and end-to-end shopping workflows.",
    role: "Contributed to full-stack application features using the MERN stack, including frontend flows, backend APIs and database integration.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    url: "https://indxindshopee.com",
    tag: "Commerce",
  },
  {
    no: "03",
    name: "DACDIAG",
    type: "HEALTHCARE APPLICATION",
    summary:
      "A digital healthcare product focused on supporting diagnostic and related workflows.",
    role: "Contributed to application development. Project details and implementation scope can be discussed where permitted.",
    stack: ["Web application", "APIs", "Database"],
    url: "",
    tag: "Healthcare",
  },

  {
    no: "04",
    name: "Sona Valliappa Academy",
    type: "EDUCATION PLATFORM",
    summary:
      "A responsive education website built to present programs and support enquiry workflows.",
    role: "Frontend development, API integration and Laravel-backed application features, including enquiry and email notification workflows.",
    stack: ["React", "Laravel", "REST APIs", "Tailwind CSS"],
    url: "https://sonavalliappaacademy.com",
    tag: "Education",
  },
];
const groups = [
  [
    "Frontend engineering",
    "React.js",
    "JavaScript (ES6+)",
    "TypeScript (working knowledge)",
    "HTML5 / CSS3",
    "Tailwind CSS",
    "Bootstrap",
  ],
  [
    "Backend engineering",
    "Node.js",
    "Express.js",
    "PHP",
    "Laravel",
    "REST API design & integration",
  ],
  [
    "Data & integrations",
    "MySQL",
    "MongoDB",
    "Sequelize",
    "Payment gateway integration",
    "Email / OTP workflows",
  ],
  [
    "Tools & delivery",
    "Git & GitHub",
    "Ubuntu / Linux commands",
    "Server deployment",
    "Postman",
    "Production debugging",
  ],
];
const experiences = [
  {
    period: "FEB 2026 — OCT 2026",
    role: "Senior Software Engineer",
    company: "Nubiznez Pvt Ltd",
    type: "CRM & HRMS SaaS",
    points: [
      "Developed and maintained a multi-tenant CRM and HRMS SaaS platform using React.js, TypeScript, Node.js, Express.js, and MySQL.",
      "Built HR modules covering Attendance, Payroll, Recruitment, Shift Management, and role-based access control.",
      "Managed MySQL databases, RESTful APIs, payment integrations, and application-level troubleshooting.",
      "Managed source code using Git/GitHub and deployed applications on Ubuntu/Linux servers using Linux commands.",
      "Implemented company-specific features, integrations, and production support based on client requirements.",
    ],
    stack: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MySQL",
      "Ubuntu",
      "Git",
    ],
  },
  {
    period: "AUG 2025 — JAN 2026",
    role: "Full Stack Developer",
    company: "Nulinz Technology",
    type: "Healthcare Platform",
    points: [
      "Built DACDIAG, a doctor-patient online appointment platform using the MERN stack across web and mobile applications.",
      "Developed doctor and patient registration, appointment booking and scheduling, consultation management, and notification modules.",
      "Designed and integrated RESTful APIs connecting web and mobile applications to a shared backend.",
      "Implemented authentication and role-based access for Doctor, Patient, and Admin users.",
      "Managed MongoDB database design, API performance, and cross-platform bug fixing.",
    ],
    stack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "REST APIs",
      "React Native",
    ],
  },
  {
    period: "JUL 2024 — JUL 2025",
    role: "Web Developer",
    company: "Sona College of Technology",
    type: "Education Technology",
    points: [
      "Created dynamic, cross-device-compatible applications using React.js, JavaScript (ES6+), and Tailwind CSS.",
      "Developed a responsive educational website using React.js for frontend development and Laravel for backend APIs.",
      "Integrated RESTful APIs to fetch and display application data.",
      "Implemented enquiry forms and automated email notifications using Laravel controllers and the Brevo API.",
      "Improved UI/UX, developed reusable components, and ensured secure API integration.",
    ],
    stack: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "PHP",
      "Laravel",
      "REST APIs",
      "Brevo",
    ],
  },
  {
    period: "OCT 2022 — JAN 2024",
    role: "Software Engineer",
    company: "Smart Reach",
    type: "Web Application Development",
    points: [
      "Developed robust backend systems and dynamic web pages using PHP, focusing on responsive and secure application behavior.",
      "Implemented RESTful APIs to enable seamless communication between frontend and backend systems.",
      "Applied input validation, CSRF protection, and role-based access control to secure PHP applications.",
      "Participated in code reviews and used Git for version control and collaborative development.",
    ],
    stack: ["PHP", "JavaScript", "MySQL", "REST APIs", "Git"],
  },
  {
    period: "JAN 2022 — OCT 2022",
    role: "Software Engineer",
    company: "PK Software Solutions",
    type: "Full Stack Development",
    points: [
      "Developed modular MVC-based applications using CodeIgniter and implemented CRUD operations with MySQL.",
      "Used Active Record and Query Builder for database operations.",
      "Deployed CodeIgniter applications on shared and cloud hosting environments.",
      "Built a MERN-based application featuring product listings, shopping cart, order management, and admin dashboard.",
      "Implemented Firebase OTP authentication, secure checkout, and payment gateway integration.",
      "Developed RESTful APIs using Node.js, Express.js, MongoDB, and Mongoose for inventory and sales management.",
      "Integrated Firebase Authentication and Firebase Cloud Messaging (FCM) for mobile applications.",
    ],
    stack: [
      "PHP",
      "CodeIgniter",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "Firebase",
    ],
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}
function App() {
  useEffect(() => {
    const revealTargets = document.querySelectorAll(
      ".section-label, .about-grid, .expertise-heading, .skill-card, .work-heading, .project-card, .experience-grid, .approach-grid, .mentor-inner, .contact > *",
    );
    revealTargets.forEach((el, index) => {
      el.classList.add("reveal");
      if (
        el.classList.contains("skill-card") ||
        el.classList.contains("project-card")
      )
        el.style.setProperty("--reveal-delay", `${(index % 4) * 90}ms`);
    });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" },
    );
    revealTargets.forEach((el) => observer.observe(el));

    const role = document.querySelector(".overline");
    if (role) {
      const roles = [
        "FULL STACK SOFTWARE ENGINEER",
        "REACT & NODE.JS DEVELOPER",
        "PRODUCT-MINDED ENGINEER",
      ];
      let roleIndex = 0;
      let charIndex = roles[0].length;
      let deleting = false;
      let timeout;
      const type = () => {
        const current = roles[roleIndex];
        role.textContent = current.slice(0, charIndex);
        if (!deleting && charIndex === current.length) {
          deleting = true;
          timeout = setTimeout(type, 1700);
          return;
        }
        if (deleting && charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
        charIndex += deleting ? -1 : 1;
        timeout = setTimeout(type, deleting ? 42 : 78);
      };
      timeout = setTimeout(type, 2200);
      return () => {
        observer.disconnect();
        clearTimeout(timeout);
      };
    }
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <div className="grid-overlay" aria-hidden="true" />
      <header className="site-header wrap">
        <a className="wordmark" href="#home">
          <span className="mark">JR</span>
          <span>
            JEEVITHA RAGHURAMAN<small>SOFTWARE ENGINEER</small>
          </span>
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#expertise">Expertise</a>
          <a href="#work">Projects</a>
          <a href="#experience">Experience</a>
        </nav>
        <a className="header-cta" href="mailto:gvsivagiri@gmail.com">
          LET'S TALK <Arrow />
        </a>
      </header>
      <main>
        <section className="hero wrap" id="home">
          <div className="hero-copy">
            <div className="status">
              <i /> OPEN TO FULL-TIME · REMOTE / HYBRID
            </div>
            <p className="overline">
              FULL STACK SOFTWARE ENGINEER <span>·</span> 5+ YEARS
            </p>
            <h1 className="hero-title">
              Engineering
              <br />
              <em>products</em> that
              <br />
              move work forward<span className="period">.</span>
            </h1>
            <p className="hero-desc">
              I build end-to-end web applications — from thoughtful React
              interfaces and dependable APIs to data models and production
              deployments.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#work">
                Explore selected work <Arrow />
              </a>
              <a className="btn secondary" href="mailto:gvsivagiri@gmail.com">
                Contact me <Arrow />
              </a>
            </div>
            <div className="hero-meta">
              <span>BASED IN TAMIL NADU, INDIA</span>
              <span>REACT · NODE · DATABASES</span>
            </div>
          </div>
          <aside className="hero-panel">
            <div className="panel-top">
              <span>ENGINEERING PROFILE</span>
              <span>01 / 04</span>
            </div>
            <div className="portrait-frame">
              <img
                src={`${base}jeevitha-profile.png`}
                alt="Portrait of Jeevitha Raghuraman"
              />
            </div>
            <div className="panel-bottom">
              <div>
                <b>Jeevitha Raghuraman</b>
                <span>Full Stack Software Engineer</span>
              </div>
              <span className="panel-symbol">✳</span>
            </div>
            <div className="orbit-label label-one">FRONTEND</div>
            <div className="orbit-label label-two">BACKEND</div>
          </aside>
          <div className="hero-index">
            01 <span>—</span> INTRODUCTION
          </div>
        </section>
        <section className="metrics wrap" aria-label="Professional highlights">
          <div>
            <strong>
              5<span>+</span>
            </strong>
            <small>YEARS BUILDING SOFTWARE</small>
          </div>
          <div>
            <strong>05</strong>
            <small>FEATURED PROJECTS</small>
          </div>
          <div>
            <strong>FULL</strong>
            <small>STACK OWNERSHIP</small>
          </div>
          <div>
            <strong>END → END</strong>
            <small>PRODUCT DEVELOPMENT</small>
          </div>
        </section>
        <section className="section wrap about" id="about">
          <div className="section-label">
            <span>01 / ABOUT</span>
            <i />
          </div>
          <div className="about-grid">
            <h2>
              Practical engineering.
              <br />
              <em>Product-minded</em> delivery.
            </h2>
            <div className="about-copy">
              <p className="lead">
                I’m Jeevitha — a full stack developer focused on building
                useful, maintainable web products.
              </p>
              <p>
                My experience includes SaaS platforms, multi-tenant business
                applications, e-commerce and education products. I work across
                frontend experiences, backend services, database integration and
                the debugging that connects them.
              </p>
              <p>
                I enjoy understanding the real workflow behind a feature,
                translating it into a reliable implementation and collaborating
                to ship improvements that users can depend on.
              </p>
              <a
                className="inline-link"
                href="https://www.linkedin.com/in/jeevitha-raghuraman-ababa817a/"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn <Arrow />
              </a>
            </div>
          </div>
        </section>
        <section className="section expertise" id="expertise">
          <div className="wrap">
            <div className="section-label">
              <span>02 / TECHNICAL EXPERTISE</span>
              <i />
            </div>
            <div className="expertise-heading">
              <h2>
                Tools I use to
                <br />
                <em>solve problems.</em>
              </h2>
              <p>
                A practical stack for building user-facing products, integrating
                services and working with application data.
              </p>
            </div>
            <div className="skill-grid">
              {groups.map(([title, ...items], i) => (
                <article className="skill-card" key={title}>
                  <div className="skill-card-top">
                    <span>0{i + 1}</span>
                    <span>↗</span>
                  </div>
                  <h3>{title}</h3>
                  <ul>
                    {items.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section wrap work" id="work">
          <div className="section-label">
            <span>03 / SELECTED WORK</span>
            <i />
          </div>
          <div className="work-heading">
            <h2>
              Built for the
              <br />
              <em>real world.</em>
            </h2>
            <p>
              A selection of products and platforms I’ve contributed to. Some
              work is part of private company repositories; descriptions focus
              on my experience without exposing confidential implementation
              details.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((p) => (
              <article className="project-card" key={p.no}>
                <div className="project-top">
                  <span>
                    {p.no} / {p.type}
                  </span>
                  <span className="project-tag">{p.tag}</span>
                </div>
                <h3>{p.name}</h3>
                <p className="project-summary">{p.summary}</p>
                <div className="project-role">
                  <b>MY CONTRIBUTION</b>
                  <p>{p.role}</p>
                </div>
                <div className="chips">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <div className="project-footer">
                  {p.url ? (
                    <a href={p.url} target="_blank" rel="noreferrer">
                      VISIT PROJECT <Arrow />
                    </a>
                  ) : (
                    <span>PROJECT DETAILS AVAILABLE ON REQUEST</span>
                  )}
                  <span>CASE STUDY {p.no}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="section experience" id="experience">
          <div className="wrap">
            <div className="section-label">
              <span>04 / PROFESSIONAL EXPERIENCE</span>
              <i />
            </div>

            <div className="experience-grid">
              <div className="experience-heading">
                <span className="eyebrow">MY CAREER JOURNEY</span>
                <h2>
                  From requirements
                  <br />
                  to <em>release.</em>
                </h2>
                <p>
                  Building production-ready applications, solving real-world
                  engineering challenges, and delivering end-to-end software
                  solutions across multiple domains.
                </p>

                <div className="experience-stat">
                  <strong>5+</strong>
                  <span>Years of professional experience</span>
                </div>
              </div>

              <div className="experience-content">
                {experiences.map((item, index) => (
                  <article className="timeline-item" key={item.company}>
                    <div className="timeline-marker">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </div>

                    <div className="timeline-body">
                      <span className="timeline-date">{item.period}</span>

                      <h3>{item.role}</h3>

                      <div className="timeline-company">
                        {item.company}
                        <span>· {item.type}</span>
                      </div>

                      <ul>
                        {item.points.map((point, pointIndex) => (
                          <li key={pointIndex}>{point}</li>
                        ))}
                      </ul>

                      <div className="timeline-stack">
                        {item.stack.map((skill) => (
                          <span key={skill}>{skill}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="section wrap approach">
          <div className="section-label">
            <span>05 / HOW I WORK</span>
            <i />
          </div>
          <div className="approach-grid">
            <h2>
              Good software is
              <br />
              <em>more than code.</em>
            </h2>
            <div className="approach-items">
              <div>
                <b>01</b>
                <span>
                  <strong>Understand the system</strong>
                  <small>
                    Trace requirements, data flow and existing architecture
                    before changing code.
                  </small>
                </span>
              </div>
              <div>
                <b>02</b>
                <span>
                  <strong>Build for maintainability</strong>
                  <small>
                    Keep components, APIs and data responsibilities clear and
                    predictable.
                  </small>
                </span>
              </div>
              <div>
                <b>03</b>
                <span>
                  <strong>Debug with context</strong>
                  <small>
                    Follow issues across UI state, API contracts, persistence
                    and integrations.
                  </small>
                </span>
              </div>
              <div>
                <b>04</b>
                <span>
                  <strong>Ship responsibly</strong>
                  <small>
                    Validate behavior, consider edge cases and support
                    production delivery.
                  </small>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="section mentor">
          <div className="wrap mentor-inner">
            <div>
              <div className="section-label">
                <span>06 / MENTORSHIP</span>
                <i />
              </div>
              <h2>
                Sharing what
                <br />
                <em>I’ve learned.</em>
              </h2>
            </div>
            <div>
              <p>
                I also mentor aspiring developers through structured, hands-on
                learning in HTML, CSS, JavaScript, React, Node.js, Express and
                MySQL — with practical exercises and project-based guidance.
              </p>
              <a
                className="inline-link"
                href="mailto:gvsivagiri@gmail.com?subject=Mentorship%20enquiry"
              >
                Enquire about mentorship <Arrow />
              </a>
            </div>
          </div>
        </section>
        <section className="contact wrap" id="contact">
          <div className="section-label">
            <span>07 / CONTACT</span>
            <i />
          </div>
          <p className="overline">HAVE A PRODUCT OR TEAM IN MIND?</p>
          <h2>
            Let’s build
            <br />
            <em>something solid.</em>
          </h2>
          <div className="contact-bottom">
            <a className="contact-email" href="mailto:gvsivagiri@gmail.com">
              gvsivagiri@gmail.com <Arrow />
            </a>
            <div className="contact-links">
              <a
                href="https://github.com/Jeevi-developer"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB <Arrow />
              </a>
              <a
                href="https://www.linkedin.com/in/jeevitha-raghuraman-ababa817a/"
                target="_blank"
                rel="noreferrer"
              >
                LINKEDIN <Arrow />
              </a>
              <span>TAMIL NADU, INDIA</span>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer wrap">
        <a className="wordmark" href="#home">
          <span className="mark">JR</span>
          <span>
            JEEVITHA RAGHURAMAN<small>SOFTWARE ENGINEER</small>
          </span>
        </a>
        <span>© {new Date().getFullYear()} JEEVITHA RAGHURAMAN</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </>
  );
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
