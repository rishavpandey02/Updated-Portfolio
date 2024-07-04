import styles from './Intro.module.css';
import profileIMG from '../../assets/profilePic.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Rishav Pandey CV.pdf';
import { useTheme } from '../../common/ThemeContext';


function Intro() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  return (
    <section id="Intro" className={styles.container}>
        <div className={styles.colourModeContainer}>
            <img className={styles.profilePic} src={profileIMG} alt='profile picture of Rishav Pandey' />
            <img className={styles.colorMode} src={themeIcon} alt='Colour mode icon' onClick={toggleTheme} />
        </div>
        <div className={styles.info}>
            <h1>
                Rishav 
                <br/>
                Pandey 
            </h1>
            <h2>Full Stack Web Developer</h2>
            <span>
                <a href='https://www.linkedin.com/in/rishav-pandey02/' target='_blank'>
                <img src={githubIcon} alt="github icon" />
                </a>
                <a href='www.linkedin.com/in/rishav-pandey02' target='_blank'>
                <img src={linkedinIcon} alt="linkedIn icon" />
                </a>
            </span>
            <p className={styles.description}>With a passion for developing modern website applications for commercial businesses.</p>
            <a href={CV} download> 
                <button className="hover" >Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Intro;