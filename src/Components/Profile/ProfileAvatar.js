import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const bigAvatar = {
  height: 70,
  width: 70,
  margin: 5,
  backgroundColor: "grey",
  textAlign: "center"
};

const smallAvatar = {
  height: 50,
  width: 50,
  margin: 5,
  backgroundColor: "grey",
  textAlign: "center"
};

export default function ProfileAvatar({ height, weight }) {
  return (
    <Grid container justify="center" alignItems="center" spacing={5}>
      <Grid item>
        <Avatar style={smallAvatar}>
          <Typography variant="body2">
            {weight}
            kg
          </Typography>
        </Avatar>
      </Grid>
      <Grid item>
        <Avatar style={bigAvatar} />
      </Grid>
      <Grid item>
        <Avatar style={smallAvatar}>
          <Typography variant="body2">
            {height}
            cm
          </Typography>
        </Avatar>
      </Grid>
    </Grid>
  );
}
