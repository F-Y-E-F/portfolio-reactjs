import React from "react";
import styles from "./ResumeCards.module.css";
import ResumeCard from "./ResumeCard";
import { resumeEducation, resumeExperience } from "../../helpers/Constants";
const ResumeCards = () => {
  return (
    <div className={styles.resumeCardsContainer}>
      <div className={styles.categoryContainer}>
        <span className={styles.categoryTitle}>Education</span>
        {resumeEducation.map((resume) => {
          return (
            <ResumeCard
              key={resume.title}
              title={resume.title}
              subtitle={resume.subTitle}
              date={resume.date}
              url={resume.url}
            />
          );
        })}
      </div>
      <div className={styles.spacer}></div>
      <div className={styles.categoryContainer}>
        <span className={styles.categoryTitle}>Experience</span>
        {resumeExperience.map((resume) => {
          return (
            <ResumeCard
              key={resume.title}
              title={resume.title}
              subtitle={resume.subTitle}
              date={resume.date}
              url={resume.url}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ResumeCards;
