import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import FoodList from "./FoodList";
import Details from "./Details";

const style = {
  paper: {
    padding: 20,
    marginBottom: 10,
    marginTop: 10
  }
};

function Calories() {
  return (
    <Grid container>
      <Grid item xs={4}>
        <Details styles={style} />
      </Grid>
      <Grid item xs={8}>
        <FoodList styles={style} />
      </Grid>
    </Grid>
  );
}

export default Calories;
