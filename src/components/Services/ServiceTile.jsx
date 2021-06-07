import React from "react";
import styles from "./ServiceTile.module.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const ServiceTile = (props) => {
  const  getLangFromFullName = ()=>{
      if(props.title==='Kotlin Support'){
        return 'kotlin'
      }
      if(props.title==='Flutter Support'){
        return 'flutter'
      }
      if(props.title==='React Support'){
        return 'react'
      }
      return 'none'
  }
  const [reference, inView] = useInView({triggerOnce: true,});
  return (
    <motion.div className={styles.tileWrapper} animate={{ opacity: inView ? 1 : 0, translateX: inView ? 0 : props.title === "Kotlin Support" ? 300: props.title === "Flutter Support" ? -300:600}} ref={reference} transition={{ duration: 1.5 }}>
      <div className={styles.imageWrapper}>
        <img
          src={props.image}
          className={styles.img}
          alt="programming language"
        />
      </div>
      <span className={styles.title}>{props.title}</span>
      <p className={styles.subTitle}>{props.subTitle}</p>
      <Link to={"/service/"+getLangFromFullName()} style={{ textDecoration: 'none' }}>
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
      </Link>
    </motion.div>
  );
};

export default ServiceTile;
