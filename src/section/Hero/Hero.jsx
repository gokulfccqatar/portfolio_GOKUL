import heroImg from '../../assets/hero-img.png'
import styles from "./HeroStyles.module.css"
import twitterLight from '../../assets/twitter-light.svg'
import githubLight from '../../assets/github-light.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero(){
    const {toggleTheme,theme } = useTheme();

    const themeIcon = theme === 'light' ?  sun:moon;

    const twitterIcon = theme === 'light' ? twitterLight:twitterDark;

    const githubIcon = theme === 'light' ? githubLight:githubDark;

    const linkedinIcon = theme === 'light' ? linkedinLight:linkedinDark;


    return(
        <section id='hero' className={styles.container}>
            
            <div className={styles.colorModeContainer}>
                <img
                    className={styles.hero} 
                    src={heroImg} 
                    alt="Profile pictures of person"
                    />
                <img
                    className={styles.colorMode} 
                    src={themeIcon} 
                    alt="color mode"
                    onClick={toggleTheme}
                    />
            </div>
            <div className={styles.info}>
                <h1>GOKUL <br/> GOPAN</h1>
                <h2>FrontEnd Developer</h2>
                <span>
                    <a href="https://twitter.com" target='_blank'>
                        <img src={twitterIcon} alt="twitter icon" />
                    </a>
                    <a href="https://ggithub.com" target='_blank'>
                        <img src={githubIcon} alt="githubIcon" />
                    </a>
                    <a href="https://linkedin.com" target='_blank'>
                        <img src={linkedinIcon} alt="linkedinIcon icon" />
                    </a>
                </span>
                <p className={styles.description}>Designing modern web application from 2017   Extensively providing Ai solution and Data Modelling</p>
                <a href={CV}>
                    <button className='hover' download>
                        Resume
                    </button>
                </a>
             </div>
        </section>
    )
}

export default Hero