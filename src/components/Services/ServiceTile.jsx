import React from "react";
import styles from "./ServiceTile.module.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Grid } from "@material-ui/core";
const ServiceTile = (props) => {
  return (
    <div className={styles.tileWrapper}>
      <div className={styles.imageWrapper}>
        <img
          src={props.image}
          className={styles.img}
          alt="programming language"
        />
      </div>
      <span className={styles.title}>{props.title}</span>
      <p className={styles.subTitle}>{props.subTitle}</p>
      <Grid
        container
        direction="row"
        alignItems="center"
        className={styles.grid}
      >
        <Grid item>
          <span className={styles.checkThisOut}>Check this out</span>
        </Grid>
        <Grid item>
          <ArrowForwardIosIcon className={styles.checkIcon} />
        </Grid>
      </Grid>
    </div>
  );
};

export default ServiceTile;
