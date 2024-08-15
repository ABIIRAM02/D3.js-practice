import React, { useEffect } from "react";
import * as d3 from "d3";
const NestedSelection = () => {
  useEffect(() => {
    const selectedDiv = d3.select(".div1");

    const selectedHeading = selectedDiv.select("h2");
    selectedHeading.style("background-color", "cyan");

    const selectAllParas = selectedDiv.selectAll("p");
    selectAllParas.style("color", "red");

    const selectedAllDivs = d3.selectAll(".div1");

    const selectFirstParas = selectedAllDivs.select("p");
    selectFirstParas.style("color", "blue");

    const selectedAllHeading = selectedAllDivs.select("h2");
    selectedAllHeading.style("color", "red");

  }, []);

  return (
    <>
      <div className="div1">
        <h2>Selection</h2>
        <p>My Paragraph</p>
        <p>My Paragraph</p>
        <p>My Paragraph</p>
      </div>
      <div className="div1">
        <h2>Nested Selection</h2>
        <p>My Paragraph</p>
        <p>My Paragraph</p>
        <p>My Paragraph</p>
      </div>
    </>
  );
};

export default NestedSelection;
