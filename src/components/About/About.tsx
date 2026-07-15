import aboutImage from "@/assets/images/about.png";
import aboutMe from "@/assets/icons/about.svg";
import residence from "@/assets/icons/residence.svg";
import hobbies from "@/assets/icons/hobbies.svg";
import codeStyle from "@/assets/icons/codeStyle.svg";
import growth from "@/assets/icons/growth.svg";
import "./About.scss";

export default function About() {
  return (
    <section className="about">
      <div className="about__image-wrap">
        <img src={aboutImage} alt="About Me" className="about__image" />
      </div>

      <div className="about__content">
        <img className="about__card-icon" src={aboutMe} />
        <h3 className="about__heading">// about me</h3>

        <p className="about__description">
          I’m a frontend developer who loves creating intuitive and beautiful
          web experiences. I enjoy turning ideas into real products using modern
          technologies.
        </p>
      </div>

      <div className="about__cards">
        <div className="about__card">
          <img className="about__card-icon" src={residence} />
          <div className="about__card-title">Residence</div>
          <div className="about__card-sub">Russia</div>
        </div>

        <div className="about__card">
          <img className="about__card-icon" src={hobbies} />
          <div className="about__card-title">Hobbies</div>
          <div className="about__card-sub">Music, Travel, Games, Coffee</div>
        </div>

        <div className="about__card">
          <img className="about__card-icon" src={codeStyle} />
          <div className="about__card-title">Focus</div>
          <div className="about__card-sub">
            Clean Code
            <br />
            UI/UX
          </div>
        </div>

        <div className="about__card">
          <img className="about__card-icon" src={growth} />
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
