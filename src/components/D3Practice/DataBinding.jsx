import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const DataBinding = () => {
  const [rectData, setRectData] = useState([10, 20, 30]);
  const svgRef = useRef();

  useEffect(() => {
    
    const svgElem = d3.select(svgRef.current);
    
    // const firstRectData = svgElem.select('rect').datum(rectData)
    // const allRectData = svgElem.selectAll("rect").datum(rectData);
    const allRectDataSpread = svgElem.selectAll("rect").data(rectData);

    console.log(allRectDataSpread );
    
  }, []);

  return (
    <div>
      <h2>Data Binding</h2>
      <svg
        ref={svgRef}
        height={300}
        width={300}
        style={{ border: "2px solid red" }}
      >
        <rect />
        <rect />
        <rect />
      </svg>
    </div>
  );
};

export default DataBinding;
