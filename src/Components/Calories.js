import React from "react";
import Grid from "@material-ui/core/Grid";
import FoodListContainer from "./FoodListContainer";
import DetailsContainer from "./DetailsContainer";

function Calories() {
  return (
    <Grid container>
      <Grid item xs={12} sm={5} md={4} lg={4} xl={4}>
        <DetailsContainer />
      </Grid>
      <Grid item xs={12} sm={7} md={8} lg={8} xl={8}>
        <FoodListContainer />
      </Grid>
    </Grid>
  );
}

export default Calories;
