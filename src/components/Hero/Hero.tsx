import { useTranslation } from 'react-i18next';
import heroImage from "@/assets/images/hero.png";
import "./Hero.scss";
import Button from "../Button/Button";

const decorations = [
  { id: "bracket-open", text: "<>", top: "10%", left: "6%", duration: "8s" },
  { id: "curly", text: "{}", top: "24%", left: "32%", duration: "11s", delay: "1.5s" },
  { id: "bracket-close", text: "</>", top: "68%", left: "12%", duration: "9s", delay: ".7s" },

  { id: "ts", text: "TS", top: "16%", left: "55%", duration: "12s" },
  { id: "vue", text: "Vue", top: "58%", left: "48%", duration: "10s", delay: "2s" },
  { id: "react", text: "React", top: "42%", left: "72%", duration: "8.5s" },

  { id: "npm-run-dev", text: "npm run dev", top: "8%", left: "44%", duration: "14s", delay: "2.5s" },
  { id: "git-commit", text: "git commit", top: "78%", left: "32%", duration: "12s", delay: ".5s" },
  { id: "pnpm-build", text: "pnpm build", top: "36%", left: "82%", duration: "15s", delay: "3s" },

  { id: "interface", text: "interface", top: "18%", left: "22%", duration: "13s", delay: ".8s" },
  { id: "props", text: "props", top: "72%", left: "78%", duration: "10s", delay: "2.2s" },
  { id: "use-state", text: "useState()", top: "30%", left: "64%", duration: "9s", delay: "1.4s" },

  { id: "star", text: "✦", top: "76%", left: "60%", duration: "13s", delay: "3s" },
  { id: "diamond", text: "◇", top: "12%", left: "84%", duration: "9.5s" },
  { id: "plus", text: "+", top: "54%", left: "88%", duration: "11.5s", delay: "1s" },
];

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero-screen" id="home">
      <div className="hero">
        <div className="hero__background">
          {decorations.map((item) => (
            <span
              key={item.id}
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
          <h3 className="hero__hero">{t('hero.greeting')}</h3>
          <h3 className="hero__title">{t('hero.title')}</h3>
          <h4 className="hero__subtitle">{t('hero.subtitle')}</h4>
          <p className="hero__description">{t('hero.description')}</p>
          <Button text={t('hero.button')} href="#projects" />
        </div>
        <div className="hero__image-wrap">
          <img src={heroImage} alt="" className="hero__image" />
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
        <span className="hero-status">
          <span className="hero-status__row">
            <span className="hero-status-dot" />
            {t('hero.available')} &gt;
          </span>
          <span className="hero-status__tz">{t('hero.timezone')}</span>
        </span>
      </div>
    </section>
  );
}
