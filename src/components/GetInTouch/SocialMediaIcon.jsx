import React from "react";
import styles from "./SocialMediaIcon.module.css";

const SocialMediaIcon = (props) => {

    return <div className={styles.wrapper}>
        {props.image}
    </div>
};

export default SocialMediaIcon;
