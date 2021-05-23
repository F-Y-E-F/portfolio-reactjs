import React from "react";
import SendMessage from "./SendMessage";
import styles from "./GetInTouch.module.css";
import SocialMediaIcon from "./SocialMediaIcon";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import RedditIcon from "@material-ui/icons/Reddit";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailIcon from "@material-ui/icons/Mail";
import discord from "../../assets/discord.svg";

const GetInTouch = () => {
  const firstLineImages = [
    <LinkedInIcon className={styles.image} />,
    <FacebookIcon className={styles.image} />,
    <RedditIcon className={styles.image} />,
    <GitHubIcon className={styles.image} />,
  ];
  const secondLineImages = [
    <TwitterIcon className={styles.image} />,
    <InstagramIcon className={styles.image} />,
    <MailIcon className={styles.image} />,
    <img src={discord}  className={styles.dscImg}/>,
  ];

  return (
    <div className={styles.getInTouchWrapper}>
        <div className={styles.socialWrapper}>
        <div className={styles.oneLineWrapper}>
          {firstLineImages.map((img) => (
            <SocialMediaIcon image={img} />
          ))}
        </div>
        <div className={styles.oneLineWrapper}>
          {secondLineImages.map((img) => (
            <SocialMediaIcon image={img} />
          ))}
        </div>
      </div>
      <SendMessage />
      
    </div>
  );
};

export default GetInTouch;
