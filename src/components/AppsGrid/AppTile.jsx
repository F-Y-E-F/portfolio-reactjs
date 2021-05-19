import React, { useState } from "react";
import styles from "./AppTile.module.css";

const AppTile = (props) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className={styles.allTile}>
      <div
        className={styles.appTileWrapper}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        
        <div className={!isHover? styles.shadow : styles.shadowHover}></div>
        <img
          src={props.imageUrl}
          className={styles.image}
          alt={props.name}
        />
        <button className={!isHover ? styles.button : styles.buttonHovered} onClick={()=> window.open(props.projectUrl, "_blank")}>
          Check this out
        </button>
      </div>
      <div className={styles.appName}>{props.name}</div>
      <div className={styles.appYear}>{props.year}</div>
    </div>
  );
};

export default AppTile;
