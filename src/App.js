import React from "react";
import "./styles.css";

import Navbar from "./Navbar";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <LeftContent />
        <RightContent />
      </div>
    </div>
  );
}
