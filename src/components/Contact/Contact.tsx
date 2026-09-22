import { useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useTranslation } from "react-i18next";
import "./Contact.scss";
import contact from "@/assets/images/contact.png";
import contactIcon from "@/assets/icons/contactIcon.svg";
import frame from "@/assets/images/frame.png";
import Button from "../Button/Button";

const recipientEmail = "asmirnova1199@gmail.com";
const MAX_FILES      = 3;
const MAX_FILE_SIZE  = 5 * 1024 * 1024;
const ACCEPTED_FILES = ".pdf,.doc,.docx,.txt,.rtf,.csv,.zip,.png,.jpg,.jpeg,.gif,.webp,.xlsx,.pptx";

function formatFileSize(bytes: number) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${Math.round(bytes / 1024)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function Contact() {
  const { t, i18n } = useTranslation();
  const isRu = i18n.language.startsWith("ru");
  const resumeHref = isRu
    ? "https://drive.google.com/file/d/1iyOOtiXgoR5DPvMD2Pm5MXzTwyCqB7F4/view?usp=sharing"
    : "https://drive.google.com/file/d/1imma6AcT0uapUmqXjpBbrTSWfsz_jfxO/view?usp=sharing";
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [attachError, setAttachError] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

 //Отправка письма на email через браузер
  const openMailClient = () => {
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

  //Отправка письма на email
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "sending") {
      return;
    }

    const honeypot = event.currentTarget.elements.namedItem("website");
    if (honeypot instanceof HTMLInputElement && honeypot.value) {
      return;
    }

    setAttachError("");

    if (files.length === 0) {
      setStatus("idle");
      openMailClient();
      return;
    }

    setStatus("sending");

    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("email", formData.email);
    payload.append(
      "message",
      [
        formData.message,
        "",
        `Attached: ${files.map((file) => file.name).join(", ")}`,
      ].join("\n"),
    );
    payload.append("_subject", `Portfolio message from ${formData.name}`);
    payload.append("_captcha", "false");
    payload.append("_template", "table");
    payload.append("_replyto", formData.email);

    files.forEach((file, index) => {
      payload.append(`attachment${index + 1}`, file, file.name);
    });

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        body: payload,
        headers: {
          Accept: "application/json",
        },
      });

      const result = (await response.json()) as { success?: string | boolean };

      if (!response.ok || result.success === false || result.success === "false") {
        throw new Error("submit failed");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setFiles([]);
    } catch {
      setStatus("error");
    }
  };

  const updateField =
    (field: keyof typeof formData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((current) => ({
        ...current,
        [field]: event.target.value,
      }));

      if (status === "success" || status === "error") {
        setStatus("idle");
      }
    };

  // Добавление файлов
  const handleFilesChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selected     = Array.from(event.target.files ?? []);
    event.target.value = "";

    setAttachError("");

    if (status === "success" || status === "error") {
      setStatus("idle");
    }

    setFiles((current) => {
      const merged = [...current];

      for (const file of selected) {
        if (merged.length >= MAX_FILES) {
          setAttachError(t("contact.tooManyFiles", { count: MAX_FILES }));

          break;
        }

        if (file.size > MAX_FILE_SIZE) {
          setAttachError(t("contact.fileTooLarge"));

          continue;
        }

        const alreadyAdded = merged.some((item) => item.name === file.name && item.size === file.size,);

        if (alreadyAdded) {
          continue;
        }

        merged.push(file);
      }

      return merged;
    });
  };

  // Удаление файлов
  const removeFile = (index: number) => {
    setFiles((current) => current.filter((_, fileIndex) => fileIndex !== index));
    setAttachError("");

    if (status === "success" || status === "error") {
      setStatus("idle");
    }
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

              <input
                className="contact__honeypot"
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="contact__attach">
                <input
                  ref={fileInputRef}
                  className="contact__file-input"
                  type="file"
                  accept={ACCEPTED_FILES}
                  multiple
                  onChange={handleFilesChange}
                />
                <button
                  className="contact__attach-trigger"
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <path
                      d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{t("contact.attach")}</span>
                </button>

                {files.length > 0 && (
                  <ul className="contact__attach-list">
                    {files.map((file, index) => (
                      <li key={`${file.name}-${file.size}`} className="contact__attach-file">
                        <span>
                          {file.name}
                          <span className="contact__attach-size">
                            {" "}
                            ({formatFileSize(file.size)})
                          </span>
                        </span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          aria-label={`${t("contact.removeFile")}: ${file.name}`}
                        >
                          ×
                        </button>
                      </li>
                    ))}
                  </ul>
                )}

                {attachError && (
                  <p className="contact__status" role="status">
                    {attachError}
                  </p>
                )}
              </div>

              <Button
                text={
                  status === "sending" ? t("contact.sending") : t("contact.submit")
                }
                type="submit"
                disabled={status === "sending"}
              />

              {status === "success" && (
                <p className="contact__status" role="status">
                  {t("contact.success")}
                </p>
              )}
              {status === "error" && (
                <p className="contact__status" role="status">
                  {t("contact.error")}
                </p>
              )}
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
