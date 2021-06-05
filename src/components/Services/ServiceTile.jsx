import React from "react";
import styles from "./ServiceTile.module.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
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
      <Link to="/service"  style={{ textDecoration: 'none' }}>
        <Grid
          container
          direction="row"
          alignItems="center"
          className={styles.grid}
          onClick={() => console.log("XD")}
        >
          <Grid item>
            <span className={styles.checkThisOut}>Check this out</span>
          </Grid>
          <Grid item>
            <ArrowForwardIosIcon className={styles.checkIcon} />
          </Grid>
        </Grid>
      </Link>
    </div>
  );
};

export default ServiceTile;
