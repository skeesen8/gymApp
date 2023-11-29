import React from "react";
import { useState } from "react";


function AddReview (){

const [newReview,setReview] = useState('')

    function handleReview (e){
        setReview(e.target.value)
    }
    
    function handleSubmit(e){
        e.preventDefault();
        const newUserReview = {
            name:'Name',
            rating:'rating',
            review_description:newReview,
            gym_id: null,
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
        <input
        value={newReview}
        onChange={handleReview}
        placeholder="Enter Review Here"
        type='text'
        name='newReview'
        />

        <button type = 'submit' onClick={handleSubmit} > Add Review
        </button>
       
    </form>

)
}

export default AddReview