import logo from './logo.svg';
import './App.css';
import Heading from './componnts/Heading/Heading';
import GridImage from './componnts/GridImage/GridImage';
import CardShow from './componnts/cardShow/CardShow';
import Switch from "react-switch";
import { useState } from 'react';




function App() {
  const [mode,setmode] =useState('light')
  const HandelMode = (){
    if(mode === 'light'){
      setmode('dark')
    }
    else{
      setmode('light')
    }
  }
  return (
    <>
    <Heading></Heading>
    <Switch onClick={}/>
    <GridImage></GridImage>
    <CardShow></CardShow>
    </>
  );
}

export default App;
