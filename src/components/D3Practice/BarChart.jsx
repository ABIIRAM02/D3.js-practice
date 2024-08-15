import React, { useRef } from 'react'
import * as d3 from 'd3'

const BarChart = () => {

    const barData = [10,20,30,60,40]
    const svgRef = useRef()

    const svg = d3.select(svgRef.current)
    const allRectInSVG = svg.selectAll('rect').data(barData)

    

  return (
    <div>
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
  )
}

export default BarChart