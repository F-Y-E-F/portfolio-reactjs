import React from "react";
import styles from "./ResumeCard.module.css";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";

const ResumeCard = (props) => {
  return (
    <div className={styles.rootCardEl}>
      <div className={styles.dateContainer}>
        <CalendarTodayOutlinedIcon style={{ fontSize: 18, color: "white" }} />
        <span className={styles.date}>{props.date}</span>
      </div>
      <span className={styles.title}>{props.title}</span>
      <br />
      <p className={styles.subtitle}>{props.subtitle}</p>

      <span className={styles.subtitleCheck} onClick={()=>window.open(props.url, "_blank")}>Check this out</span>
    </div>
  );
};

export default ResumeCard;
