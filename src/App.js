import logo from './logo.svg';
import './App.css';
import Heading from './componnts/Heading/Heading';
import GridImage from './componnts/GridImage/GridImage';
import CardShow from './componnts/cardShow/CardShow';

import { useState } from 'react';
import Switch from './componnts/switch/Switch'




function App() {
  const [dark,setdark] =useState(false)
  const HandelMode = ()=>{
    setdark(!dark)
    console.log(dark);
  }
  return (
    <>
    <Switch mode={HandelMode} dark ={dark}></Switch>
    <Heading dark ={dark}></Heading>
    <GridImage dark={dark}></GridImage>
    <CardShow dark={dark}></CardShow>
    </>
  );
}

export default App;
