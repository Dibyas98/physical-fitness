import React from 'react'
import './card.css'

export default function Card({exercis,dark}) {
  const set={
    backgroundColor:'#1C264B',
    boxShadow: 'rgba(232, 232, 232, 0.2) 0px 2px 8px 0px'
  }
  return (
    <div style={dark?set:{}}  className=' w-[450px] h-[500px] px-5 rounded-md card pt-5'>
        <img src={exercis.gifUrl} alt={exercis.name}  className='w-full h-4/5 rounded-md' />
        <h1 className=' card-heading text-xl font-bold capitalize'>{exercis.name}</h1>
        <p className='text-l capitalize'>{exercis.target}</p>
        <p className='text-l capitalize float-right'>{exercis.bodyPart}</p>
      
    </div>
  )
}
