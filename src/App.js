import React from "react";
import Store from "./Store/Store";
import Header from "./Components/Layout/Header";
import Calories from "./Components/Calories";

function App() {
  return (
    <div className="App">
      <Header />
      <Calories />
    </div>
  );
}

export default App;
