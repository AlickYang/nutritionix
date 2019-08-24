import React, { Fragment } from "react";
import DailyIntakeProgressBar from "./DailyIntakeProgressBar";
import DailyIntakeBreakdown from "./DailyIntakeBreakdown";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function DailyIntake() {
  return (
    <Fragment>
      <Grid container>
        <Grid item sm={6}>
          <Typography variant="h4" align="left">
            1289 cal
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
      <DailyIntakeProgressBar />
      <DailyIntakeBreakdown />
    </Fragment>
  );
}

export default DailyIntake;
