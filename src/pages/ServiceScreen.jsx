
import React,{useState} from 'react';
import NameTile from '../components/Services/ServiceScreen/NameTile';
import Projects from '../components/Services/ServiceScreen/Projects';
import styles from './ServiceScreen.module.css'
import { Button } from '@material-ui/core';
import { services } from '../helpers/Constants';
import Modal from '../components/UI/Modal'

const ServiceScreen = (props) => {


    const [isModalShow, setIsModalShow] = useState(false)

    const lang = props.match.params.lang

    let languageObj = null;

    if (lang === 'kotlin') {
        languageObj = services[0]
    }
    if (lang === 'flutter') {
        languageObj = services[1]
    }
    if (lang === 'react') {
        languageObj = services[2]
    }

    const showModal = () =>{
        setIsModalShow(true)
    }
    const closeModal = () =>{
        setIsModalShow(false)
    }


    return <div className={styles.root}>
        {isModalShow && <Modal hideModal={closeModal}>
            <a href="https://wakatime.com"><img src="https://wakatime.com/share/@FY/669f5543-d879-4a32-ac0f-5a38860ac3c5.png" className={styles.img} alt="activity chart"/></a>
        </Modal>
        }
        <NameTile image={languageObj.image} />
        <Projects technologies={languageObj.technologies} />
        <div className={styles.descWrapper}>
            <span className={styles.orangeText}>{languageObj.title.split(" ")[0].toUpperCase()}</span>
            <span className={styles.whiteText}> SUPPORT<br />AND FULL APPS</span>
            <br />
            <p className={styles.desc}>{languageObj.bigSubTitle}</p>
        </div>
        <Button id={styles.checkButton} onClick={showModal}>Check this out</Button>
    </div>

}

export default ServiceScreen;