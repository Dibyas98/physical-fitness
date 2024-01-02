import React from 'react';
import './switch.css'
export default function Switch({mode,dark}) {
  const HandleToogle = () =>{
    mode()
  }
  const set={
    backgroundColor:'black',
    color:'white'
  }
  return (
    <div style={dark?set:{}} className="switch-cont" >
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="switch" onClick={HandleToogle}></label>
      </div>
  );
}
