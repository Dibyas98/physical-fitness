import React from 'react'
import './loardmore.css'

export default function LoardMore(props) {
    const Handelmore = () =>{
        props.load()
    }
  return (
    <div>
      <button className='button-3 m-7' onClick={Handelmore}>load more</button>
    </div>
  )
}
