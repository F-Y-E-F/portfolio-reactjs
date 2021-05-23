import styles from "./App.module.css";
import Header from "./Header/Header";
import Title from "./UI/Title";
import AppsGrid from "./AppsGrid/AppsGrid";
import ResumeCards from "./Resume/ResumeCards";
import About from "./About/About";
import Services from "./Services/Services";
import GetInTouch from "./GetInTouch/GetInTouch";
function App() {
  return (
    <div className={styles.rootElement}>
      <Header />
      <Title whiteText="Featured" orangeText="Portfolio"/>
      <AppsGrid/>
      <Title whiteText="My" orangeText="Resume"/>
      <ResumeCards/>
      <About/>
      <Title whiteText="My" orangeText="Services"/>
      <Services/>
      <Title whiteText="Get" orangeText="In Touch"/>
      <GetInTouch/>
      <p className={styles.footer}>Copyright © All rights reserved | Kacper Wojak Portfolio CV</p>
    </div>
  );
}

export default App;
