import React, { useState } from "react";
import styles from "./Projects.module.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import kotlin from '../../../assets/kotlin.png'
import android from '../../../assets/android.png'
import intellij from '../../../assets/intellij.png'
import git from '../../../assets/git.png'
import { Divider } from "@material-ui/core";
const Projects = () => {
  const [isShowed, setIsShow] = useState({
    isTechShow: false,
    isProjectsShow: false,
  });

  const iconStyle = {
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
    width: "35px",
    height: "35px",
    cursor: "pointer",
  };

  return (
    <div className={styles.projectsWrapper}>
      <div className={styles.oneDivWrapper}>
        <span className={styles.optionsText}>SHOW TECHNOLOGIES</span>
        <ExpandMoreIcon
          style={iconStyle}
          onClick={() => {
            setIsShow((prevState) => {
              return {
                isTechShow: !prevState.isTechShow,
                isProjectsShow: prevState.isProjectsShow,
              };
            });
          }}
        />
        <div className={isShowed.isTechShow ? styles.showDiv : styles.hideDiv}>
          <img src={kotlin} className={styles.techIcon} alt='z1'/>
          <img src={android} className={styles.techIcon} alt='z2'/>
          <img src={intellij} className={styles.techIcon} alt='z3'/>
          <img src={git} className={styles.techIcon} alt='z4'/>
        </div>
      </div>
      <div style={{ width: "50px" }} />
      <div className={styles.oneDivWrapper}>
        <span className={styles.optionsText}>LATESTS PROJECTS</span>
        <ExpandMoreIcon
          style={iconStyle}
          onClick={() => {
            setIsShow((prevState) => {
              return {
                isTechShow: prevState.isTechShow,
                isProjectsShow: !prevState.isProjectsShow,
              };
            });
          }}
        />
        <div
          className={isShowed.isProjectsShow ? styles.showDiv : styles.hideDiv}
        >
            <p className={styles.projestTitle}>Jakas apka</p>
            <Divider style={{background:'white'}}/>
            <p className={styles.projestTitle}>Jakas apka</p>
            <Divider style={{background:'white'}}/>
            <p className={styles.projestTitle}>Jakas apka</p>
            <Divider style={{background:'white'}}/>
            <p className={styles.projestTitle}>Jakas apka</p>
            <Divider style={{background:'white'}}/>
            <p className={styles.projestTitle}>Jakas apka</p>
            <Divider style={{background:'white'}}/>
            
        </div>
      </div>
      <div style={{ width: "50px" }} />
    </div>
  );
};

export default Projects;
