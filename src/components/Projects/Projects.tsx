import { useState } from "react";
import { useTranslation } from "react-i18next";
import projectsIcon from "@/assets/icons/Projects.svg";
import travelBlogImg from "@/assets/images/travel-blog.svg";
import chatAppImg from "@/assets/images/chat-app.svg";
import videoPlatformImg from "@/assets/images/video-platform.svg";
import taskManagerImg from "@/assets/images/task-manager.svg";
import "./Projects.scss";

type TagVariant = "vue" | "typescript" | "firebase" | "socket" | "scss" | "node";

type StaticProject = {
  title: string;
  image: string;
  tags: { label: string; variant: TagVariant }[];
  filterTags: string[];
  url: string;
};

const FILTER_KEYS = ["All", "Vue", "TypeScript", "Firebase", "Node.js"] as const;

const staticProjects: StaticProject[] = [
  {
    title: "Travel Blog",
    tags: [
      { label: "Vue", variant: "vue" },
      { label: "TS", variant: "typescript" },
      { label: "Firebase", variant: "firebase" },
    ],
    filterTags: ["Vue", "TypeScript", "Firebase"],
    url: "#",
    image: travelBlogImg,
  },
  {
    title: "Chat App",
    tags: [
      { label: "Vue", variant: "vue" },
      { label: "TS", variant: "typescript" },
      { label: "Socket.IO", variant: "socket" },
    ],
    filterTags: ["Vue", "TypeScript"],
    url: "#",
    image: chatAppImg,
  },
  {
    title: "Video Platform",
    tags: [
      { label: "Vue", variant: "vue" },
      { label: "TS", variant: "typescript" },
      { label: "SCSS", variant: "scss" },
    ],
    filterTags: ["Vue", "TypeScript"],
    url: "#",
    image: videoPlatformImg,
  },
  {
    title: "Task Manager",
    tags: [
      { label: "Vue", variant: "vue" },
      { label: "TS", variant: "typescript" },
      { label: "Node.js", variant: "node" },
    ],
    filterTags: ["Vue", "TypeScript", "Node.js"],
    url: "#",
    image: taskManagerImg,
  },
];

function ProjectCard({
  project,
  description,
  viewLabel,
}: {
  project: StaticProject;
  description: string;
  viewLabel: string;
}) {
  return (
    <article className="project-card">
      <div className="project-card__image-wrap">
        <img
          className="project-card__image"
          src={project.image}
          alt={`${project.title} preview`}
        />
      </div>

      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
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

        <a className="project-card__link" href={project.url}>
          {viewLabel}
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("All");

  const descriptions = t("projects.descriptions", { returnObjects: true }) as string[];
  const viewLabel = t("projects.viewProject");

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
        {filteredProjects.map((project) => {
          const originalIndex = staticProjects.indexOf(project);
          return (
            <ProjectCard
              key={project.title}
              project={project}
              description={descriptions[originalIndex] ?? ""}
              viewLabel={viewLabel}
            />
          );
        })}
      </div>

      <footer className="projects__footer">
        <a
          className="projects__github-link"
          href="https://github.com"
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
