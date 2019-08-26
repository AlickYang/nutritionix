import React, { Fragment } from "react";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItem from "@material-ui/core/ListItem";
import FoodListItemDetail from "./FoodListItemDetail";
function FoodListItem({ details }) {
  return (
    <Fragment>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt={details.food_name} src={details.thumb} />
        </ListItemAvatar>
        <FoodListItemDetail detail={details} />
      </ListItem>
      <Divider variant="inset" component="li" />
    </Fragment>
  );
}

export default FoodListItem;
