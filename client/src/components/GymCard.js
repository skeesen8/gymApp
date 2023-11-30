import React, {useState, useEffect} from 'react';
import Gym from './Gym'

function GymCard(){
    const [gyms, setGym]=useState([])

  useEffect(()=> {
    fetch("http://localhost:5555/gyms")
    .then((resp)=> resp.json())
    .then((gymData)=>setGym(gymData))
  },[])


  const handleDeleteGym = (gymId) => {
    // Implement the logic to delete the gym on the server
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

  const renderGym = gyms.map((gymObj) => {
    return (
      <Gym
        key={gymObj.id}
        id={gymObj.id}
        name={gymObj.name}
        rating={gymObj.rating}
        location={gymObj.location}
        description={gymObj.description}
        image={gymObj.image}
        onDelete={handleDeleteGym}
      />
    );
  });

  return <ul className='cards'>{renderGym}</ul>;
}

export default GymCard
