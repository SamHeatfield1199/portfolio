import heroImage from "@/assets/images/hero.png";
import "./Hero.scss";
import Button from "../Button/Button";

const decorations = [
  { text: "<>", top: "10%", left: "6%", duration: "8s" },
  { text: "{}", top: "24%", left: "32%", duration: "11s", delay: "1.5s" },
  { text: "</>", top: "68%", left: "12%", duration: "9s", delay: ".7s" },

  { text: "TS", top: "16%", left: "55%", duration: "12s" },
  { text: "Vue", top: "58%", left: "48%", duration: "10s", delay: "2s" },
  { text: "React", top: "42%", left: "72%", duration: "8.5s" },

  {
    text: "npm run dev",
    top: "8%",
    left: "44%",
    duration: "14s",
    delay: "2.5s",
  },
  {
    text: "git commit",
    top: "78%",
    left: "32%",
    duration: "12s",
    delay: ".5s",
  },
  { text: "pnpm build", top: "36%", left: "82%", duration: "15s", delay: "3s" },

  { text: "interface", top: "18%", left: "22%", duration: "13s", delay: ".8s" },
  { text: "props", top: "72%", left: "78%", duration: "10s", delay: "2.2s" },
  {
    text: "useState()",
    top: "30%",
    left: "64%",
    duration: "9s",
    delay: "1.4s",
  },

  { text: "✦", top: "76%", left: "60%", duration: "13s", delay: "3s" },
  { text: "◇", top: "12%", left: "84%", duration: "9.5s" },
  { text: "+", top: "54%", left: "88%", duration: "11.5s", delay: "1s" },
];

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero__background">
          {decorations.map((item, index) => (
            <span
              key={index}
              className="hero__decoration"
              style={
                {
                  "--top": item.top,
                  "--left": item.left,
                  "--duration": item.duration,
                  "--delay": item.delay,
                } as React.CSSProperties
              }
            >
              {item.text}
            </span>
          ))}
        </div>
        <div className="hero__content">
          <h3 className="hero__hero">Hello!</h3>
          <h3 className="hero__title">I’m Anastasia ▌</h3>
          <h4 className="hero__subtitle">Frontend Developer</h4>
          <p className="hero__description">
            I build clean and efficient web applications.
          </p>
          <Button text="View My Work" />
        </div>
        <div className="hero__image-wrap">
          <img src={heroImage} alt="Hero" className="hero__image" />
        </div>
      </div>
      <div className="hero__code-strip">
        <pre>
          {`> const developer = {
    code:    'Typescript',
    passion: 'creating things',
    focus:   'frontend'
};`}
        </pre>
        <span className="hero__status">
          <span className="hero__status-dot" />
          Available for work &gt;
        </span>
      </div>
    </>
  );
}
