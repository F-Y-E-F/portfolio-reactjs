import styles from "./HomePage.module.css";
import Header from "../components/Header/Header";
import Title from "../components/UI/Title";
import AppsGrid from "../components/AppsGrid/AppsGrid";
import ResumeCards from "../components/Resume/ResumeCards";
import About from "../components/About/About";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import Services from "../components/Services/Services";

import React, { useRef } from "react";

const HomePage = () => {
  const homeRef = useRef(null);
  const portfolioRef = useRef(null);
  const resumeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToItem = (ref, isDrawer) => {
    const options = { behavior: "smooth", block: "start" };
    setTimeout(
      function () {
        switch (ref) {
          case "home":
            homeRef.current.scrollIntoView(options);
            break;
          case "portfolio":
            portfolioRef.current.scrollIntoView(options);
            break;
          case "resume":
            resumeRef.current.scrollIntoView(options);
            break;
          case "about":
            aboutRef.current.scrollIntoView(options);
            break;
          case "contact":
            contactRef.current.scrollIntoView(options);
            break;
          default:
            homeRef.current.scrollIntoView(options);
        }
      },
      isDrawer ? 100 : 0
    );
  };

  return (
    <div className={styles.rootElement}>
      <Header ref={homeRef} onScrollHandler={scrollToItem} />
      <Title whiteText="Featured" orangeText="Portfolio" />
      <AppsGrid ref={portfolioRef} />
      <Title whiteText="My" orangeText="Resume" />
      <ResumeCards ref={resumeRef} />
      <About ref={aboutRef} />
      <Title whiteText="My" orangeText="Services" />
      <Services />
      <Title whiteText="Get" orangeText="In Touch" />
      <GetInTouch ref={contactRef} />
      <p className={styles.footer}>
        Copyright © All rights reserved | Kacper Wojak Portfolio CV
      </p>
    </div>
  );
};

export default HomePage;
