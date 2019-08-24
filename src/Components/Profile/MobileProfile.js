import React, { Fragment, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import MobileAvatar from "./MobileAvatar";

//Store
import { CalorieContext } from "../../Store/Store";

function MobileProfile() {
  const [data, setData] = useContext(CalorieContext);
  return (
    <Fragment>
      <MobileAvatar
        first_name={data.first_name}
        height={data.height_cm}
        weight={data.weight_kg}
      />
    </Fragment>
  );
}

export default MobileProfile;
