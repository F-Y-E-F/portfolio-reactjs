
import React from 'react';
import NameTile from '../components/Services/ServiceScreen/NameTile';
import Projects from '../components/Services/ServiceScreen/Projects';
import styles from './ServiceScreen.module.css'
import { Button } from '@material-ui/core';

const ServiceScreen = () => {
    return <div className={styles.root}>
        <NameTile />
        <Projects />
        <div className={styles.descWrapper}>
            <span className={styles.orangeText}>KOTLIN</span>
            <span className={styles.whiteText}> SUPPORT<br />AND FULL APPS</span>
            <br />
            <p className={styles.desc}>I can create mobile apps or features in kotlin. Also I can join to already started project. I know basics of team work in git version control. I can create kotlin apps with: hilt, koin DI,  Retrofit, Rxjava, Coroutines, Firebase : Auth,  Cloud Firestore, Realtime database, notifications, storage. I know Room database MVVM clean architecture model, basics of material design, integrations with android features and more.</p>
        </div>
        <Button id={styles.checkButton}>Check this out</Button>
    </div>

}

export default ServiceScreen;