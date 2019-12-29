import React from "react";
import Aux from "../../hoc/Auxiliar"
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import classes from "./Layout.module.css";

const layout = (props) => (
  <Aux>
    <Toolbar />
    <SideDrawer/>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
);

export default layout;