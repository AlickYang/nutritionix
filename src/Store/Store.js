import React, { useState, createContext } from "react";
import Data from "./Data";
//Contexts
export const CalorieContext = createContext();
export const DateContext = createContext();

//Reducer

//Store
export default function Store({ children }) {
  //Context for
  const [data, setData] = useState(Data);
  //Context for the date chosen tab
  const [dateSelected, setDateSelected] = useState(2);
  return (
    <DateContext.Provider value={[dateSelected, setDateSelected]}>
      <CalorieContext.Provider value={[data, setData]}>
        {children}
      </CalorieContext.Provider>
    </DateContext.Provider>
  );
}
