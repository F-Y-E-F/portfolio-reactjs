import React from 'react'
import styles from './NameTile.module.css'
const NameTile = (props) =>{


    return <div className={styles.nameTileWrapper}>
        <img src={props.image} alt='kotlin' className={styles.languageImage}/>
        <span className={styles.name}>KACPER<br/>WOJAK</span>
    </div>
}

export default NameTile;
