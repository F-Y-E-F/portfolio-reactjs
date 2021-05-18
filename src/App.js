import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Title from "./components/UI/Title";
import AppsGrid from "./components/AppsGrid/AppsGrid";

function App() {
  return (
    <div className={styles.rootElement}>
      <Header />
      <Title whiteText="Featured" orangeText="Portfolio"/>
      <AppsGrid/>
    </div>
  );
}

export default App;
