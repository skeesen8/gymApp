import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GymCard from './GymCard'
import Navbar from './Navbar'

function App() {
  return (
    <div className='mainpage'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='' element={<GymCard />} />
          <Route />
          <Route  />
        </Routes>
      </Router>
    </div>

  )
}

export default App;
