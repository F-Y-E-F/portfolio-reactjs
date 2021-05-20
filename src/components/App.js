import styles from "./App.module.css";
import Header from "./Header/Header";
import Title from "./UI/Title";
import AppsGrid from "./AppsGrid/AppsGrid";
import ResumeCards from "./Resume/ResumeCards";
import About from "./About/About";
import Services from "./Services/Services";

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
    </div>
  );
}

export default App;
