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
        <span className="hero-status__row">
          <span className="hero-status-dot" />
          {t("hero.available")} &gt;
        </span>
        <span className="hero-status__tz">{t("hero.timezone")}</span>
      </span>
    </div>
  );
}
