import React from 'react'

const Smily = () => {
  return (
    <div>
        <svg height={100} width={100}  >
            <circle cy={50} cx={50} r={40} fill='yellow' stroke='black' strokeWidth='2'/>

            <path
            //? M-> moveto L->Lineto C->curveto
                d='M30,30 L30,40
                   M70,30 L70,40
                   M25,55 C30,90 70,90 75,55
                '
                stroke='black'
                strokeWidth='2'
                fill='red'
            />
        </svg>
    </div>
  )
}

export default Smily