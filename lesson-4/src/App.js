import "./App.css";
import React from "react";
import Classcountstudent from "./components/Classcountstudent/Classcountstudent";
import "bootstrap/dist/css/bootstrap.min.css";
import Count from "./components/Count/Count";

function App() {
  return (
    <div>
      <Classcountstudent />
      <Count />
    </div>
  );
}

export default App;
