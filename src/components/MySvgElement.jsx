import React from 'react'

const MySvgElement = () => {
  return (
    <div>
        <svg height={500} width={500} style={{border:'2px solid red'}} >
            <rect height={100} width={100} x={20} y={20} fill='green' />
            <circle cy={150} cx={200} r={50} fill='blue' />
            <text x={250} y={250} fontSize={20} >
                hay abii good work
            </text>
        </svg>
    </div>
  )
}

export default MySvgElement