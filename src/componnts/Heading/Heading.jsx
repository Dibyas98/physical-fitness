import React from 'react'
import './heading.css'

export default function Heading({dark}) {
  const set={
    backgroundColor:'black',
    color:'white'
  }
  return (
    <div style={dark?set:{}} className='flex items-center justify-between pt-24 px-11 heading-cont'>
      <h1 className='text-3xl font-semibold w-3/12'>Where Fitness Meets Fun and Results Are Achieved</h1>
      <p>Include an inspiring image or video that showcases your gym's energetic atmosphere, trainers, or members working out.</p>
    </div>
  )
}
