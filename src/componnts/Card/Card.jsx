import React from 'react'
import './card.css'

export default function Card({exercis}) {
  return (
    <div className=' w-[450px] h-[500px] px-5 rounded-md card '>
        <img src={exercis.gifUrl} alt={exercis.name}  className='w-full h-4/5'/>
        <h1 className='text-xl font-bold'>{exercis.name}</h1>
        <p className='text-l'>{exercis.target}</p>
        <p className='text-l'>{exercis.bodyPart}</p>
      
    </div>
  )
}
