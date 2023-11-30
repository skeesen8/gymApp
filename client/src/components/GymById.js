import React, {useState, useEffect} from 'react';
import { Link, useParams} from 'react-router-dom';
import AddReview from './AddReview';
import GymByIdCard from './GymByIdCard';

function GymById() {
    let {id}= useParams()
    const [single, setSingle]=useState([])
    console.log(single)

    useEffect(()=> {
        console.log('Fetching data for id:', id);
        fetch(`http://localhost:5555/gyms/${id}`)
        .then((resp)=> resp.json())
        .then((gymData)=>setSingle(gymData))
    },[])
    
    const renderGym = (
        <GymByIdCard
            key={single.id}
            id={single.id}
            name={single.name}
            rating={single.rating}
            location={single.location}
            description={single.description}
            image={single.image}
        />
    )

    
    return(
        <div>
            <h3>{renderGym}</h3>
        </div>

    )
}

export default GymById