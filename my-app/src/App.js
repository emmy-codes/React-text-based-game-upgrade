import React from "react"
import './index.css';
import Controls from "./Controls"
import CenterText from "./CenterText"
import BottomBox from "./BottomBox";
import Inventory from "./Inventory";

function App() {
  return (
    <div>
      <Controls />
      <CenterText />
      <BottomBox />
      <Inventory />
    </div>
  );
}

export default App;
