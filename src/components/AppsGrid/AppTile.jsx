import React, { useState } from "react";
import styles from "./AppTile.module.css";

const AppTile = (props) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className={styles.allTile}>
      <div
        className={styles.appTileWrapper}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
      >
        <div className={!isHover? styles.shadow : styles.shadowHover}></div>
        <img
          src="https://cdn.pixabay.com/photo/2020/08/01/12/18/winnats-pass-5455266_960_720.jpg"
          className={styles.image}
          alt="App"
        />
        <button className={!isHover ? styles.button : styles.buttonHover}>
          Check this out
        </button>
      </div>
      <div className={styles.appName}>Imagine</div>
      <div className={styles.appYear}>2020</div>
    </div>
  );
};

export default AppTile;
