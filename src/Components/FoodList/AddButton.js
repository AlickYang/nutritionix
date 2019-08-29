import React, { Fragment } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
function AddButton() {
  return (
    <div style={{ float: "right", marginTop: 10, marginRight: 10 }}>
      <Fab color="primary" size="medium">
        <AddIcon />
      </Fab>
    </div>
  );
}

export default AddButton;
