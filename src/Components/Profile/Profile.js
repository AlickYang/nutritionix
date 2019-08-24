import React, { Fragment, useContext } from "react";
import ProfileAvatar from "./ProfileAvatar";

//Store
import { CalorieContext } from "../../Store/Store";
//Material UI

import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: { flexGrow: 1 }
}));

function Profile() {
  const classes = useStyles();
  const [data, setData] = useContext(CalorieContext);

  return (
    <Fragment>
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={12} md={12}>
          <ProfileAvatar height={data.height_cm} weight={data.weight_kg} />
        </Grid>
        <Grid container justify="center" alignItems="center">
          <Typography variant="h5" gutterBottom>
            {data.first_name} {data.last_name}
          </Typography>
        </Grid>
      </Grid>
      <Divider style={{ marginTop: 30, marginBottom: 30 }} />
    </Fragment>
  );
}

export default Profile;
