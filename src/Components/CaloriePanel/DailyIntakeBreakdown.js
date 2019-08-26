import React, { Fragment } from "react";
import List from "@material-ui/core/List";
import DailyIntakeBreakdownItem from "./DailyIntakeBreakdownItem";

function DailyIntakeBreakdown({ breakdown }) {
  console.log("My breakdown");
  console.log(breakdown);
  return (
    <Fragment>
      <List
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        {breakdown.map(meal => (
          <DailyIntakeBreakdownItem breakdownItem={meal} />
        ))}
      </List>
    </Fragment>
  );
}

export default DailyIntakeBreakdown;
