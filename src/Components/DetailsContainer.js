import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import Profile from "./Profile/Profile";
import DailyIntake from "./CaloriePanel/DailyIntake";

const detailsStyle = {
  height: "100%",
  padding: 20,
  marginBottom: 10,
  marginTop: 10,
  backgroundColor: "whitesmoke"
};

function DetailsContainer() {
  return (
    <Paper style={detailsStyle}>
      <Hidden only="xs">
        <Profile />
      </Hidden>
      <DailyIntake />
    </Paper>
  );
}
export default DetailsContainer;
