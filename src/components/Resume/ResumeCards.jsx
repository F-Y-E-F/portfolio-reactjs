import React from "react";
import styles from "./ResumeCards.module.css";
import ResumeCard from "./ResumeCard";
import { resumeEducation, resumeExperience } from "../../helpers/Constants";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const ResumeCards = React.forwardRef((props,ref) => {

  const [reference, inView] = useInView({triggerOnce: true,});

  return (
    <div className={styles.resumeCardsContainer} ref={ref}>
      <motion.div className={styles.categoryContainer} animate={{ opacity: inView ? 1 : 0, translateX: inView ? 0 : -300}} ref={reference} transition={{ duration: 1.5 }}>
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
      </motion.div>
      <div className={styles.spacer}></div>
      <motion.div className={styles.categoryContainer} animate={{ opacity: inView ? 1 : 0, translateX: inView ? 0 : 300}} transition={{ duration: 1.5 }}>
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
      </motion.div>
    </div>
  );
});
export default ResumeCards;
