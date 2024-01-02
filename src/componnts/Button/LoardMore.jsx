import React from 'react'
import './loardmore.css'

export default function LoardMore(props) {
    const Handelmore = () =>{
        props.load()
    }
    const set={
      backgroundColor:'black',
      color:'white'
    }
  return (
    <div style={props.dark?set:{}}>
      <button  className='button-3 m-7' onClick={Handelmore}>load more</button>
    </div>
  )
}
