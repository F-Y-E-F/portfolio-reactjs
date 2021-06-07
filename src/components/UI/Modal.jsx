import styles from "./Modal.module.css";
import React from 'react'
import ReactDOM from 'react-dom'


const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.hideModal}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.closeButton} onClick={props.hideModal}>
        <span>X</span>
      </div>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
    return <React.Fragment >
       {ReactDOM.createPortal(<Backdrop hideModal={props.hideModal}/>,document.getElementById("overlays"))}
       {ReactDOM.createPortal(<ModalOverlay hideModal={props.hideModal}>{props.children}</ModalOverlay>,document.getElementById("overlays"))}
    </React.Fragment>
};

export default Modal;
