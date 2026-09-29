import { useTranslation } from "react-i18next";
import "./Hero.scss";

export default function CodeStrip() {
  const { t } = useTranslation();

  return (
    <div className="hero__code-strip">
      <pre>
        {`> const developer = {
    code:    'Typescript',
    passion: 'creating things',
    focus:   'frontend'
};`}
      </pre>
      <span className="hero-status">
        <a className="hero-status__row" href="#contact">
          <span className="hero-status-dot" aria-hidden="true" />
          {t("hero.available")} &gt;
        </a>
        <span className="hero-status__tz">{t("hero.timezone")}</span>
      </span>
    </div>
  );
}
