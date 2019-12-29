import React from "react";
import classes from "./Burguer.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient"

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
     .map(igKey => {
       return [...Array(props.ingredients[igKey])].map((_, i) =>
         <BurgerIngredient key={igKey + i} type={igKey}/>
       )
     })
    .reduce((arr, e) => {
      return arr.concat(e)
    }, []);
  if(transformedIngredients.length === 0) {
    transformedIngredients = <p>Please, start adding ingredients</p>
  }
  return (
    <div>
      <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom"/>
      </div>
    </div>
  );
};

export default burger;