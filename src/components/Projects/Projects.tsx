import { useState } from "react";
import projectsIcon from "@/assets/icons/Projects.svg";
import travelBlogImg from "@/assets/images/travel-blog.svg";
import chatAppImg from "@/assets/images/chat-app.svg";
import videoPlatformImg from "@/assets/images/video-platform.svg";
import taskManagerImg from "@/assets/images/task-manager.svg";
import "./Projects.scss";

type TagVariant =
  | "vue"
  | "typescript"
  | "firebase"
  | "socket"
  | "scss"
  | "node";

type Project = {
  title: string;
  description: string;
  tags: { label: string; variant: TagVariant }[];
  filterTags: string[];
  url: string;
  image: string;
};

const filters = ["All", "Vue", "TypeScript", "Firebase", "Node.js"];

const projects: Project[] = [
  {
    title: "Travel Blog",
    description:
      "A travel blog built with Vue and TypeScript. Features photo galleries, interactive maps, and Firebase authentication.",
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
    description:
      "Real-time chat application with Vue and Socket.IO. Supports private messaging, group chats, and online status.",
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
    description:
      "Video streaming platform with Vue and TypeScript. Includes video upload, playback controls, and user profiles.",
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
    description:
      "Task management app with Vue and Node.js backend. Features drag-and-drop boards, due dates, and team collaboration.",
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

function ProjectCard({ project }: { project: Project }) {
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
        <p className="project-card__description">{project.description}</p>

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
          &gt; view project
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.filterTags.includes(activeFilter),
        );

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
          <h2 className="projects__heading">Projects</h2>
          <p className="projects__subtitle">// things I&apos;ve built</p>
        </div>
      </header>

      <nav className="projects__filters" aria-label="Filter projects">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`projects__filter${
              activeFilter === filter ? " projects__filter--active" : ""
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </nav>

      <div className="projects__grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <footer className="projects__footer">
        <a
          className="projects__github-link"
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          &gt; see more on GitHub
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
