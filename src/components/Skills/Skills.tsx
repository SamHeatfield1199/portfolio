import { useEffect, useState } from "react";
import type { FocusEvent } from "react";
import { useTranslation } from "react-i18next";
import "./Skills.scss";
import { CHARACTER_SRC } from "@/assets/character";
import Stack from "@/assets/icons/Stack.svg";
import SkillCard from "./SkillCard";
import type { Skill } from "./SkillCard";
import SkillCarousel from "./SkillCarousel/SkillCarousel";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

type SkillGroup = {
  id: "frontend" | "frameworks" | "state" | "ui" | "backend" | "build" | "tools";
  wide?: boolean;
  skills: Skill[];
};

const skillGroupData: SkillGroup[] = [
  {
    id: "frontend",
    skills: [
      { id: "typescript", name: "TypeScript", icon: `${DEVICON}/typescript/typescript-original.svg` },
      { id: "javascript", name: "JavaScript", icon: `${DEVICON}/javascript/javascript-original.svg` },
      { id: "html5", name: "HTML5", icon: `${DEVICON}/html5/html5-original.svg` },
      { id: "scss", name: "SCSS", icon: `${DEVICON}/sass/sass-original.svg` },
    ],
  },
  {
    id: "frameworks",
    skills: [
      { id: "vue3", name: "Vue 3", icon: `${DEVICON}/vuejs/vuejs-original.svg` },
      { id: "react", name: "React 19", icon: `${DEVICON}/react/react-original.svg` },
      { id: "nuxt", name: "Nuxt", icon: `${DEVICON}/nuxtjs/nuxtjs-original.svg` },
      { id: "nextjs", name: "Next.js", icon: `${DEVICON}/nextjs/nextjs-original.svg` },
    ],
  },
  {
    id: "state",
    skills: [
      { id: "pinia", name: "Pinia", icon: "https://pinia.vuejs.org/logo.svg" },
      { id: "vuex", name: "Vuex", icon: "https://vuex.vuejs.org/logo.png" },
      { id: "zustand", name: "Zustand", badge: "Z" },
      { id: "mobx", name: "MobX", icon: "https://cdn.simpleicons.org/mobx/FF9955" },
    ],
  },
  {
    id: "ui",
    skills: [
      { id: "cssModules", name: "CSS Modules", icon: `${DEVICON}/css3/css3-original.svg` },
      { id: "materialUi", name: "Material UI", icon: `${DEVICON}/materialui/materialui-original.svg` },
      { id: "antDesign", name: "Ant Design", icon: "https://cdn.simpleicons.org/antdesign/0170FE" },
      { id: "bem", name: "BEM", badge: "BEM" },
    ],
  },
  {
    id: "backend",
    wide: true,
    skills: [
      { id: "php", name: "PHP", icon: `${DEVICON}/php/php-original.svg` },
      { id: "yii2", name: "Yii2", icon: "https://cdn.simpleicons.org/yii/40B3D8" },
      { id: "restApi", name: "REST API", badge: "API" },
      { id: "kafka", name: "Kafka", icon: `${DEVICON}/apachekafka/apachekafka-original.svg` },
      { id: "postgresql", name: "PostgreSQL", icon: `${DEVICON}/postgresql/postgresql-original.svg` },
    ],
  },
  {
    id: "build",
    skills: [
      { id: "vite", name: "Vite", icon: `${DEVICON}/vitejs/vitejs-original.svg` },
      { id: "webpack", name: "Webpack", icon: `${DEVICON}/webpack/webpack-original.svg` },
      { id: "bun", name: "Bun", icon: `${DEVICON}/bun/bun-original.svg` },
      { id: "eslint", name: "ESLint", icon: `${DEVICON}/eslint/eslint-original.svg` },
    ],
  },
  {
    id: "tools",
    skills: [
      { id: "git", name: "Git", icon: `${DEVICON}/git/git-original.svg` },
      { id: "gitlab", name: "GitLab CI/CD", icon: `${DEVICON}/gitlab/gitlab-original.svg` },
      { id: "swagger", name: "Swagger", icon: "https://cdn.simpleicons.org/swagger/85EA2D" },
      { id: "postman", name: "Postman", icon: `${DEVICON}/postman/postman-original.svg` },
      { id: "figma", name: "Figma", icon: `${DEVICON}/figma/figma-original.svg` },
      { id: "docker", name: "Docker", icon: `${DEVICON}/docker/docker-original.svg` },
    ],
  },
];

