import React from "react";
import Paper from "@material-ui/core/Paper";
import FoodList from "./FoodList/FoodList";
import AddButton from "./FoodList/AddButton";

const foodListStyle = {
  height: "100%",
  padding: 20,
  marginBottom: 10,
  marginTop: 10
};
function FoodListContainer() {
  return (
    <Paper style={foodListStyle}>
      <FoodList />
      <AddButton />
    </Paper>
  );
}
export default FoodListContainer;
