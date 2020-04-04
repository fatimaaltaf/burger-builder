import React from "react";
import Aux from "../../hoc/Aux";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Sidedrawer from "../Sidedrawer/Sidedrawer";
import "./Layout.css";
const Layout = props => {
  return (
    <Aux>
      <Toolbar />
      <Sidedrawer />
      <main className="Content">{props.children}</main>
    </Aux>
  );
};

export default Layout;
