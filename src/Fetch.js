import React, { useState } from "react";
import axios from "axios";

const header = {
  "Content-Type": "application/json",
  "x-app-id": "2ce08ea0",
  "x-app-key": "79537980dcdf1bf0bfff85dd8573adff"
};
export default function Fetch() {
  const [searchParam, setSearchParam] = useState({
    query: ""
  });

  const onChange = event => {
    setSearchParam({ query: event.target.value });
  };
  const submit = event => {
    event.preventDefault();
    console.log(searchParam);
    axios
      .post(
        "https://trackapi.nutritionix.com/v2/natural/nutrients",
        searchParam,
        {
          headers: header
        }
      )
      .then(res => console.log(res.data));
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <input
            type="text"
            name="search"
            value={searchParam.query}
            onChange={onChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
