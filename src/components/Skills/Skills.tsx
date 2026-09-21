import { useTranslation } from "react-i18next";
import "./Skills.scss";
import V from "@/assets/icons/V.svg";
import Stack from "@/assets/icons/Stack.svg";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

type Skill = {
  name: string;
  icon?: string;
  badge?: string;
};

type SkillGroup = {
  id: "frontend" | "frameworks" | "state" | "ui" | "backend" | "build" | "tools";
  wide?: boolean;
  skills: Skill[];
};

const skillGroupData: SkillGroup[] = [
  {
    id: "frontend",
    skills: [
      { name: "TypeScript", icon: `${DEVICON}/typescript/typescript-original.svg` },
      { name: "JavaScript", icon: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "HTML5", icon: `${DEVICON}/html5/html5-original.svg` },
      { name: "SCSS", icon: `${DEVICON}/sass/sass-original.svg` },
    ],
  },
  {
    id: "frameworks",
    skills: [
      { name: "Vue 3", icon: `${DEVICON}/vuejs/vuejs-original.svg` },
      { name: "React 19", icon: `${DEVICON}/react/react-original.svg` },
      { name: "Nuxt", icon: `${DEVICON}/nuxtjs/nuxtjs-original.svg` },
      { name: "Next.js", icon: `${DEVICON}/nextjs/nextjs-original.svg` },
    ],
  },
  {
    id: "state",
    skills: [
      { name: "Pinia", icon: "https://pinia.vuejs.org/logo.svg" },
      { name: "Vuex", icon: "https://vuex.vuejs.org/logo.png" },
      { name: "Zustand", badge: "Z" },
      { name: "MobX", icon: "https://cdn.simpleicons.org/mobx/FF9955" },
    ],
  },
  {
    id: "ui",
    skills: [
      { name: "CSS Modules", icon: `${DEVICON}/css3/css3-original.svg` },
      { name: "Material UI", icon: `${DEVICON}/materialui/materialui-original.svg` },
      { name: "Ant Design", icon: "https://cdn.simpleicons.org/antdesign/0170FE" },
      { name: "BEM", badge: "BEM" },
    ],
  },
  {
    id: "backend",
    wide: true,
    skills: [
      { name: "PHP", icon: `${DEVICON}/php/php-original.svg` },
      { name: "Yii2", icon: "https://cdn.simpleicons.org/yii/40B3D8" },
      { name: "REST API", badge: "API" },
      { name: "Kafka", icon: `${DEVICON}/apachekafka/apachekafka-original.svg` },
      { name: "PostgreSQL", icon: `${DEVICON}/postgresql/postgresql-original.svg` },
    ],
  },
  {
    id: "build",
    skills: [
      { name: "Vite", icon: `${DEVICON}/vitejs/vitejs-original.svg` },
      { name: "Webpack", icon: `${DEVICON}/webpack/webpack-original.svg` },
      { name: "Bun", icon: `${DEVICON}/bun/bun-original.svg` },
      { name: "ESLint", icon: `${DEVICON}/eslint/eslint-original.svg` },
    ],
  },
  {
    id: "tools",
    skills: [
      { name: "Git", icon: `${DEVICON}/git/git-original.svg` },
      { name: "GitLab CI/CD", icon: `${DEVICON}/gitlab/gitlab-original.svg` },
      { name: "Swagger", icon: "https://cdn.simpleicons.org/swagger/85EA2D" },
      { name: "Postman", icon: `${DEVICON}/postman/postman-original.svg` },
      { name: "Figma", icon: `${DEVICON}/figma/figma-original.svg` },
      { name: "Docker", icon: `${DEVICON}/docker/docker-original.svg` },
    ],
  },
];

function SkillCard({ name, icon, badge }: Skill) {
  return (
    <article className="skill-card">
      {icon ? (
        <img className="skill-card__icon" src={icon} alt="" />
      ) : (
        <span className="skill-card__badge">{badge}</span>
      )}
      <span className="skill-card__name">{name}</span>
    </article>
  );
}

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section className="skills" id="skills">
      <header className="skills__header">
        <img className="skills__header-icon" src={Stack} alt="" />
        <div>
          <h2 className="skills__heading">{t("skills.heading")}</h2>
          <p className="skills__subtitle">{t("skills.subtitle")}</p>
        </div>
      </header>

      <div className="skills__groups">
        {skillGroupData.map((group) => (
          <div
            key={group.id}
            className={`skills__group${group.wide ? " skills__group--wide" : ""}`}
          >
            <h3 className="skills__group-title">{t(`skills.groups.${group.id}`)}</h3>
            <div className="skills__track">
              {group.skills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="skills__learning">
        <div className="skills__terminal">
          <p>{t("skills.terminal.line1")}</p>
          <p>{t("skills.terminal.line2")}</p>
          <span className="skills__terminal-cursor">_</span>
        </div>
        <img className="skills__V" src={V} alt="" />
      </div>
    </section>
  );
}
