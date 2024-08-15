import React from "react";
import MySvgElement from "../components/MySvgElement";
import Smily from "../components/Smily.svg";
import NestedSelection from "../components/D3Practice/NestedSelection";
import DataBinding from "../components/D3Practice/DataBinding";
import BarChart from "../components/D3Practice/BarChart";

const Home = () => {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection:'column',
        margin:'5rem 0'
      }}
    >
      <MySvgElement />
      <Smily />
      <NestedSelection />
      <DataBinding />
      <BarChart />
    </div>
  );
};

export default Home;
