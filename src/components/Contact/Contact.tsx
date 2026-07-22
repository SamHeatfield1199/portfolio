import "./Contact.scss";
import contact from "@/assets/images/contact.png";
import contactIcon from "@/assets/icons/contactIcon.svg";
import frame from "@/assets/images/frame.png";
import Button from "../Button/Button";

export default function Contact() {
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
          <img className="contact__frame" src={frame} alt="" />
          <form className="contact__form">
            <div className="contact__form-content">
              <label>
                <span>Name</span>
                <input type="text" placeholder="Your name" />
              </label>

              <label>
                <span>Email</span>
                <input type="email" placeholder="you@example.com" />
              </label>

              <label>
                <span>Message</span>
                <textarea rows={7} placeholder="Your message..." />
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
          <a href="#">Github</a>

          <a href="#">Telega</a>

          <a href="#">HH.RU</a>
        </div>
      </div>
    </section>
  );
}
