import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

import classes from "./Toolbar.module.css";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.opened}/>
    <div className={classes.Logo + ' ' + classes.DesktopOnly}>
      <Logo/>
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems/>
    </nav>
  </header>
);

export default toolbar;