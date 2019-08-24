import React, { useState, createContext } from "react";
import Data from "./Data";
export const CalorieContext = createContext();

export default function Store({ children }) {
  const [data, setData] = useState(Data);
  return (
    <CalorieContext.Provider value={[data, setData]}>
      {children}
    </CalorieContext.Provider>
  );
}
