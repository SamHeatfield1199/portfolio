import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useTranslation } from "react-i18next";
import "./Contact.scss";
import contact from "@/assets/images/contact.png";
import contactIcon from "@/assets/icons/contactIcon.svg";
import frame from "@/assets/images/frame.png";
import Button from "../Button/Button";

const recipientEmail = "asmirnova1199@gmail.com";

export default function Contact() {
  const { t, i18n } = useTranslation();
  const isRu = i18n.language.startsWith("ru");
  const resumeHref = isRu
    ? "https://drive.google.com/file/d/1iyOOtiXgoR5DPvMD2Pm5MXzTwyCqB7F4/view?usp=sharing"
    : "https://drive.google.com/file/d/1imma6AcT0uapUmqXjpBbrTSWfsz_jfxO/view?usp=sharing";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `Portfolio message from ${formData.name}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      "",
      formData.message,
    ].join("\n");

    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const updateField =
    (field: keyof typeof formData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((current) => ({
        ...current,
        [field]: event.target.value,
      }));
    };

  return (
    <section className="contact" id="contact">
      <header className="contact__header">
        <img className="contact__header-icon" src={contactIcon} />
        <div>
          <h2 className="contact__heading">{t("contact.heading")}</h2>
          <p className="contact__subtitle">{t("contact.subtitle")}</p>
        </div>
      </header>

      <div className="contact__content">
        <div className="contact__form-wrapper">
          <img className="contact__frame" src={frame} alt="" aria-hidden="true" />
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-content">
              <label>
                <span>{t("contact.name")}</span>
                <input
                  type="text"
                  placeholder={t("contact.namePlaceholder")}
                  value={formData.name}
                  onChange={updateField("name")}
                  required
                />
              </label>

              <label>
                <span>{t("contact.email")}</span>
                <input
                  type="email"
                  placeholder={t("contact.emailPlaceholder")}
                  value={formData.email}
                  onChange={updateField("email")}
                  required
                />
              </label>

              <label>
                <span>{t("contact.message")}</span>
                <textarea
                  rows={4}
                  placeholder={t("contact.messagePlaceholder")}
                  value={formData.message}
                  onChange={updateField("message")}
                  required
                />
              </label>

              <Button text={t("contact.submit")} type="submit" />
            </div>
          </form>
        </div>
        <img src={contact} alt="Contact" className="contact__image" aria-hidden="true" />
      </div>

      <div className="contact__socials">
        <h3>{t("contact.socials")}</h3>

        <div className="contact__links">
          <a
            href="https://github.com/SamHeatfield1199"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              alt=""
              aria-hidden="true"
            />
          </a>

          <a
            href="https://t.me/samheatfield"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path
                fill="#2AABEE"
                d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.53 8.13-1.86 8.77c-.14.62-.5.77-1.02.48l-2.82-2.08-1.36 1.31c-.15.15-.28.28-.57.28l.2-2.87 5.23-4.72c.23-.2-.05-.31-.35-.12L8.4 13.17l-2.78-.87c-.6-.19-.62-.6.13-.89l10.86-4.19c.5-.19.94.12.92.88z"
              />
            </svg>
          </a>

          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("contact.resume")}
          >
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="2" y="2" width="28" height="28" rx="8" fill="#8b70e8" />
              <text
                x="16"
                y="21.5"
                textAnchor="middle"
                fill="#fff"
                fontSize="12"
                fontFamily="Arial, sans-serif"
                fontWeight="800"
              >
                CV
              </text>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
