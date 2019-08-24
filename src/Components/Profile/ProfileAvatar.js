import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const picAvatar = {
  height: 70,
  width: 70,
  backgroundColor: "grey",
  textAlign: "center"
};

const numAvatar = {
  height: 50,
  width: 50,
  backgroundColor: "grey",
  textAlign: "center"
};

export default function ProfileAvatar({ height, weight }) {
  return (
    <Grid container justify="center" alignItems="center" spacing={2}>
      <Grid item>
        <Avatar style={numAvatar}>
          <Typography variant="body2">
            {weight}
            kg
          </Typography>
        </Avatar>
      </Grid>
      <Grid item>
        <Avatar style={picAvatar} />
      </Grid>
      <Grid item>
        <Avatar style={numAvatar}>
          <Typography variant="body2">
            {height}
            cm
          </Typography>
        </Avatar>
      </Grid>
    </Grid>
  );
}
