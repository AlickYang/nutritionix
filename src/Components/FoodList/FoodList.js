import React, { useContext } from "react";
import { CalorieContext, DateContext } from "../../Store/Store";
import MatchDateToTab from "../Util/MatchDateToTab";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import FoodListItem from "./FoodListItem";
function FoodList() {
  const [data, setData] = useContext(CalorieContext);
  const [dateSelected, setDateSelected] = useContext(DateContext);
  const index = MatchDateToTab(dateSelected);
  const { intake_list } = data.data_points[index];

  return (
    <div>
      <List>
        {intake_list.map(item => (
          <FoodListItem details={item} key={item.name} />
        ))}
      </List>
    </div>
  );
}

export default FoodList;
