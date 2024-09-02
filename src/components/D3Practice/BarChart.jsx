import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarChart = () => {
  const barData = [
    { name: "Emily", age: 28 },
    { name: "Michael", age: 15 },
    { name: "Sophia", age: 82 },
    { name: "James", age: 45 },
    { name: "Emma", age: 20 },
  ];

  const maxAge = d3.max(barData, d => d.age);
  const graphHeight = maxAge + 50;
  const barWidth = 50;
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const margin = { top: 20, right: 20, bottom: 50, left: 40 };
    const width = barWidth * barData.length + margin.left + margin.right;
    const height = graphHeight + margin.top + margin.bottom;

    svg.attr("width", width).attr("height", height);

    const xScale = d3.scaleBand()
      .domain(barData.map(d => d.name))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, maxAge])
      .nice()
      .range([height - margin.bottom, margin.top]);

    svg.append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale));

    svg.append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale));

    const allRectInSVG = svg.selectAll("rect").data(barData);

    allRectInSVG
      .enter()
      .append("rect")
      .attr("x", d => xScale(d.name))
      .attr("y", d => yScale(d.age))
      .attr("width", xScale.bandwidth())
      .attr("height", d => yScale(0) - yScale(d.age))
      .attr("stroke", "red")
      .attr("stroke-width", 3)
      .attr("fill", "pink");

    svg.selectAll(".age-label")
      .data(barData)
      .enter()
      .append("text")
      .attr("class", "age-label")
      .text(d => d.age)
      .attr("x", d => xScale(d.name) + xScale.bandwidth() / 2)
      .attr("y", d => yScale(d.age) - 5)
      .attr("fill", "red")
      .attr("text-anchor", "middle")
      .attr("font-weight", "bold");

  }, [barData, maxAge]);

  return (
    <div>
      <h2>Bar Chart</h2>
      <svg
        ref={svgRef}
        style={{ border: "2px solid red" }}
      ></svg>
    </div>
  );
};

export default BarChart;
