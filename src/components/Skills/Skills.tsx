import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { FocusEvent } from "react";
import { useTranslation } from "react-i18next";
import "./Skills.scss";
import Stack from "@/assets/icons/Stack.svg";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import SkillCard from "./SkillCard";
import type { Skill } from "./SkillCard";
import SkillCarousel from "./SkillCarousel/SkillCarousel";
import SkillTerminal from "./SkillTerminal";

const COMPACT_SKILLS_QUERY = "(width <= 768px)";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const LOBE = "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons";

type SkillGroup = {
  id: "frontend" | "frameworks" | "state" | "ui" | "backend" | "build" | "tools" | "ai";
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
    skills: [
      { id: "php", name: "PHP", icon: `${DEVICON}/php/php-original.svg` },
      { id: "yii2", name: "Yii2", icon: "https://cdn.simpleicons.org/yii/40B3D8" },
      { id: "restApi", name: "REST API", badge: "API" },
      { id: "kafka", name: "Kafka", icon: `${DEVICON}/apachekafka/apachekafka-original.svg` },
      { id: "postgresql", name: "PostgreSQL", icon: `${DEVICON}/postgresql/postgresql-original.svg` },
    ],
  },
  {
    id: "ai",
    skills: [
      { id: "codex", name: "Codex", icon: `${LOBE}/openai.svg` },
      { id: "copilot", name: "Copilot", icon: `${LOBE}/githubcopilot.svg` },
      { id: "cursor", name: "Cursor", icon: `${LOBE}/cursor.svg` },
      { id: "zai", name: "Z.ai", icon: `${LOBE}/zai.svg` },
      { id: "opencode", name: "OpenCode", icon: `${LOBE}/opencode.svg` },
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

const allSkills = skillGroupData.flatMap((group) => group.skills);

type SkillGroupBodyProps = {
  skills: Skill[];
  activeId: string | null;
  pinnedId: string | null;
  label: string;
  engaged: boolean;
  onHover: (id: string) => void;
  onFocus: (id: string) => void;
  onBlur: (event: FocusEvent<HTMLButtonElement>) => void;
  onToggle: (id: string) => void;
  onCarouselSelect: (id: string) => void;
  onLeave: () => void;
};

// Если карточки не помещаются в один ряд, группа становится каруселью.
function SkillGroupBody({
  skills,
  activeId,
  pinnedId,
  label,
  engaged,
  onHover,
  onFocus,
  onBlur,
  onToggle,
  onCarouselSelect,
  onLeave,
}: SkillGroupBodyProps) {
  const fitRef                  = useRef<HTMLDivElement>(null);
  const [overflow, setOverflow] = useState(false);

  useLayoutEffect(() => {
    const fit = fitRef.current;

    if (!fit) return;

    const check = () => {
      if (fit.clientWidth <= 0) return;

      setOverflow(fit.scrollWidth - fit.clientWidth > 1);
    };

    check();

    const observer = new ResizeObserver(check);

    observer.observe(fit);

    for (const child of fit.children) observer.observe(child);

    return () => observer.disconnect();
  }, [skills]);

  return (
    <div className={`skills__body${engaged ? " is-engaged" : ""}`}>
      <div className="skills__fit" ref={fitRef} aria-hidden="true">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            {...skill}
            active={false}
            pinned={false}
            tabIndex={-1}
            onHover={() => undefined}
            onFocus={() => undefined}
            onBlur={() => undefined}
            onToggle={() => undefined}
          />
        ))}
      </div>
      {overflow ? (
        <SkillCarousel
          className="skill-carousel--inline"
          skills={skills}
          activeId={activeId}
          pinnedId={pinnedId}
          label={label}
          onHover={onHover}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onCarouselSelect}
          onLeave={onLeave}
        />
      ) : (
        <div className="skills__track" onMouseLeave={onLeave}>
          {skills.map((skill) => (
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
      )}
    </div>
  );
}

// Основной компонент Skills
export default function Skills() {
  const { t } = useTranslation();
  const isCompact = useMediaQuery(COMPACT_SKILLS_QUERY);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const [pinnedId, setPinnedId] = useState<string | null>(null);

  const activeId    = pinnedId ?? focusedId ?? hoveredId;
  const activeSkill = activeId ? skillsById.get(activeId) ?? null : null;
  const prompt = activeSkill
    ? `> ${activeSkill.name.toLowerCase()} — ${t(`skills.notes.${activeSkill.id}`)}`
    : null;

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

  return (
    <section className="skills" id="skills">
      <header className="skills__header">
        <img className="skills__header-icon" src={Stack} alt="" />
        <div>
          <h2 className="skills__heading">{t("skills.heading")}</h2>
          <p className="skills__subtitle">{t("skills.subtitle")}</p>
        </div>
      </header>

      {isCompact ? (
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
      ) : (
        <div className="skills__groups">
          {skillGroupData.map((group) => {
            const engaged = group.skills.some((skill) => skill.id === activeId);

            return (
              <div
                key={group.id}
                className={`skills__group${group.wide ? " skills__group--wide" : ""}`}
              >
                <h3 className="skills__group-title">{t(`skills.groups.${group.id}`)}</h3>
                <SkillGroupBody
                  skills={group.skills}
                  activeId={activeId}
                  pinnedId={pinnedId}
                  label={t(`skills.groups.${group.id}`)}
                  engaged={engaged}
                  onHover={onHover}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onToggle={onToggle}
                  onCarouselSelect={onCarouselSelect}
                  onLeave={() => setHoveredId(null)}
                />
              </div>
            );
          })}
        </div>
      )}

      <SkillTerminal
        prompt={prompt}
        line1={t("skills.terminal.line1")}
        line2={t("skills.terminal.line2")}
      />
    </section>
  );
}
