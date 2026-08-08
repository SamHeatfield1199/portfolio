import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import "./Contact.scss";
import contact from "@/assets/images/contact.png";
import contactIcon from "@/assets/icons/contactIcon.svg";
import frame from "@/assets/images/frame.png";
import Button from "../Button/Button";

const recipientEmail = "asmirnova1199@gmail.com";

export default function Contact() {
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
          <h2 className="contact__heading">Get in touch</h2>
          <p className="contact__subtitle">// let's connect!</p>
        </div>
      </header>

      <div className="contact__content">
        <div className="contact__form-wrapper">
          <img className="contact__frame" src={frame} alt="" aria-hidden="true" />
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-content">
              <label>
                <span>Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={updateField("name")}
                  required
                />
              </label>

              <label>
                <span>Email</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={updateField("email")}
                  required
                />
              </label>

              <label>
                <span>Message</span>
                <textarea
                  rows={4}
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={updateField("message")}
                  required
                />
              </label>

              <Button text="Send message" />
            </div>
          </form>
        </div>
        <img src={contact} alt="Contact" className="contact__image" />
      </div>

      <div className="contact__socials">
        <h3>Find me here</h3>

        <div className="contact__links">
          <a
            href="https://github.com"
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
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/telegram/telegram-original.svg"
              alt=""
              aria-hidden="true"
            />
          </a>

          <a
            href="https://hh.ru"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="HH.ru"
          >
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="16" cy="16" r="14" fill="#d6001c" />
              <rect x="9" y="10" width="3.2" height="12" rx="1" fill="#fff" />
              <rect x="19.8" y="10" width="3.2" height="12" rx="1" fill="#fff" />
              <rect x="12.2" y="14.4" width="7.6" height="3.2" rx="1" fill="#fff" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
