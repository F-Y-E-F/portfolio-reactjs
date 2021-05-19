import React, { useState } from "react";
import {allApps} from '../../helpers/Constants'
import {
  CSSGrid,
  layout,
  measureItems,
  makeResponsive,
} from "react-stonecutter";
import AppTile from "./AppTile";
import styles from "./AppsGrid.module.css";

const FlexibleGrid = makeResponsive(measureItems(CSSGrid), {
  maxWidth: 1400,
  minPadding: 30,
});



const AppsGrid = () => {
  const [apps, setApps] = useState(allApps);

  const [curLang, setCurLang] = useState("All");

  const changeLangHandler = (lang) => {
    setCurLang(lang);
    if(lang==="All") {
      setApps(allApps)
      return
    }
    var appsToShow = allApps.filter((app)=>{
      return app.lang === lang
    })
    setApps(appsToShow)
  };

  return (
    <div>
      <div className={styles.languagesWrapper}>
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
      <div className={styles.gridWrapper}>
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
                <AppTile name={app.name} imageUrl={app.imageUrl} year={app.year} projectUrl={app.githubUrl}/>
              </li>
            );
          })}
        </FlexibleGrid>
      </div>
    </div>
  );
};

export default AppsGrid;
