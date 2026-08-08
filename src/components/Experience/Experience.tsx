import { useTranslation } from 'react-i18next';
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

const detailIcons = [cartIcon, usersIcon, methodologyIcon, environmentIcon];

const achievementIcons = [
  rocketIcon,
  cartIcon,
  performanceIcon,
  codeStyleIcon,
  usersIcon,
  stabilityIcon,
];

const techStackGroups = [
  {
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
    items: [
      {
        name: "SCSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
      },
    ],
  },
  {
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
  const { t } = useTranslation();

  const details = t('experience.details', { returnObjects: true }) as { label: string; value: string }[];
  const responsibilities = t('experience.responsibilities.items', { returnObjects: true }) as string[];
  const achievements = t('experience.achievements.items', { returnObjects: true }) as { title: string; subtitle: string }[];
  const stackGroupTitles = t('experience.techstack.groups', { returnObjects: true }) as string[];

  const companyDetails = details.map((item, i) => ({ ...item, icon: detailIcons[i] }));
  const achievementCards = achievements.map((item, i) => ({ ...item, icon: achievementIcons[i] }));
  const localizedStackGroups = techStackGroups.map((group, i) => ({ ...group, title: stackGroupTitles[i] ?? '' }));

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
          <h2 className="experience__heading">{t('experience.heading')}</h2>
          <p className="experience__subtitle">{t('experience.subtitle')}</p>
        </div>
      </header>

      <div className="experience__hero">
        <div className="experience__intro">
          <p className="experience__description">{t('experience.description')}</p>

          <article className="experience__company">
            <div className="experience__company-top">
              <div className="experience__company-icon" aria-hidden="true">
                DNS
              </div>

              <div className="experience__company-content">
                <h3 className="experience__company-title">DNS</h3>
                <p className="experience__company-role">{t('experience.company.role')}</p>

                <div className="experience__company-badges">
                  <span className="experience__company-badge">
                    <img
                      className="experience__company-badge-icon"
                      src={calendarIcon}
                      alt=""
                      aria-hidden="true"
                    />
                    {t('experience.company.duration')}
                  </span>
                  <span className="experience__company-badge">{t('experience.company.employment')}</span>
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
                    <p className="experience__company-detail-label">{item.label}</p>
                    <p className="experience__company-detail-value">{item.value}</p>
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
                {t('experience.responsibilities.title')}
              </h3>
              <p className="experience__block-subtitle">{t('experience.responsibilities.subtitle')}</p>
            </div>
          </header>

          <ul className="experience__list">
            {responsibilities.map((item, i) => (
              <li key={i} className="experience__list-item">
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
                {t('experience.achievements.title')}
              </h3>
              <p className="experience__block-subtitle">{t('experience.achievements.subtitle')}</p>
            </div>
          </header>

          <div className="experience__achievements">
            {achievementCards.map((item, i) => (
              <div key={i} className="experience__achievement-card">
                <img
                  className="experience__achievement-icon"
                  src={item.icon}
                  alt=""
                  aria-hidden="true"
                />
                <p className="experience__achievement-title">{item.title}</p>
                <p className="experience__achievement-subtitle">{item.subtitle}</p>
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
                {t('experience.techstack.title')}
              </h3>
              <p className="experience__block-subtitle">{t('experience.techstack.subtitle')}</p>
            </div>
          </header>

          <div className="experience__stack">
            {localizedStackGroups.map((group) => (
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
