import React, { useState } from "react";
import { allApps } from '../../helpers/Constants'
import {
  CSSGrid,
  layout,
  measureItems,
  makeResponsive,
} from "react-stonecutter";
import AppTile from "./AppTile";
import styles from "./AppsGrid.module.css";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const FlexibleGrid = makeResponsive(measureItems(CSSGrid), {
  maxWidth: 1400,
  minPadding: 30,
});



const AppsGrid = React.forwardRef((props, ref) => {

  const [reference, inView] = useInView({triggerOnce: true,});

  const [apps, setApps] = useState(allApps);
  const [curLang, setCurLang] = useState("All");

  const changeLangHandler = (lang) => {
    setCurLang(lang);
    if (lang === "All") {
      setApps(allApps)
      return
    }
    var appsToShow = allApps.filter((app) => {
      return app.lang === lang
    })
    setApps(appsToShow)
  };

  return (
    <div>
      <div className={styles.languagesWrapper} ref={ref}>
        {["All", "Kotlin", "Flutter", "React"].map((lang) => {
          return (
            <span
              key={lang}
              className={curLang === lang ? styles.curLang : styles.lang}
              onClick={() => changeLangHandler(lang)}
            >
              {lang}
            </span>
          );
        })}
      </div>
      <motion.div className={styles.gridWrapper} animate={{ opacity: inView ? 1 : 0, translateY: inView ? 0 : 200}} ref={reference} transition={{ duration: 1.5 }}>
        <FlexibleGrid
          component="ul"
          columns={3}
          columnWidth={300}
          gutterWidth={100}
          gutterHeight={10}
          layout={layout.pinterest}
          duration={400}
          easing="ease-out"
          className={styles.noneListStyle}
        >
          {apps.map((app) => {
            return (
              <li key={app.name}>
                <AppTile name={app.name} imageUrl={app.imageUrl} year={app.year} projectUrl={app.githubUrl} />
              </li>
            );
          })}
        </FlexibleGrid>
      </motion.div>
    </div>
  );
});

export default AppsGrid;
