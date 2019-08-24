import React, { Fragment } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
function DailyIntakeBreakdown() {
  return (
    <Fragment>
      <List
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <ListItem>
          <ListItemText
            primary={
              <Typography align="center" variant="h4">
                100
              </Typography>
            }
            secondary={
              <Typography variant="body2" align="center">
                Breakfast
              </Typography>
            }
          />
          <ListItemText
            primary={
              <Typography align="center" variant="h4">
                570
              </Typography>
            }
            secondary={
              <Typography variant="body2" align="center">
                Lunch
              </Typography>
            }
          />
          <ListItemText
            primary={
              <Typography align="center" variant="h4">
                453
              </Typography>
            }
            secondary={
              <Typography variant="body2" align="center">
                Dinner
              </Typography>
            }
          />
          <ListItemText
            primary={
              <Typography align="center" variant="h4">
                133
              </Typography>
            }
            secondary={
              <Typography variant="body2" align="center">
                Snacks
              </Typography>
            }
          />
        </ListItem>
      </List>
    </Fragment>
  );
}

export default DailyIntakeBreakdown;
