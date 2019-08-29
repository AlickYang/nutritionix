import React, { useContext } from "react";
import MobileProfile from "../Profile/MobileProfile";
import { CalorieContext } from "../../Store/Store";
import DateTab from "./DateTab";
import SearchBar from "./SearchBar";
//Material UI
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import HeaderTheme from "./HeaderTheme";
import Hidden from "@material-ui/core/Hidden";

function Header() {
  const [data, setData] = useContext(CalorieContext);
  const classes = HeaderTheme();

  return (
    <AppBar position="static">
      <Grid container>
        <Grid item sm={4} />
        <Grid item xs={12} sm={4}>
          <Toolbar style={{ alignSelf: "center" }}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <SearchBar />
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
        </Grid>
      </Grid>
    </AppBar>
  );
}
export default Header;
