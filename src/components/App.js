import styles from "./App.module.css";
import Header from "./Header/Header";
import Title from "./UI/Title";
import AppsGrid from "./AppsGrid/AppsGrid";
import ResumeCards from "./Resume/ResumeCards";
import About from "./About/About";
import Services from "./Services/Services";
import GetInTouch from "./GetInTouch/GetInTouch";
import React,{useRef} from "react";
function App() {

  const homeRef = useRef(null);
  const portfolioRef = useRef(null);
  const resumeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);


  const scrollToItem = (ref,isDrawer) =>{
    const options = { behavior: 'smooth', block: 'start'}
    setTimeout(function() {
      switch(ref){
        case 'home': homeRef.current.scrollIntoView(options);break;
        case 'portfolio': portfolioRef.current.scrollIntoView(options);break;
        case 'resume': resumeRef.current.scrollIntoView(options);break;
        case 'about': aboutRef.current.scrollIntoView(options);break;
        case 'contact': contactRef.current.scrollIntoView(options);break;
        default: homeRef.current.scrollIntoView(options);
      }
   }, isDrawer ? 100:0);
  }


  return (
    <div className={styles.rootElement}>
      <Header ref={homeRef} onScrollHandler={scrollToItem}/>
      <Title whiteText="Featured" orangeText="Portfolio"/>
      <AppsGrid ref={portfolioRef} />
      <Title whiteText="My" orangeText="Resume"/>
      <ResumeCards ref={resumeRef}/>
      <About ref={aboutRef}/>
      <Title whiteText="My" orangeText="Services"/>
      <Services/>
      <Title whiteText="Get" orangeText="In Touch"/>
      <GetInTouch ref={contactRef}/>
      <p className={styles.footer}>Copyright © All rights reserved | Kacper Wojak Portfolio CV</p>
    </div>
  );
}

export default App;
