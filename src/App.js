import React from "react";
import Header from "./Components/Layout/Header";
import Calories from "./Components/Calories";
import Fetch from "./Fetch";
function App() {
  return (
    <div className="App">
      <Header />
      <Calories />
      {/* <Fetch /> */}
    </div>
  );
}

export default App;
