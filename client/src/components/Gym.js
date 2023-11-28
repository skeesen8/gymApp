import React, {useState} from 'react';
import { NavLink } from "react-router-dom"

function Gym({name, rating, location, description, image}) {
    const [renderDescription, setRenderDescription] = useState(true)
    const handleToggle = () => {
        setRenderDescription(!renderDescription)
    }
   
    return(
        <div className='cards_item'>
            <img onClick ={handleToggle} src={image} alt={name}/>
            <div className='card_content'></div>
            <div className='card_title'>{name}</div>
            {/* <p className='card_text'>{renderDescription ? description : ''}</p>  */}
            <div className='card_detail'>
                <p>Name : {name}</p>
                <p>Location : {location}</p>
                <p>Rating: {rating}</p>
            </div>
        </div>

    )
}
export default Gym;

