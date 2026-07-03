import aboutImage from '@/assets/images/about.png'
import './About.scss'

export default function About() {
    return(
        <>
        <h3>// about me</h3>
        <div>
            <img src={aboutImage} alt="About Me" />
            <div>
                I’m a frontend developer who loves creating intuitive and beautiful web experiences. I enjoy turning ideas into real products using modern technologies.
            </div>
        </div>
        </>
    );
}