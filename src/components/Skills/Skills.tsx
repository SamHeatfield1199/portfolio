import "./Skills.scss";
import V from "@/assets/icons/V.svg";
import Stack from "@/assets/icons/stack.svg";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      {
        name: "Vue.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "Pinia",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pinia/pinia-original.svg",
      },
      {
        name: "Sass",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
      },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      },
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      },
      {
        name: "Vite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      },
    ],
  },
];

function SkillCard({ name, icon }: { name: string; icon: string }) {
  return (
    <article className="skill-card">
      <img className="skill-card__icon" src={icon} alt={`${name} icon`} />

      <span className="skill-card__name">{name}</span>
    </article>
  );
}

function SkillsRow({
  title,
  skills,
}: {
  title: string;
  skills: { name: string; icon: string }[];
}) {
  return (
    <div className="skills__group">
      <h3 className="skills__group-title">{title}</h3>

      <div className="skills__slider">
        <div className="skills__track">
          {skills.map(
            (skill: { name: string; icon: string }, index: number) => (
              <SkillCard key={`${skill.name}-${index}`} {...skill} />
            ),
          )}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="skills">
      <header className="skills__header">
        <img className="skills__header-icon" src={Stack} alt="" />
        <div>
          <h2 className="skills__heading">Skills</h2>
          <p className="skills__subtitle">// my toolkit</p>
        </div>
      </header>

      <div className="skills__groups">
        {skillGroups.map((group) => (
          <SkillsRow key={group.title} {...group} />
        ))}
      </div>

      <div className="skills__learning">
        <div className="skills__terminal">
          <p>&gt; Always learning...</p>
          <p>
            &gt; Currently exploring new technologies and &nbsp;&nbsp;improving
            my skills every day.
          </p>
          <span className="skills__terminal-cursor">_</span>
        </div>
        <img className="skills__V" src={V} alt="" />
      </div>
    </section>
  );
}
