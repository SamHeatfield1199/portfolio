import { useState } from "react";
import { useTranslation } from "react-i18next";
import projectsIcon from "@/assets/icons/Projects.svg";
import goTudaImg from "@/assets/images/go-tuda.png";
import chatAppImg from "@/assets/images/chat-app.svg";
import cutieBoardImg from "@/assets/images/cutieboard.png";
import btsFanSiteImg from "@/assets/images/bts-fan-site.png";
import "./Projects.scss";

type TagVariant =
  | "react"
  | "typescript"
  | "next"
  | "vite"
  | "mobx";

type StaticProject = {
  id: "tudaSuda" | "chatWidget" | "cutieBoard" | "btsFanSite";
  image: string;
  imageKind: "screenshot" | "illustration";
  tags: { label: string; variant: TagVariant }[];
  filterTags: string[];
  githubUrl: string;
  demoUrl?: string;
  inDevelopment?: boolean;
};

const FILTER_KEYS = ["All", "React", "TypeScript", "Next.js"] as const;

const staticProjects: StaticProject[] = [
  {
    id: "tudaSuda",
    tags: [
      { label: "Next.js", variant: "next" },
      { label: "React", variant: "react" },
      { label: "TS", variant: "typescript" },
    ],
    filterTags: ["React", "TypeScript", "Next.js"],
    githubUrl: "https://github.com/SamHeatfield1199/tuda_suda",
    demoUrl: "https://tuda-suda-ten.vercel.app/",
    image: goTudaImg,
    imageKind: "screenshot",
  },
  {
    id: "chatWidget",
    tags: [
      { label: "React", variant: "react" },
      { label: "TS", variant: "typescript" },
      { label: "Vite", variant: "vite" },
    ],
    filterTags: ["React", "TypeScript"],
    githubUrl: "https://github.com/SamHeatfield1199/chat-widget",
    image: chatAppImg,
    imageKind: "illustration",
  },
  {
    id: "cutieBoard",
    tags: [
      { label: "React", variant: "react" },
      { label: "TS", variant: "typescript" },
      { label: "MobX", variant: "mobx" },
    ],
    filterTags: ["React", "TypeScript"],
    githubUrl: "https://github.com/SamHeatfield1199/cutieBoard",
    demoUrl: "https://samheatfield1199.github.io/cutieBoard/",
    image: cutieBoardImg,
    imageKind: "screenshot",
  },
  {
    id: "btsFanSite",
    tags: [
      { label: "Next.js", variant: "next" },
      { label: "React", variant: "react" },
      { label: "TS", variant: "typescript" },
    ],
    filterTags: ["React", "TypeScript", "Next.js"],
    githubUrl: "https://github.com/SamHeatfield1199/bts-fan-site",
    image: btsFanSiteImg,
    imageKind: "screenshot",
    inDevelopment: true,
  },
];

function ProjectCard({
  project,
  title,
  description,
  githubLabel,
  demoLabel,
  inDevelopmentLabel,
}: {
  project: StaticProject;
  title: string;
  description: string;
  githubLabel: string;
  demoLabel: string;
  inDevelopmentLabel: string;
}) {
  return (
    <article className="project-card">
      <div
        className={`project-card__image-wrap${
          project.imageKind === "screenshot"
            ? " project-card__image-wrap--screenshot"
            : ""
        }`}
      >
        <img
          className={`project-card__image${
            project.imageKind === "illustration"
              ? " project-card__image--illustration"
              : ""
          }`}
          src={project.image}
          alt={`${title} preview`}
        />
        {project.inDevelopment && (
          <span className="project-card__banner">{inDevelopmentLabel}</span>
        )}
      </div>

      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>

        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span
              key={tag.label}
              className={`project-card__tag project-card__tag--${tag.variant}`}
            >
              {tag.label}
            </span>
          ))}
        </div>

        <div className="project-card__links">
          <a
            className="project-card__link"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {githubLabel}
          </a>
          {project.demoUrl && (
            <a
              className="project-card__link"
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {demoLabel}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? staticProjects
      : staticProjects.filter((p) => p.filterTags.includes(activeFilter));

  return (
    <section id="projects" className="projects">
      <header className="projects__header">
        <img
          className="projects__header-icon"
          src={projectsIcon}
          alt=""
          aria-hidden="true"
        />
        <div>
          <h2 className="projects__heading">{t("projects.heading")}</h2>
          <p className="projects__subtitle">{t("projects.subtitle")}</p>
        </div>
      </header>

      <nav className="projects__filters" aria-label="Filter projects">
        {FILTER_KEYS.map((key) => (
          <button
            key={key}
            type="button"
            className={`projects__filter${
              activeFilter === key ? " projects__filter--active" : ""
            }`}
            onClick={() => setActiveFilter(key)}
          >
            {key === "All" ? t("projects.filterAll") : key}
          </button>
        ))}
      </nav>

      <div className="projects__grid">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            title={t(`projects.items.${project.id}.title`)}
            description={t(`projects.items.${project.id}.description`)}
            githubLabel={t("projects.githubLink")}
            demoLabel={t("projects.demoLink")}
            inDevelopmentLabel={t("projects.inDevelopment")}
          />
        ))}
      </div>

      <footer className="projects__footer">
        <a
          className="projects__github-link"
          href="https://github.com/SamHeatfield1199"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("projects.github")}
          <img
            className="projects__github-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            alt=""
            aria-hidden="true"
          />
        </a>
      </footer>
    </section>
  );
}
