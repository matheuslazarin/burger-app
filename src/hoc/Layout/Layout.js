import React, {Component} from "react";
import Aux from "../Auxiliar"
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import classes from "./Layout.module.css";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  };

  sideDrawerOpenedHandler = () => {
    this.setState({showSideDrawer: true});
  };

  render() {
    return (
      <Aux>
        <Toolbar opened={this.sideDrawerOpenedHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout;