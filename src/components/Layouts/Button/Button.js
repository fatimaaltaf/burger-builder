import React from "react";

import "./Button.css";

const Button = props => (
  <button className={["Button", [props.buttonType]]} onClick={props.clicked}>
    {props.children}
  </button>
);

export default Button;
