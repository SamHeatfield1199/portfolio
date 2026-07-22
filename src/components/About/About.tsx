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
        <header className="about__header">
          <img className="about__header-icon" src={aboutMe} alt="" />
          <div>
            <h2 className="about__heading">About me</h2>
            <p className="about__subtitle">// who I am</p>
          </div>
        </header>

        <p className="about__description">
          <div>
            I'm a frontend developer passionate about creating intuitive and
            accessible web experiences, turning ideas into real products with
            modern frontend technologies.
          </div>
          <br />
          <div>
            My priorities are clean architecture, thoughtful UX, and writing
            maintainable code that makes both users and developers happy.
          </div>
          <br />
          <div>
            Constantly exploring new technologies, I believe it's attention to
            detail that makes great products memorable.
          </div>
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
