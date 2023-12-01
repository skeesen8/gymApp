import { useState } from "react"
import AddReview from "./AddReview"

export default function GymByIdCard({single}){
    const [viewReview, setViewReview] = useState(false)
    function toggleReview(){
        setViewReview(!viewReview)
    }
    const renderReviews = single?.reviews?.map((review)=>{  
        return (
        <div className="reviews-container">
            <h3 className="review-name">By:  {review.name}</h3>
            <button className= 'toggle-review-description 'onClick={toggleReview} > Reviews </button>
            <h3 className="review-description"> {viewReview ? review.review_description: ''}</h3>
           
        </div>
        )
        

    })
    
    
    return(
        <div>
            <img className= 'single-image'src={single.image}/>
            <div className='single_title'>{single.name}</div>
            
            <div className='single-details'>

                <p>description: {single.description} </p>
                <p>location: {single.location} </p>
                <p>Rating: {single.rating}</p>
                <AddReview/>
            </div>
            <div className="single-gym-review">
                <p>Reviews: {renderReviews}</p>
            </div>
                

                
                
           
        </div>
  )
}

