import React from "react";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";


import styles from './SideDrawer.module.css'

const SideDrawer = (props) => {
  const list = () => (
    <div
      role="presentation"
      onClick={props.closeDrawer()}
      onKeyDown={props.closeDrawer()}
    >
      <List className={styles.menuWrapper}>
          {[
            {
              title: "Home"
            },
            {
              title: "Portfolio"
            },
            {
              title: "Resume"
            },
            {
              title: "About"
            },
            {
              title: "Contact"
            },
          ].map((menuItem) => <span className={styles.menuItem} key={menuItem.title}>{menuItem.title.toUpperCase()}</span>)}
        
      </List>
    </div>
  );

  return (
    <SwipeableDrawer
      anchor={"top"}
      open={props.isDrawerOpen}
      onClose={props.closeDrawer()}
      onOpen={props.openDrawer()}
    >
      {list()}
    </SwipeableDrawer>
  );
};

export default SideDrawer;
