import React, { Fragment } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
function DailyIntakeBreakdownItem({ breakdownItem }) {
  return (
    <Fragment>
      <ListItem>
        <ListItemText
          primary={
            <Typography align="center" variant="h4">
              {breakdownItem.calories}
            </Typography>
          }
          secondary={
            <Typography variant="body2" align="center">
              {breakdownItem.meal_type}
            </Typography>
          }
        />
      </ListItem>
    </Fragment>
  );
}

export default DailyIntakeBreakdownItem;
