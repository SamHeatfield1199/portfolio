import aboutIcon from "@/assets/icons/about.svg";
import calendarIcon from "@/assets/icons/calendar.svg";
import cartIcon from "@/assets/icons/cart.svg";
import codeStyleIcon from "@/assets/icons/codeStyle.svg";
import environmentIcon from "@/assets/icons/environment.svg";
import methodologyIcon from "@/assets/icons/methodology.svg";
import performanceIcon from "@/assets/icons/performance.svg";
import projectsIcon from "@/assets/icons/Projects.svg";
import rocketIcon from "@/assets/icons/rocket.svg";
import stabilityIcon from "@/assets/icons/stability.svg";
import trophyIcon from "@/assets/icons/trophy.svg";
import usersIcon from "@/assets/icons/users.svg";
import experienceImage from "@/assets/images/experience.png";
import "./Experience.scss";

const companyDetails = [
  {
    label: "Industry",
    value: "E-commerce",
    icon: cartIcon,
  },
  {
    label: "Team",
    value: "8 developers",
    icon: usersIcon,
  },
  {
    label: "Methodology",
    value: "Agile / Scrum",
    icon: methodologyIcon,
  },
  {
    label: "Environment",
    value: "Production",
    icon: environmentIcon,
  },
];

const responsibilities = [
  "Developed and maintained key features for the cart and checkout flow.",
  "Implemented new functionality and improved existing features.",
  "Collaborated with designers, backend developers, and QA.",
  "Participated in code reviews and contributed to team improvements.",
  "Improved performance, fixed bugs, and worked with legacy code.",
  "Refactored modules and improved code quality.",
];

const achievements = [
  {
    title: "100+",
    subtitle: "Features shipped to production",
    icon: rocketIcon,
  },
  {
    title: "Core features",
    subtitle: "Cart, Checkout, Payments, Orders",
    icon: cartIcon,
  },
  {
    title: "Performance",
    subtitle: "Improved page load time and UX",
    icon: performanceIcon,
  },
  {
    title: "Code Quality",
    subtitle: "Code reviews, refactoring and best practices",
    icon: codeStyleIcon,
  },
  {
    title: "Team Collaboration",
    subtitle: "Knowledge sharing and cross-functional work",
    icon: usersIcon,
  },
  {
    title: "Stability",
    subtitle: "Bug fixing and user experience improvements",
    icon: stabilityIcon,
  },
];

const techStackGroups = [
  {
    title: "Languages",
    items: [
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      {
        name: "Vue 3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
      },
      {
        name: "Pinia",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pinia/pinia-original.svg",
      },
      {
        name: "Vue Router",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
      },
    ],
  },
  {
    title: "Styling",
    items: [
      {
        name: "SCSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
      },
    ],
  },
  {
    title: "Build & Tools",
    items: [
      {
        name: "Webpack",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg",
      },
      {
        name: "Vite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      },
      {
        name: "ESLint",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg",
      },
      {
        name: "Prettier",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prettier/prettier-original.svg",
      },
    ],
  },
];

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <header className="experience__header">
        <img
          className="experience__icon-header"
          src={aboutIcon}
          alt=""
          aria-hidden="true"
        />
        <div>
          <h2 className="experience__heading">Experience</h2>
          <p className="experience__subtitle">// commercial experience</p>
        </div>
      </header>

      <div className="experience__hero">
        <div className="experience__intro">
          <p className="experience__description">
            4 years of building user-friendly web interfaces and working in a
            product team on one of Russia&apos;s largest e-commerce platforms.
          </p>

          <article className="experience__company">
            <div className="experience__company-top">
              <div className="experience__company-icon" aria-hidden="true">
                DNS
              </div>

              <div className="experience__company-content">
                <h3 className="experience__company-title">DNS</h3>
                <p className="experience__company-role">Frontend Developer</p>

                <div className="experience__company-badges">
                  <span className="experience__company-badge">
                    <img
                      className="experience__company-badge-icon"
                      src={calendarIcon}
                      alt=""
                      aria-hidden="true"
                    />
                    2021 – Present (4 years)
                  </span>
                  <span className="experience__company-badge">Full-time</span>
                </div>
              </div>
            </div>

            <div className="experience__company-divider" aria-hidden="true" />

            <div className="experience__company-details">
              {companyDetails.map((item) => (
                <div key={item.label} className="experience__company-detail">
                  <img
                    className="experience__company-detail-icon"
                    src={item.icon}
                    alt=""
                    aria-hidden="true"
                  />
                  <div>
                    <p className="experience__company-detail-label">
                      {item.label}
                    </p>
                    <p className="experience__company-detail-value">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

  
          </article>
        </div>

        <div className="experience__image-wrap">
          <img
            src={experienceImage}
            alt="Workspace and e-commerce project illustration"
            className="experience__image"
          />
        </div>
      </div>

      <div className="experience__details">
        <article className="experience__block">
          <header className="experience__block-header">
            <img
              className="experience__icon"
              src={projectsIcon}
              alt=""
              aria-hidden="true"
            />
            <div>
              <h3 className="experience__block-title experience__block-title--plain">
                Responsibilities
              </h3>
              <p className="experience__block-subtitle">// what I do</p>
            </div>
          </header>

          <ul className="experience__list">
            {responsibilities.map((item) => (
              <li key={item} className="experience__list-item">
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="experience__block">
          <header className="experience__block-header">
            <img
              className="experience__icon"
              src={trophyIcon}
              alt=""
              aria-hidden="true"
            />
            <div>
              <h3 className="experience__block-title experience__block-title--plain">
                Achievements
              </h3>
              <p className="experience__block-subtitle">// results that matter</p>
            </div>
          </header>

          <div className="experience__achievements">
            {achievements.map((item) => (
              <div key={item.title} className="experience__achievement-card">
                <img
                  className="experience__achievement-icon"
                  src={item.icon}
                  alt=""
                  aria-hidden="true"
                />
                <p className="experience__achievement-title">{item.title}</p>
                <p className="experience__achievement-subtitle">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article className="experience__block">
          <header className="experience__block-header">
            <img
              className="experience__icon"
              src={codeStyleIcon}
              alt=""
              aria-hidden="true"
            />
            <div>
              <h3 className="experience__block-title experience__block-title--plain">
                Tech stack
              </h3>
              <p className="experience__block-subtitle">// tools & technologies</p>
            </div>
          </header>

          <div className="experience__stack">
            {techStackGroups.map((group) => (
              <div key={group.title} className="experience__stack-group">
                <p className="experience__stack-group-title">{group.title}</p>
                <div className="experience__stack-items">
                  {group.items.map((item) => (
                    <span key={item.name} className="experience__stack-item">
                      <img
                        className="experience__stack-item-icon"
                        src={item.icon}
                        alt=""
                        aria-hidden="true"
                      />
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
