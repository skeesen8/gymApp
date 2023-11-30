import AddReview from "./AddReview"

export default function GymByIdCard({single,setSingle}){
    const renderReviews = single?.reviews?.map((review)=>{
        return (
        <ul>
             <li className="review-name">By:  {review.name}</li>
            <li className="review-description">Review:  {review.review_description} </li>
           
        </ul>
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
                <p>Reviews: {renderReviews}</p>

                <AddReview setSingle={setSingle}/>
                
            </div>
        </div>
  )
}

