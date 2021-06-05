import React from 'react'
import styles from './NameTile.module.css'
import kotlin from '../../../assets/kotlin.png'
const NameTile = () =>{


    return <div className={styles.nameTileWrapper}>
        <img src={kotlin} alt='kotlin' className={styles.languageImage}/>
        <span className={styles.name}>KACPER<br/>WOJAK</span>
    </div>
}

export default NameTile;
