import React, { useState, createContext } from "react";
import Data from "./Data";
//Contexts
export const CalorieContext = createContext();
export const DateContext = createContext();
export const AutoCompleteContext = createContext();

//Reducer

//Store
export default function Store({ children }) {
  //Context for given data
  const [data, setData] = useState(Data);
  //Context for the date chosen tab
  const [dateSelected, setDateSelected] = useState(2);
  //Context for auto complete
  const [autoComplete, setAutoComplete] = useState({
    common: [],
    branded: []
  });

  return (
    <DateContext.Provider value={[dateSelected, setDateSelected]}>
      <CalorieContext.Provider value={[data, setData]}>
        <AutoCompleteContext.Provider value={[autoComplete, setAutoComplete]}>
          {children}
        </AutoCompleteContext.Provider>
      </CalorieContext.Provider>
    </DateContext.Provider>
  );
}
