import React from "react";
import MySvgElement from "../components/MySvgElement";
import Smily from "../components/Smily.svg";
import NestedSelection from "../components/D3Practice/NestedSelection";
import DataBinding from "../components/D3Practice/DataBinding";

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
    </div>
  );
};

export default Home;
