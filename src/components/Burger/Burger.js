import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

import "./Burger.css";

const Burger = props => {
  // Transform object of key value pairs into burger ingredients where value of
  const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    console.log("THIS IS...", props.ingredients);
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  });

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
