import React from "react";
import { useState,useEffect } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";



function AddReview (){

        let {id}= useParams()
        const [single, setSingle]=useState([])
        console.log(id)
    
        // useEffect(()=> {
        //     console.log('Fetching data for id:', id);
        //     fetch(`http://localhost:5555/gyms/${id}`)
        //     .then((resp)=> resp.json())
        //     .then((gymData)=>setSingle(gymData))
        // },[])

const [newReview,setReview] = useState('')
const [newGymId,setGymId] = useState('')



    function handleReview (e){
        setReview(e.target.value)
    }
    
    
    function handleSubmit(e){
        e.preventDefault();
        const newUserReview = {
            name:'Name',
            rating:'rating',
            review_description:newReview,
            gym_id: parseInt(id),
            user_id:'user_id'
        }
        console.log(newUserReview)
        fetch("http://localhost:5555/reviews",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(newUserReview),
        })
        .then(response => response.json())
        .then(console.log)
        
        

    }

return(
    <form>
        <Navbar/>
        <input
        value={newReview}
        onChange={handleReview}
        placeholder="Enter Review Here"
        type='text'
        name='newReview'
        />
        {/* <select
        value = {newGymId}
        onChange ={handleGymId}
        placeholder ="select gym"
        type = 'dropdown'
        name = 'newGymId'>
            <option value="someOption"></option>
            <option value="otherOption">24 Hour Fitness</option>

        </select>
         */}

        <button type = 'submit' onClick={handleSubmit} > Add Review
        </button>
       
    </form>

)

}

export default AddReview