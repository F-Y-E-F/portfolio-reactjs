import styles from "./Title.module.css";
import React from "react";

const Title = (props) => {
  return (
    <div className={props.isStart === '1' ? styles.startTitleWrapper: styles.titleWrapper}>
      <span className={styles.whiteText}>{props.whiteText}</span>
      <span className={styles.orangeText}>{props.orangeText}</span>
    </div>
  );
};

export default Title;
