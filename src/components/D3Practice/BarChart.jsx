import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarChart = () => {
  const barData = [10, 20, 30, 60, 40];
  const barWidth = 50;
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const allRectInSVG = svg.selectAll("rect").data(barData);

    allRectInSVG
      .attr("width", barWidth)
      .attr("height", (dataValue) => dataValue)
      .attr("x", (dataValue, index) => index * barWidth)
      .attr("stroke", "red")
      .attr("stroke-width", 3)
      .attr("fill", "pink");
  }, [barData]);

  return (
    <div>
      <h2>Bar Chart</h2>
      <svg
        ref={svgRef}
        height={300}
        width={300}
        style={{ border: "2px solid red" }}
      >
        <rect />
        <rect />
        <rect />
        <rect />
        <rect />
      </svg>
    </div>
  );
};

export default BarChart;
