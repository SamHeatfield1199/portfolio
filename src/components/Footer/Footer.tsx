import { useTranslation } from "react-i18next";
import "./Footer.scss";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__bar">
        <p className="footer__text">
          <span className="footer__brand">© 2026 SamHeatfield</span>
          <span className="footer__divider">//</span>
          <span>{t("footer.tagline")}</span>
          <span aria-hidden="true">🚀</span>
        </p>

        <div className="footer__meta" aria-hidden="true">
          <span className="footer__code">&lt;/&gt;</span>

          <span className="footer__battery">
            <span className="footer__battery-fill" />
          </span>

          <span className="footer__hearts">
            <span>❤</span>
            <span>❤</span>
            <span>❤</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
