import React, { Component } from "react";
import PropTypes from "prop-types";

import "./BurgerIngredient.css";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    // Dynamic ingredient
    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className="BreadBottom"></div>;
        break;
      case "bread-top":
        ingredient = (
          <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
          </div>
        );
        break;
      case "meat":
        ingredient = <div className="Meat"></div>;
        break;
      case "cheese":
        ingredient = <div className="Cheese"></div>;
        break;
      case "salad":
        ingredient = <div className="Salad"></div>;
        break;
      case "bacon":
        ingredient = <div className="Beef-Bacon"></div>;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

// Prop type validation: If use ingredient component is used w/o passing a type, will get an error
BurgerIngredient.propTypes = {
  type: PropTypes.string
};

export default BurgerIngredient;
