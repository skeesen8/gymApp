import React, {useEffect, useState} from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GymCard from './GymCard'
import Navbar from './Navbar'
import AddGymForm from "./AddGymForm";



function App() {

  const [gyms, setGym]=useState([])

  useEffect(()=> {
    fetch("http://localhost:5555/gyms")
    .then((resp)=> resp.json())
    .then((gymData)=>setGym(gymData))
  },[])

  const handleDeleteGym = (gymId) => {

    fetch(`http://localhost:5555/gyms/${gymId}`, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
      },
  })
  .then((response) => {
      if (response.ok) {
        
          setGym((prevGyms) => prevGyms.filter((gym) => gym.id !== gymId));
      } else {
        
          console.error('Failed to delete gym');
      }
  })
  .catch((error) => {
      console.error('Error:', error);
  });
};
  
  return (
    <div className='mainpage'>
        <Navbar />
        <AddGymForm/>
        <GymCard gyms={gyms} onDelete={handleDeleteGym}/>
    
    </div>

  )
}

export default App;
