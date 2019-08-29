import React, { Fragment, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import moment from "moment";
import { IconButton } from "@material-ui/core";
import { DateContext } from "../../Store/Store";

function DateTab() {
  const [dateSelected, setDateSelected] = useContext(DateContext);
  const selected = ["Yesterday", "Today"];
  const dayTwo = new Date().toISOString(); //Format dd MMM (e.g. June 15)
  const formattedDate = moment(dayTwo).format("DD MMMM");
  selected.unshift(formattedDate);
  //Array is: [2 days ago, yesterday, today]
  //And starts at 'today' i.e. index 2

  const onRightClick = () => {
    //Prevent from going over
    if (dateSelected !== selected.length - 1) {
      setDateSelected(dateSelected + 1);
    }
  };

  const onLeftClick = () => {
    //Prevent underflow
    if (dateSelected !== 0) {
      setDateSelected(dateSelected - 1);
    }
  };

  return (
    <Fragment>
      <IconButton onClick={onLeftClick}>
        <KeyboardArrowLeft />
      </IconButton>
      <Container fixed>
        <Typography variant="h4" align="center">
          {selected[dateSelected]}
        </Typography>
      </Container>
      <IconButton onClick={onRightClick}>
        <KeyboardArrowRight />
      </IconButton>
    </Fragment>
  );
}

export default DateTab;
