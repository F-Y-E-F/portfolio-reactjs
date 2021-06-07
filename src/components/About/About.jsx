import React from 'react'
import styles from './About.module.css'
import image from '../../assets/placeholder_two.jpg'
import Title from '../UI/Title'
import Button from '@material-ui/core/Button';

const About = React.forwardRef((props, ref) => {

    return <div className={styles.aboutContainer} ref={ref}>
        <img src={image} alt="Me" className={styles.img} />
        <div className={styles.aboutContentContainer}>
            <Title whiteText='About' orangeText='Me' isStart='1' />
            <p className={styles.aboutTitle}>I'm 17yo ambitious kotlin, flutter and react developer who wants to get first job. I like programming, playing chess and also good tea</p>
            <p className={styles.aboutSubTitle}>I created a lot of kotlin and flutter apps. Also I made some apps in React. A few of that are avaiable on google play store. Ask me for more informations.</p>
            <div className={styles.buttonsContainer}>
                <Button id={styles.hireMeButton}>Hire Me</Button>
                <Button id={styles.visitGithubButton}>Visit My Github</Button>
            </div>
        </div>
    </div>

})

export default About