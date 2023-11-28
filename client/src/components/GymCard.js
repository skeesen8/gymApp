import React from 'react';
import Gym from './Gym'

const GymCard = ({gyms}) => {
    const renderGym = gyms.map((gymObj) =>{
        console.log(gymObj)
        return(
            <Gym
                key={gymObj.id}
                name={gymObj.name}
                rating={gymObj.rating}
                location={gymObj.location}
                description={gymObj.description}
                url={gymObj.url}
            />
        )
    })
    return <ul className='cards'>{renderGym}</ul>
}

export default GymCard