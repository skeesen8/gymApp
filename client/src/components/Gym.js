import React, {useState, useEffect} from 'react';
import { Link, useParams} from 'react-router-dom';
import AddReview from './AddReview';

function Gym({ id, name, rating, location, description, image}) {

   
    const [renderDescription, setRenderDescription] = useState(true)
    const handleToggle = () => {
        setRenderDescription(!renderDescription)
    }
    
    
    return(
        <div className='cards_item'>
            <img onClick ={handleToggle} src={image} alt={name}/>
            <button><Link to={`/gyms/${id}`} className="inner-text">
                gym
            </Link>
            </button>
            <div className='card_content'></div>
            <div className='card_title'>{name}</div>
            <p className='card_text'>{renderDescription ? description : ''}</p> 
            <div className='card_detail'>
                <p>Name : {name}</p>
                <p>Location : {location}</p>
                <p>Rating: {rating}</p>
                <AddReview/>
               
            </div>
        </div>

    )
}
export default Gym;

