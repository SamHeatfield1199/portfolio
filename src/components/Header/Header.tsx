import { useTranslation } from 'react-i18next';
import './Header.scss';

export default function Header() {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };

    return (
        <div className="header">
            <div className="header__logo">{"<SamHeatfield/>"}</div>
            <nav className="header__nav">
                <a href="#home">{t('header.nav.home')}</a>
                <a href="#about">{t('header.nav.about')}</a>
                <a href="#experience">{t('header.nav.experience')}</a>
                <a href="#projects">{t('header.nav.projects')}</a>
                <a href="#skills">{t('header.nav.skills')}</a>
                <a href="#contact">{t('header.nav.contact')}</a>
            </nav>
            <button className="header__lang-toggle" onClick={toggleLanguage} aria-label="Switch language">
                <span className={i18n.language === 'en' ? 'header__lang-toggle-option--active' : 'header__lang-toggle-option'}>EN</span>
                <span className="header__lang-toggle-divider">|</span>
                <span className={i18n.language === 'ru' ? 'header__lang-toggle-option--active' : 'header__lang-toggle-option'}>RU</span>
            </button>
        </div>
    );
}
