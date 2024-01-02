import React, { useEffect, useState } from "react";
import "./cardshow.css";
import axios from "axios";
import Card from "../Card/Card";
import LoardMore from "../Button/LoardMore";

export default function CardShow({dark}) {
  const [exercise, setExercise] = useState([]);
  const [numCard, setNumCard] = useState(21);
  const [search, setsearch] = useState('')
  const [SearchFilter,setSearchFilter] = useState([])
  // console.log(data);
  const set={
    backgroundColor:'black',
    color:'white'
  }

  useEffect(() => {
    async function fetchData() {
        const url = 'https://exercisedb.p.rapidapi.com/exercises?limit=1324';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '00c70e864fmsh295e2826a1bb966p14cb30jsne12f4f59c15c',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setExercise(result)
            console.log(result);
        } catch (error) {
            console.error(error);
        }

      
    }

    fetchData();
  }, []);
  const LoadMore = () =>{
    setNumCard(numCard+21)
  }

  const HandelSearch = (e)=>{
    setsearch(e.target.value)
    // console.log(search);
  }

  useEffect(() =>{
    const Handlefilter = exercise.filter((ele) =>{
        return (ele.target.toLowerCase().includes(search.toLowerCase()) || ele.bodyPart.toLowerCase().includes(search.toLowerCase()) || ele.name.toLowerCase().includes(search.toLowerCase()));
    })
    setSearchFilter(Handlefilter)
  },[exercise,search])

  

  return (
    <>
    <div style={dark?set:{}} className="w-full px-10 flex flex-col gap-5">
      <input
        type="text" onChange={HandelSearch}
        className="w-full h-11 text-m px-3 border-2 rounded"
        placeholder="Search by target, body part, or exercise"
      />
      <div className="flex card-cont justify-center">
      
        {SearchFilter.length>0 ? SearchFilter.slice(0,numCard).map((exercis) => (
            <Card key={exercis.id} exercis={exercis} dark={dark}></Card>
        )):
        exercise.slice(0, numCard).map((exercis) => (
            <Card key={exercis.id} exercis={exercis} dark={dark}></Card>
        ))}
      </div>
    </div>
    {
        numCard < (SearchFilter.length > 0 ? SearchFilter :exercise).length && (<LoardMore load={LoadMore} dark={dark}></LoardMore>)
    }
    
    </>
  );
}
