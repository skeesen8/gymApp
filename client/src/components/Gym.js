import React, {useState, useEffect} from 'react';
import { Link, useParams} from 'react-router-dom';

function Gym({  name, rating, location, description, image}) {
    let {id}= useParams()
    console.log(id)
   
    const [renderDescription, setRenderDescription] = useState(true)
    const handleToggle = () => {
        setRenderDescription(!renderDescription)
    }
    const [single, setSingle]=useState([])

    useEffect(()=> {
        console.log('Fetching data for id:', id);
        fetch(`http://localhost:5555/gyms/${id}`)
        .then((resp)=> resp.json())
        .then((gymData)=>setSingle(gymData))
    },[])
    
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
            </div>
        </div>

    )
}
export default Gym;

