import React, {useState, useEffect} from 'react';
import { Link, useParams} from 'react-router-dom';
import AddReview from './AddReview';
import GymById from './GymById';

function Gym({ id, name, rating, location, description, image, onDelete}) {

    // console.log(id)
   
    const [renderDescription, setRenderDescription] = useState(true)
    const handleToggle = () => {
        setRenderDescription(!renderDescription)
    }
    // const [single, setSingle]=useState([])

    // useEffect(()=> {
    //     console.log('Fetching data for id:', id);
    //     fetch(`http://localhost:5555/gyms/${id}`)
    //     .then((resp)=> resp.json())
    //     .then((gymData)=>setSingle(gymData))
    // },[])
    
    const handleDelete = () => {
        // Call the onDelete function passed from the parent component
        onDelete(id);
      };
    
      return (
        <div className='cards_item'>
          <img onClick={handleToggle} src={image} alt={name} className='cards_image'/>
          <button>
            <Link to={`/gyms/${id}`} className="inner-text">
              View Gym
            </Link>
          </button>
          <div className='card_content'></div>
          <div className='card_title'>{name}</div>
          <p className='card_text'>{renderDescription ? description : ''}</p>
          <div className='card_detail'>
            <p>Name : {name}</p>
            <p>Location : {location}</p>
            <p>Rating: {rating}</p>
          </div>
          <button onClick={handleDelete}>Delete Gym</button>
        </div>
      );
    }
    
export default Gym;

