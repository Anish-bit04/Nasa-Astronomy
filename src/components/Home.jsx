import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import '../Home.css';

const Home = () => {
  const[Title, setTitle] = useState(" ");
  const[Date, setDate] = useState(null);
  const[Explanation, setExplanation] = useState(" ");
  const[img, setImg] = useState(" ");
  const url ="https://api.nasa.gov/planetary/apod?api_key=6SoyeiFIq9Bzojt5MrqHObVCjKVVEs6TJbymsKEM";

  const getResult = async () => {
    const result = await axios.get(url);
    setTitle(result.data.title);
    setDate(result.data.date);
    setExplanation(result.data.explanation);
    setImg(result.data.url);
  }

  getResult();
  return (
    <div>
      <div className="date">
      <h1>{Date}</h1>
      </div>
      <div className="image">
      <img src={img}  />
      </div>
      <div className="title">
      <h1>{Title}</h1>
      </div>
      <div className="exp">
        <h2>Explanation</h2>
     <div className="explanation"> 
     <h3>{Explanation}</h3>
     </div>
     </div>
     
      
    </div>
  )
}

export default Home