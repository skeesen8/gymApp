import React, {useEffect, useState} from "react";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GymCard from './GymCard'
// import Navbar from './Navbar'
import AddGymForm from "./AddGymForm";


function App() {

  const [gyms, setGym]=useState([])

  useEffect(()=> {
    fetch("http://localhost:5555/addgym")
    .then((resp)=> resp.json())
    .then((gymData)=>setGym(gymData))
    .then (console.log(gyms))
  },[])
  
  return (
    <div className='mainpage'>
        <AddGymForm/>
        <GymCard gyms={gyms}/>
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path='' element={<GymCard />} />
          <Route />
          <Route  />
        </Routes>
      </Router> */}
    </div>

  )
}

export default App;
