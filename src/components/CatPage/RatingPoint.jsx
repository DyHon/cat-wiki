import React from 'react'

function RatingPoint({propName, ratingPoint}) {
  return (
    <div className='space-x-2 flex justify-between'>
      <span className='font-bold'>{propName}: </span>
      <div className='space-x-2'>
        {
          [...Array(5).keys()].map(
            (x) => {
              if (x+1 <= ratingPoint)
                return <div key={x} className='inline-block h-3 w-20 rounded-lg bg-[#544439]'></div>
              else
                return <div key={x} className='inline-block h-3 w-20 rounded-lg bg-[#E0E0E0]'></div>
            }
          )
        }
      </div>
    </div>
  )
}

export default RatingPoint