import greetingImage from '@/assets/images/greeting.png'
import './Greeting.scss'

export default function Greeting() {
    return (
        <>  
               <div className="greeting">
            <div className="greeting__content">
                <h3 className="greeting__greeting">こんにちは!</h3>
                <p className="greeting__title">I’m Anastasia ▌</p>
                <p className="greeting__subtitle">Frontend Developer</p>
                <p className="greeting__description">I build clean and efficient web applications.</p>
                <button className="pixel-button">
                    <svg className="pixel-button__icon" width="16" height="12" viewBox="0 0 16 12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M2 6 H11 M8 2 L14 6 L8 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
                    </svg>
                    <span>view my work</span>
                </button>
            </div>
            <div className="greeting__image-wrap">
                <img src={greetingImage} alt="Greeting" className="greeting__image" />
            </div>
        </div>
          <div className="greeting__code-strip">
          <pre>{`> const developer = {
    code:    'Typescript',
    passion: 'creating things',
    focus:   'frontend'
};`}
          </pre>
          <span className="greeting__status">
            <span className="greeting__status-dot" />
            Available for work &gt;
          </span>
        </div>
        </>
    )
}
