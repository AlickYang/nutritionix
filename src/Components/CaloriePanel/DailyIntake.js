import React, { Fragment, useContext } from "react";
//Store
import { CalorieContext, DateContext } from "../../Store/Store";
import SumDailyIntake from "../Util/SumIntake";
import CaloriesConsumed from "./CaloriesConsumed";
//UI
import DailyIntakeProgressBar from "./DailyIntakeProgressBar";
import DailyIntakeBreakdown from "./DailyIntakeBreakdown";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MatchDateToTab from "../Util/MatchDateToTab";

function DailyIntake() {
  const [data, setData] = useContext(CalorieContext);
  const [dateSelected, setDateSelected] = useContext(DateContext);
  const index = MatchDateToTab(dateSelected);
  const { breakdown, totalIntake } = SumDailyIntake(
    data.data_points[index].intake_list
  );
  console.log(breakdown);

  return (
    <Fragment>
      <CaloriesConsumed calories={totalIntake} />
      <DailyIntakeProgressBar total={totalIntake} />
      <DailyIntakeBreakdown breakdown={breakdown} />
    </Fragment>
  );
}

export default DailyIntake;
