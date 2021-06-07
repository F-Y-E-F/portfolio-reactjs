import React, { useState } from "react";
import styles from "./SendMessage.module.css";
import { Button } from "@material-ui/core";
import db from "../../helpers/firebase.config";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const SendMessage = () => {

  const [messageData, setMessageData] = useState({
    "name": '',
    "email": '',
    "phone": '',
    "message": ''
  });
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const sendMessageToFirebase = async () => {
    try{
      if(messageData.name!=='' && messageData.email!=='' && messageData.phone!=='' && messageData.message!==''){
        await db.collection('emails').add(messageData)
        setIsSuccess(true)
        return
      }
      setIsError(true)
    }catch(e){
      setIsError(true)
    }
  }


  return (
    <form className={styles.inputsWrapper}>
      <Snackbar open={isSuccess} autoHideDuration={6000} onClose={()=>setIsSuccess(false)}>
        <Alert onClose={()=>setIsSuccess(false)} severity="success">
            Successfully sent!
        </Alert>
      </Snackbar>
      <Snackbar open={isError} autoHideDuration={6000} onClose={()=>setIsError(false)}>
        <Alert onClose={()=>setIsError(false)} severity="error">
        {messageData.name!=='' && messageData.email!=='' && messageData.phone!=='' && messageData.message!=='' ?
            'An Error Occured. Try again!': 'Provide all data!'}
        </Alert>
      </Snackbar>
      <input className={styles.input} placeholder="name" autoComplete="new-password" onChange={(event) => setMessageData((prevData) => {
        return {
          ...prevData,
          name: event.target.value
        }
      })} />
      <input className={styles.input} placeholder="email" autoComplete="new-password" onChange={(event) => setMessageData((prevData) => {
        return {
          ...prevData,
          email: event.target.value
        }
      })} />
      <input className={styles.input} placeholder="phone" autoComplete="new-password" onChange={(event) => setMessageData((prevData) => {
        return {
          ...prevData,
          phone: event.target.value
        }
      })} />
      <textarea className={styles.messageInput} cols="40" rows="8" placeholder="message" onChange={(event) => setMessageData((prevData) => {

        return {
          ...prevData,
          message: event.target.value
        }
      })} ></textarea>
      <Button id={styles.sendMessageButton} onClick={sendMessageToFirebase}>Send Message</Button>
    </form>
  );
};

export default SendMessage;
