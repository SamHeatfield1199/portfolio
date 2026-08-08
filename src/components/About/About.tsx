import { useTranslation } from 'react-i18next';
import aboutImage from "@/assets/images/about.png";
import aboutMe from "@/assets/icons/about.svg";
import residence from "@/assets/icons/residence.svg";
import hobbies from "@/assets/icons/hobbies.svg";
import codeStyle from "@/assets/icons/codeStyle.svg";
import growth from "@/assets/icons/growth.svg";
import "./About.scss";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="about" id="about">
      <div className="about__image-wrap">
        <img src={aboutImage} alt="About Me" className="about__image" />
      </div>

      <div className="about__content">
        <header className="about__header">
          <img className="about__header-icon" src={aboutMe} alt="" />
          <div>
            <h2 className="about__heading">{t('about.heading')}</h2>
            <p className="about__subtitle">{t('about.subtitle')}</p>
          </div>
        </header>

        <p className="about__description">
          <div>{t('about.desc1')}</div>
          <br />
          <div>{t('about.desc2')}</div>
          <br />
          <div>{t('about.desc3')}</div>
        </p>
      </div>

      <div className="about__cards">
        <div className="about__card">
          <img className="about__card-icon" src={residence} />
          <div className="about__card-title">{t('about.cards.residence.title')}</div>
          <div className="about__card-sub">{t('about.cards.residence.sub')}</div>
        </div>

        <div className="about__card">
          <img className="about__card-icon" src={hobbies} />
          <div className="about__card-title">{t('about.cards.hobbies.title')}</div>
          <div className="about__card-sub">{t('about.cards.hobbies.sub')}</div>
        </div>

        <div className="about__card">
          <img className="about__card-icon" src={codeStyle} />
          <div className="about__card-title">{t('about.cards.focus.title')}</div>
          <div className="about__card-sub">
            {t('about.cards.focus.sub1')}
            <br />
            {t('about.cards.focus.sub2')}
          </div>
        </div>

        <div className="about__card">
          <img className="about__card-icon" src={growth} />
          <div className="about__card-title">{t('about.cards.learning.title')}</div>
          <div className="about__card-sub">
            {t('about.cards.learning.sub1')}
            <br />
            {t('about.cards.learning.sub2')}
          </div>
        </div>
      </div>
    </section>
  );
}
