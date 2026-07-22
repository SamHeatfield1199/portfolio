import './Header.scss';

export default function Header() {
    return (    
        <div className="header">
            <div className="header__logo">{"<SamHeatfield/>"}</div>
            <nav className="header__nav">
                <a href="#home">_home</a>
                <a href="#about">about</a>
                <a href="#skills">skills</a>
                <a href="#projects">projects</a>
                <a href="#contact">contact</a>
             </nav>
        </div>
    )
}