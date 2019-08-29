import React, { Fragment, useState, useContext } from "react";

import HeaderTheme from "./HeaderTheme";
import { AutoComplete } from "../Util/AutoComplete/AutoComplete";
import { AutoCompleteContext } from "../../Store/Store";

import InputBase from "@material-ui/core/InputBase";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";

function SearchBar() {
  const [searchValue, setSearchValue] = useState({ query: "cheese" });
  const [popperOpen, setPopperOpen] = useState(false);
  const [autoComplete, setAutoComplete] = useContext(AutoCompleteContext);

  const onUserInput = event => {
    setSearchValue({ query: event.target.value });
  };

  const onSubmit = async event => {
    event.preventDefault();
    let results = await AutoComplete(searchValue);
    console.log(results);
    setAutoComplete({
      common: [...results.common],
      branded: [...results.branded]
    });
    results.common.map(item => console.log(item));
    // if (autoComplete.common.length !== 0 || autoComplete.branded.length !== 0) {
    setPopperOpen(true);
    // }

    console.log(autoComplete.common);
  };

  const classes = HeaderTheme();
  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <InputBase
          placeholder="Search foods..."
          value={searchValue.query}
          onChange={onUserInput}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </form>
      <Popper open={popperOpen}>
        <Paper>asd</Paper>
      </Popper>
    </Fragment>
  );
}

export default SearchBar;
