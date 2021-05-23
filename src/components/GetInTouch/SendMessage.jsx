import React from "react";
import styles from "./SendMessage.module.css";
import { Button } from "@material-ui/core";


const SendMessage = () => {
  return (

      <form className={styles.inputsWrapper}>
        <input className={styles.input} placeholder="name" autoComplete="new-password"/>
        <input className={styles.input} placeholder="email" autoComplete="new-password"/>
        <input className={styles.input} placeholder="phone" autoComplete="new-password"/>
        <textarea className={styles.messageInput} cols="40" rows="8" placeholder="message"></textarea>   
        <Button id={styles.sendMessageButton}>Send Message</Button>
      </form>
  );
};

export default SendMessage;
