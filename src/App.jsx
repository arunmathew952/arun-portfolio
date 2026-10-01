import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  MotionConfig,
} from "framer-motion";
import { projects } from "./projects";
import { caseStudies } from "./caseStudies";
import { categories } from "./categories";
import { site } from "./site";
function Flow({ steps }) {
  return (
    <ol className="flow">
      {steps.map((step, index) => (
        <li key={step.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{step.title}</strong>
        </li>
      ))}
    </ol>
  );
}
function App() {
  // Navigation, project filtering, and accessible case-study dialogs.
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [position, setPosition] = useState(1);
  const projectRail = useRef(null);
  const dialog = useRef(null);
  const previousFocus = useRef(null);
  const reducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 700], [1, 0.9]);
  const heroY = useTransform(scrollY, [0, 700], [0, 60]);
  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.category === filter,
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -55% 0px" },
    );
    document
      .querySelectorAll("main > section")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (selected) {
      dialog.current.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.current.close();
      document.body.style.overflow = "";
      previousFocus.current?.focus();
    }
  }, [selected]);

  function openProject(project) {
    previousFocus.current = document.activeElement;
    setSelected(project);
  }
  function closeMenu() {
    setMenuOpen(false);
  }
  function moveProjects(direction) {
    projectRail.current.scrollBy({
      left: direction * projectRail.current.clientWidth * 0.85,
      behavior: reducedMotion ? "instant" : "smooth",
    });
  }
  const study = selected && caseStudies[selected.id];
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip" href="#work">
        {"Skip to work"}
      </a>
      <header>
        <a className="brand" href="#home" onClick={closeMenu}>
          {site.logoImage ? (
            <img
              className="brand-logo"
              src={site.logoImage}
              alt={site.logoAlt}
            />
          ) : (
            site.logoText
          )}
        </a>
        <button
          className="menu"
          aria-expanded={menuOpen}
          aria-controls="navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
        <nav id="navigation" className={menuOpen ? "open" : ""}>
          {[
            ["home", "Home"],
            ["work", "Work"],
            ["about", "About"],
            ["experience", "Experience"],
          ].map(([id, label]) => (
            <motion.a
              key={id}
              href={"#" + id}
              onClick={closeMenu}
              aria-current={activeSection === id ? "location" : undefined}
              whileHover={
                reducedMotion
                  ? {}
                  : {
                      scale: id === "work" ? 0.87 : 1.04,
                    }
              }
              whileTap={{
                scale: 0.94,
              }}
            >
              {label}
            </motion.a>
          ))}
        </nav>
        <a className="nav-contact" href="#contact">
          {"Let’s talk"}
        </a>
      </header>
      <main>
        <section id="home" className="hero-shell">
          <motion.div
            className="hero"
            style={
              reducedMotion
                ? {}
                : {
                    scale: heroScale,
                    y: heroY,
                  }
            }
          >
            <div className="hero-top">
              <span className="eyebrow">
                {"ARUN MATHEW / CLOUD & DEVOPS ENGINEER"}
              </span>
              <span className="location">{site.location}</span>
            </div>
            <div className="hero-grid">
              <div className="hero-copy">
                <motion.h1
                  initial={
                    reducedMotion
                      ? false
                      : {
                          y: 28,
                          opacity: 0,
                        }
                  }
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                >
                  {"BUILD."}
                  <br />
                  {"AUTOMATE."}
                  <br />
                  <span>{"EVOLVE."}</span>
                </motion.h1>
                <p>
                  {
                    "I turn complex infrastructure into reliable systems. Cloud engineering, secure delivery, and a little less manual work."
                  }
                </p>
                <div className="actions">
                  <a className="button dark" href="#work">
                    {"Explore my work"}
                  </a>
                  <a
                    className="text-link"
                    href={site.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {"GitHub"}
                  </a>
                </div>
              </div>
              <motion.figure
                className="hero-visual"
                initial={
                  reducedMotion
                    ? false
                    : {
                        opacity: 0,
                        scale: 1.06,
                      }
                }
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1,
                }}
              >
                <img src={site.heroImage} alt={site.heroImageAlt} />
                <div className="image-title">
                  <span>{"BEHIND EVERY GOOD EXPERIENCE"}</span>
                  <strong>
                    {"A system that"}
                    <br />
                    {"just works."}
                  </strong>
                </div>
                <figcaption>
                  {"Infrastructure study · Image: "}
                  <a
                    href="https://e-words.jp/w/システム更改.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {"e-Words"}
                  </a>
                </figcaption>
              </motion.figure>
            </div>
            <div className="hero-bottom">
              <span>{"Engineering from code to cloud."}</span>
              <span>{"SCROLL TO EXPLORE ↓"}</span>
            </div>
          </motion.div>
        </section>
        <div className="ribbon" aria-label="Core technologies">
          <span>{"AWS"}</span>
          <i>{"✳"}</i>
          <span>{"TERRAFORM"}</span>
          <i>{"✳"}</i>
          <span>{"DOCKER"}</span>
          <i>{"✳"}</i>
          <span>{"KUBERNETES"}</span>
          <i>{"✳"}</i>
          <span>{"PYTHON"}</span>
        </div>
        <section id="work" className="work section-pad">
          <div className="section-head">
            <div>
              <span className="eyebrow">
                {"01 / SELECTED & EXPLORATORY WORK"}
              </span>
              <h2>
                {"Less friction."}
                <br />
                <span>{"More possibility."}</span>
              </h2>
            </div>
            <p>
              {"Cloud platforms, smarter applications,"}
              <br />
              {"and systems built to solve real problems."}
            </p>
          </div>
          <div className="work-toolbar">
            <div className="filters" aria-label="Filter projects">
              {Object.entries(categories).map(([categoryId, label]) => (
                <button
                  aria-pressed={filter === categoryId}
                  key={categoryId}
                  onClick={() => {
                    setFilter(categoryId);
                    setPosition(1);
                    projectRail.current.scrollTo({
                      left: 0,
                    });
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
            <span className="count">
              {String(filteredProjects.length).padStart(2, "0")}
              {" PROJECTS"}
            </span>
          </div>
          <div
            className="project-rail"
            ref={projectRail}
            tabIndex="0"
            aria-label="Projects. Scroll horizontally or use the next and previous buttons."
            onScroll={() => {
              let C = projectRail.current.firstElementChild;
              C &&
                setPosition(
                  Math.min(
                    filteredProjects.length,
                    Math.round(
                      projectRail.current.scrollLeft / (C.offsetWidth + 24),
                    ) + 1,
                  ),
                );
            }}
          >
            {filteredProjects.map((project, index) => (
              <motion.article
                className={"project " + project.category}
                key={project.id}
                initial={false}
                whileInView={
                  reducedMotion
                    ? {}
                    : {
                        opacity: 1,
                      }
                }
              >
                <button
                  className="project-open"
                  onClick={() => openProject(project)}
                >
                  {project.image ? (
                    <img
                      className="project-thumbnail"
                      src={project.image}
                      alt={project.imageAlt || project.title}
                      loading="lazy"
                    />
                  ) : (
                    <div className="project-art">
                      <div className="art-top">
                        <span>{categories[project.category]}</span>
                        <span>
                          {String(projects.indexOf(project) + 1).padStart(
                            2,
                            "0",
                          )}
                          {` / ${projects.length}`}
                        </span>
                      </div>
                      <div className="project-word">
                        {project.category === "devops"
                          ? "CODE → CLOUD"
                          : project.category === "ml"
                            ? "DATA → INSIGHT"
                            : project.category === "iot"
                              ? "SENSE → ACT"
                              : "IDEA → PRODUCT"}
                      </div>
                      <Flow
                        steps={caseStudies[project.id].approach.slice(0, 3)}
                      />
                      <div className="art-bottom">
                        <span>
                          {project.tags[0]}
                          {" / "}
                          {project.tags[1]}
                        </span>
                        <span>{"EXPLORE CASE STUDY +"}</span>
                      </div>
                    </div>
                  )}
                  <div className="project-copy">
                    <span className="eyebrow">
                      {caseStudies[project.id].category}
                    </span>
                    <h3>{project.title}</h3>
                    <p>{project.excerpt}</p>
                    <div className="tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </button>
              </motion.article>
            ))}
          </div>
          <div className="rail-controls">
            <span>
              {String(position).padStart(2, "0")}{" "}
              <span className="muted">
                {"/ "}
                {String(filteredProjects.length).padStart(2, "0")}
              </span>
            </span>
            <div>
              <button
                onClick={() => moveProjects(-1)}
                aria-label="Previous projects"
              >
                {"←"}
              </button>
              <button
                onClick={() => moveProjects(1)}
                aria-label="Next projects"
              >
                {"→"}
              </button>
            </div>
          </div>
        </section>
        <section id="about" className="about section-pad">
          <div className="about-intro">
            <div className="about-photo-col">
              <span className="eyebrow">{"02 / A LITTLE ABOUT ME"}</span>
              <img
                className="about-photo"
                src={site.aboutImage}
                alt={site.aboutImageAlt}
              />
            </div>
            <div>
              <h2>
                {"Curious by nature."}
                <br />
                <span>{"Engineer by practice."}</span>
              </h2>
              <p>
                {
                  "I’m Arun, a Cloud & DevOps Engineer based in Bangalore. I automate AWS infrastructure, streamline CI/CD pipelines, and build reliable systems with containers and real-time observability."
                }
              </p>
              <p>
                {
                  "My work spans cloud engineering, full-stack development, machine learning, and embedded systems. The common thread: understanding a problem, then making the solution simpler."
                }
              </p>
            </div>
          </div>
          <div className="capabilities">
            {[
              ["01", "Cloud infrastructure", "AWS, Azure, Terraform, Ansible"],
              [
                "02",
                "Delivery & reliability",
                "Docker, Kubernetes, Jenkins, Argo CD",
              ],
              [
                "03",
                "Intelligent applications",
                "Python, MERN, machine learning, IoT",
              ],
            ].map(([id, label, description]) => (
              <div key={id}>
                <span>{id}</span>
                <h3>{label}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
          <div className="about-statement">
            {"THINK CLEARLY. "}
            <span>{"BUILD BETTER."}</span>
          </div>
        </section>
        <section id="experience" className="experience section-pad">
          <div className="section-head">
            <div>
              <span className="eyebrow">{"03 / THE JOURNEY SO FAR"}</span>
              <h2>
                {"Learning."}
                <br />
                {"Building. Growing."}
              </h2>
            </div>
            <p>
              {"Experience across infrastructure,"}
              <br />
              {"automation, and intelligent systems."}
            </p>
          </div>
          <div className="experience-grid">
            <div>
              <span className="small-label">{"EXPERIENCE"}</span>
              <div className="timeline">
                <div>
                  <time>{"May 2026 — Present"}</time>
                  <h3>{"DevOps Engineer"}</h3>
                  <p>{"Introlligent Solutions"}</p>
                  <span>
                    {
                      "Infrastructure automation, CI/CD pipelines, and Kubernetes deployments for high-availability applications."
                    }
                  </span>
                </div>
                <div>
                  <time>{"Feb 2025 — Apr 2025"}</time>
                  <h3>{"Python Developer Intern"}</h3>
                  <p>{"Tata Advanced Systems Limited"}</p>
                  <span>
                    {
                      "Python automation and data processing for aerospace and defense systems."
                    }
                  </span>
                </div>
              </div>
            </div>
            <div>
              <span className="small-label">{"EDUCATION"}</span>
              <div className="education">
                <time>{"2021 — 2025"}</time>
                <h3>
                  {"B.Tech, Electronics &"}
                  <br />
                  {"Computer Science"}
                </h3>
                <p>{"Christ University · AI & ML"}</p>
                <span>{"GPA 8.12 / 10"}</span>
              </div>
              <details>
                <summary>
                  {"Certifications "}
                  <span>{"+"}</span>
                </summary>
                <ul>
                  <li>
                    {"AWS Cloud Practitioner Essentials "}
                    <small>{"Amazon Web Services"}</small>
                  </li>
                  <li>
                    {"100 Days of Code — Python, Flask, REST APIs "}
                    <small>{"Udemy"}</small>
                  </li>
                  <li>
                    {"Data Science for Engineers "}
                    <small>{"NPTEL"}</small>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </section>
        <section id="contact" className="contact section-pad">
          <span className="eyebrow">{"04 / NEXT UP"}</span>
          <h2>
            {"LET’S BUILD"}
            <br />
            <span>{"SOMETHING GOOD."}</span>
          </h2>
          <a className="email" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <div className="contact-bottom">
            <p>
              {"Have a project or an opportunity?"}
              <br />
              {"I’d love to hear about it."}
            </p>
            <div>
              <a href="tel:+917510877952">{"+91 7510877952"}</a>
              <a href={site.linkedin} target="_blank" rel="noreferrer">
                {"LinkedIn"}
              </a>
              <a href={site.github} target="_blank" rel="noreferrer">
                {"GitHub"}
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <span>
          {"© "}
          {new Date().getFullYear()}
          {" Arun Mathew"}
        </span>
        <span>{"Code with purpose. Build with care."}</span>
        <a href="#home">{"Back to top ↑"}</a>
      </footer>
      <dialog
        ref={dialog}
        onCancel={() => setSelected(null)}
        onClick={(item) => {
          item.target === dialog.current && setSelected(null);
        }}
        aria-labelledby="case-title"
      >
        {study && (
          <motion.div
            className="case-inner"
            initial={
              reducedMotion
                ? false
                : {
                    scale: 0.94,
                    opacity: 0,
                  }
            }
            animate={{
              scale: 1,
              opacity: 1,
            }}
          >
            <div className="case-nav">
              <span className="eyebrow">
                {"PROJECT / "}
                {selected.id.replace("project", "").padStart(2, "0")}
              </span>
              <button
                autoFocus={true}
                onClick={() => setSelected(null)}
                aria-label="Close case study"
              >
                {"Close ×"}
              </button>
            </div>
            <span className="eyebrow">{study.category}</span>
            <h2 id="case-title">{study.title}</h2>
            <div className="tags">
              {study.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="case-block">
              <h3>{"The challenge"}</h3>
              <p>{study.problemStatement}</p>
            </div>
            <div className="case-block">
              <h3>{"The thinking"}</h3>
              <p>{study.criticalThinking}</p>
            </div>
            <div className="case-block">
              <h3>{"How it works"}</h3>
              <Flow steps={study.approach} />
              <div className="approach">
                {study.approach.map((step, index) => (
                  <div key={step.title}>
                    <span>
                      {"0"}
                      {index + 1}
                    </span>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <details className="comparison">
              <summary>
                {"Before & after "}
                <span>{"+"}</span>
              </summary>
              <div>
                {[
                  ["Before", study.before],
                  ["After", study.after],
                ].map(([id, label]) => (
                  <section key={id}>
                    <h4>{id}</h4>
                    <ul>
                      {label.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </details>
            <div className="outcome">
              <span className="eyebrow">{"THE OUTCOME"}</span>
              <p>{study.outcome}</p>
            </div>
            <button className="button dark" onClick={() => setSelected(null)}>
              {"Back to projects"}
            </button>
          </motion.div>
        )}
      </dialog>
    </MotionConfig>
  );
}
export default App;
