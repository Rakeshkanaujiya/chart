import React, { useState, useEffect } from "react";
import BarChart from "./component/BarChart";
import LineChart from "./component/LineChart";
import PieChart from "./component/PieChart";

const App = () => {
 
  

  return (
    <div style={{height:"100%" ,width:"98%", margin:"auto", marginBottom:"10px"}}>
    <BarChart/>
    <LineChart/>
    <PieChart/>
    </div>
  );
};

export default App;
