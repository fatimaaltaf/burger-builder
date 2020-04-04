import React from "react";

import Logo from "../../components/Logo/Logo";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
import "./Sidedrawer.css";

const Sidedrawer = props => {
  return (
    <div className="Sidedrawer">
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default Sidedrawer;
