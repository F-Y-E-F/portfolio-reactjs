import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import styles from "./Header.module.css";
import SideDrawer from "./SideDrawer";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleOpenDrawer = (isOpen) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(isOpen);
  };

  return (
    <div className={styles.wrapper}>
      <AppBar className={styles.mobileHeader} style={{ background: "#ffffff" }}>
        <Toolbar>
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={toggleOpenDrawer(true)}
          >
            <MenuIcon className={styles.menuIcon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SideDrawer toggleDrawer={(value) => toggleOpenDrawer(value)} isDrawerOpen={isDrawerOpen} />
      <header className={styles.header}>
        <span>HOME</span>
        <span>PORTFOLIO</span>
        <span>RESUME</span>
        <span>ABOUT</span>
        <span>CONTACT</span>
      </header>
      <div className={styles.titles}>
        <span className={styles.helloText}>Hello, I'm</span>
        <span className={styles.nameText}>Kacper Wojak</span>
        <span className={styles.portfolioText}>AND THIS IS MY POTFOLIO</span>
      </div>
    </div>
  );
};
export default Header;