const skillsById = new Map(
  skillGroupData.flatMap((group) => group.skills.map((skill) => [skill.id, skill])),
);

// Функция для проверки возможности взаимодействия с карточкой
function pointerCanHover() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

// Хук для анимации текста
function useTypewriter(text: string | null) {
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (!text) {
      setOutput("");

      return;
    }

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) {
      setOutput(text);

      return;
    }

    setOutput("");
    let index = 0;

    const timer = window.setInterval(() => {
      index += 1;
      setOutput(text.slice(0, index));

      if (index >= text.length) window.clearInterval(timer);
    }, 18);

    return () => window.clearInterval(timer);
  }, [text]);

  return output;
}

const allSkills = skillGroupData.flatMap((group) => group.skills);

export default function Skills() {
  const { t } = useTranslation();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const [pinnedId, setPinnedId] = useState<string | null>(null);

  const activeId    = pinnedId ?? focusedId ?? hoveredId;
  const activeSkill = activeId ? skillsById.get(activeId) ?? null : null;
  const prompt      = activeSkill
    ? `> ${activeSkill.name.toLowerCase()} — ${t(`skills.notes.${activeSkill.id}`)}`
    : null;
  const typedPrompt = useTypewriter(prompt);

  useEffect(() => {
    if (!pinnedId) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target;

      if (!(target instanceof Element) || target.closest(".skill-card")) return;

      setPinnedId(null);
      setFocusedId(null);
    };

    document.addEventListener("pointerdown", onPointerDown);

    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [pinnedId]);

  const onHover = (id: string) => {
    if (!pointerCanHover()) return;

    setHoveredId(id);
  };

  const onFocus = (id: string) => {
    const card = document.activeElement;

    if (card instanceof HTMLElement && card.matches(":focus-visible")) {
      setFocusedId(id);
    }
  };

  const onBlur = (event: FocusEvent<HTMLButtonElement>) => {
    const next = event.relatedTarget;

    if (next instanceof Element && next.classList.contains("skill-card")) return;

    setFocusedId(null);
  };

  const onToggle = (id: string) => {
    if (pointerCanHover()) return;

    setFocusedId(null);
    setPinnedId((current) => (current === id ? null : id));
  };

  const onCarouselSelect = (id: string) => {
    setFocusedId(null);
    setPinnedId((current) => (current === id ? null : id));
  };

  const idleLine = `${t("skills.terminal.line1")} ${t("skills.terminal.line2")}`;

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
        {skillGroupData.map((group) => {
          const engaged = group.skills.some((skill) => skill.id === activeId);

          return (
            <div
              key={group.id}
              className={`skills__group${group.wide ? " skills__group--wide" : ""}`}
            >
              <h3 className="skills__group-title">{t(`skills.groups.${group.id}`)}</h3>
              <div
                className={`skills__track${engaged ? " is-engaged" : ""}`}
                onMouseLeave={() => setHoveredId(null)}
              >
                {group.skills.map((skill) => (
                  <SkillCard
                    key={skill.id}
                    {...skill}
                    active={skill.id === activeId}
                    pinned={skill.id === pinnedId}
                    onHover={onHover}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onToggle={onToggle}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <SkillCarousel
        skills={allSkills}
        activeId={activeId}
        pinnedId={pinnedId}
        label={t("skills.heading")}
        onHover={onHover}
        onFocus={onFocus}
        onBlur={onBlur}
        onSelect={onCarouselSelect}
        onLeave={() => setHoveredId(null)}
      />

      <div className="skills__learning">
        <div className="skills__terminal">
          {prompt ? (
            <p>{typedPrompt}</p>
          ) : (
            <>
              <p>{t("skills.terminal.line1")}</p>
              <p>{t("skills.terminal.line2")}</p>
            </>
          )}
          <p className="skills__terminal-live" aria-live="polite">
            {prompt ?? idleLine}
          </p>
          <span className="skills__terminal-cursor" aria-hidden="true">_</span>
          <img className="skills__V" src={CHARACTER_SRC} alt="" />
        </div>
      </div>
    </section>
  );
}
