import React from "react";
import styles from "./SocialMediaIcon.module.css";
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const SocialMediaIcon = (props) => {

    return <div className={styles.wrapper}>
        {props.image}
    </div>
};

export default SocialMediaIcon;
