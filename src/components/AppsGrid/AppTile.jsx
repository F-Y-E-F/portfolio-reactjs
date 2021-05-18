import React,{useRef} from "react";
import styles from "./AppTile.module.css";
import { Button } from "@material-ui/core";

const AppTile = (props) => {

    

  return (
    <div className={styles.appTileWrapper}>
      <img
        src="https://cdn.pixabay.com/photo/2020/08/01/12/18/winnats-pass-5455266_960_720.jpg"
        className={styles.image}
        alt="App"
        
      />
      <Button className={styles.button} >Kliklniej mnie</Button>
    </div>
  );
};

export default AppTile;
