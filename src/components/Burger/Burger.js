import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

import "./Burger.css";

const Burger = props => {
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
    </div>
  );
};

export default Burger;
