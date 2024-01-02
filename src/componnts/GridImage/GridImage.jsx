import React from 'react'
import './gridImage.css'
import st1 from './Assects/1.jpg'
import st2 from './Assects/2.jpeg'
import st3 from './Assects/3.jpg'
import st4 from './Assects/4.jpg'
import st5 from './Assects/5.webp'
import st6 from './Assects/6.avif'

export default function GridImage() {
  return (
    <div className='gridImage-cont'>
      <div>
        <img src={st1} alt="" className='w-full h-full'/>
      </div>
      <div>
        <img src={st2} alt="" className='w-full h-full'/>
      </div>
      <div className='img-3'>
        <img src={st3} alt=""  className='w-full h-full'/>
      </div>
      <div className='img-4'>
        <img src={st4} alt="" className='w-full h-full'/>
      </div>
      <div>
        <img src={st5} alt="" className='w-full h-full'/>
      </div>
      <div>
        <img src={st6} alt="" className='w-full h-full'/>
      </div>
    </div>
  )
}
