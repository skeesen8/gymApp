import React, {useState, useEffect} from 'react';
import Gym from './Gym'

function GymCard(){
    const [gyms, setGym]=useState([])

  useEffect(()=> {
    fetch("http://localhost:5555/gyms")
    .then((resp)=> resp.json())
    .then((gymData)=>setGym(gymData))
  },[])
  console.log(gyms)
    const renderGym = gyms.map((gymObj) =>{
        return(
            <Gym
                key={gymObj.id}
                id = {gymObj.id}
                name={gymObj.name}
                rating={gymObj.rating}
                location={gymObj.location}
                description={gymObj.description}
                image={gymObj.image}
            />
        )
    })
    return <ul className='cards'>{renderGym}</ul>
}

export default GymCard
