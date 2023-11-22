import React from 'react';
import Gym from './Gym'

const GymCard = ({gyms, onDelete}) => {
    const renderGym = gyms.map((gymObj) =>{
        console.log(gymObj)
        return(
            <div key={gymObj.id} className='cards_item'>
            <Gym
                name={gymObj.name}
                rating={gymObj.rating}
                location={gymObj.location}
                description={gymObj.description}
                url={gymObj.image}
            />
            <button onClick={() => onDelete(gymObj.id)}>Delete Gym</button>
        </div>
    );
});
    return <ul className='cards'>{renderGym}</ul>
}

export default GymCard