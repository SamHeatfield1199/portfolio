import aboutImage from "@/assets/images/about.png";
import "./About.scss";

export default function About() {
  return (
    <section className="about">
      <div className="about__image-wrap">
        <img src={aboutImage} alt="About Me" className="about__image" />
      </div>

      <div className="about__content">
        <img
            className="about__card-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
        <h3 className="about__heading">// about me</h3>

        <p className="about__description">
          I’m a frontend developer who loves creating intuitive and beautiful
          web experiences. I enjoy turning ideas into real products using modern
          technologies.
        </p>
      </div>

      <div className="about__cards">
        <div className="about__card">
          <img
            className="about__card-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
          <div className="about__card-title">Residence</div>
          <div className="about__card-sub">Russia</div>
        </div>

        <div className="about__card">
          <img
            className="about__card-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
          <div className="about__card-title">Hobbies</div>
          <div className="about__card-sub">Music, Travel, Games, Coffee</div>
        </div>

        <div className="about__card">
          <img
            className="about__card-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />

          <div className="about__card-title">Focus</div>
          <div className="about__card-sub">
            Clean Code
            <br />
            UI/UX
          </div>
        </div>

        <div className="about__card">
          <img
            className="about__card-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />

          <div className="about__card-title">Always Learning</div>
          <div className="about__card-sub">
            New Tech
            <br />
            Every Day
          </div>
        </div>
      </div>
    </section>
  );
}
