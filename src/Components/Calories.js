import React from "react";
import Grid from "@material-ui/core/Grid";
import FoodList from "./FoodList";
import Details from "./Details";

const style = {
  // paper: {
  //   padding: 20,
  //   marginBottom: 10,
  //   marginTop: 10,
  //   backgroundColor: "whitesmoke"
  // }
};

function Calories() {
  return (
    <Grid container>
      <Grid item xs={12} sm={5} md={4} lg={4} xl={4}>
        <Details />
      </Grid>
      <Grid item xs={12} sm={7} md={8} lg={8} xl={8}>
        <FoodList styles={style} />
      </Grid>
    </Grid>
  );
}

export default Calories;
