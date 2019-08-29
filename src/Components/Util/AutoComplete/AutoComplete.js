import { header, nutiritonix_endpoint } from "./APIDetails";
import axios from "axios";

export const AutoComplete = async query => {
  // if (query.trim() === "") {
  //   throw new Error("Empty string");
  // }
  console.log(query);
  let common = [];
  let branded = [];
  await axios
    .post(nutiritonix_endpoint, query, {
      headers: header
    })
    .then(res => {
      console.log("Received");
      common = [...res.data.common];
      branded = [...res.data.branded];
    })
    .catch(err => {
      console.log(err);
    });
  return {
    common,
    branded
  };
};
