import React, { useContext } from "react";
import MobileProfile from "../Profile/MobileProfile";
import { CalorieContext } from "../../Store/Store";
import DateTab from "./DateTab";
//Material UI
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import HeaderTheme from "./HeaderTheme";
import Hidden from "@material-ui/core/Hidden";

function Header() {
  const [data, setData] = useContext(CalorieContext);
  const classes = HeaderTheme();

  return (
    <AppBar position="static">
      <Toolbar>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </Toolbar>
      <Hidden smUp>
        <Toolbar style={{ marginBottom: 10 }}>
          <MobileProfile />
        </Toolbar>
      </Hidden>
      <Hidden only="xs">
        <Toolbar>
          <DateTab />
        </Toolbar>
      </Hidden>
    </AppBar>
  );
}
export default Header;
