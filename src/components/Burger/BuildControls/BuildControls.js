import React from "react";

import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  {label : 'Salad', type: 'salad'},
  {label : 'Bacon', type: 'bacon'},
  {label : 'Meat', type: 'meat'},
  {label : 'Cheese', type: 'cheese'},
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p><b>Current Price: {props.price.toFixed(2)}</b></p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.purchase}>ORDER NOW!</button>
  </div>
);

export default buildControls;