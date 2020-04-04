import React from "react";
import food from "../../assets/images/food.png";
import "./Logo.css";

const Logo = props => (
  <div className="Logo">
    <img src={food} alt="Burger logo" />
  </div>
);

export default Logo;
