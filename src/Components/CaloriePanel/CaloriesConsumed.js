import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
function CaloriesConsumed({ calories }) {
  return (
    <Fragment>
      <Grid container>
        <Grid item sm={6}>
          <Typography variant="h4" align="left">
            {calories} cal
          </Typography>
          <Typography variant="caption" align="left">
            consumed
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography variant="h4" align="right">
            1500 cal
          </Typography>
          <Typography variant="caption" style={{ float: "right" }}>
            daily goal
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default CaloriesConsumed;
