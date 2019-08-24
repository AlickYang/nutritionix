import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import Profile from "./Profile/Profile";

function Details({ styles }) {
  return (
    <Paper style={styles.paper}>
      <Profile />
    </Paper>
  );
}
export default Details;
