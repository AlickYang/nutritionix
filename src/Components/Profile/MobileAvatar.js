import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";

import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const picAvatar = {
  height: 60,
  width: 60,
  marginTop: 10,
  marginBottom: 10,
  marginRight: 20,
  backgroundColor: "grey",
  textAlign: "center"
};

const numAvatar = {
  height: 60,
  width: 60,
  marginLeft: 10,
  backgroundColor: "grey",
  textAlign: "center"
};

function MobileAvatar({ first_name, weight, height }) {
  return (
    <Fragment>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item wrap="nowrap">
          <Avatar style={picAvatar} />
          <Typography variant="h5">{first_name}</Typography>
        </Grid>
        <Grid item xs={4} />
        <Grid item wrap="nowrap">
          <Avatar style={numAvatar}>
            <Typography variant="body2">
              {weight}
              kg
            </Typography>
          </Avatar>
          <Avatar style={numAvatar}>
            <Typography variant="body2">{height} cm</Typography>
          </Avatar>
        </Grid>
        {/* </Grid> */}
      </Grid>
    </Fragment>
  );
}

export default MobileAvatar;
