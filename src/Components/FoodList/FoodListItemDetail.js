import React, { Fragment } from "react";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
function FoodListItemDetail({ detail }) {
  const capitalize = ([first, ...rest]) =>
    first.toUpperCase() + rest.join("").toLowerCase();

  const {
    food_name,
    nf_calories,
    serving_qty,
    serving_unit,
    serving_weight_grams
  } = detail;
  const servingDetails = `${serving_qty} ${serving_unit} (${serving_weight_grams *
    serving_qty}g)`;

  const meal_type = capitalize(detail.meal_type);
  const calories = Math.round(serving_qty * nf_calories);

  return (
    <Fragment>
      <ListItemText
        style={{ textTransform: "capitalize" }}
        primary={<span style={{ fontWeight: 600 }}>{food_name}</span>}
        secondary={servingDetails}
      />
      <ListItemSecondaryAction>
        <Container>
          <ListItemText
            style={{ textAlign: "right" }}
            primary={<span style={{ fontWeight: 600 }}>{calories} cal</span>}
            secondary={meal_type}
          />
        </Container>
      </ListItemSecondaryAction>
    </Fragment>
  );
}

export default FoodListItemDetail;
