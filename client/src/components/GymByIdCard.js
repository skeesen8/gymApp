import AddReview from "./AddReview"

export default function GymByIdCard({name, rating, image}){
    return(
        <div>
            <img className= 'single-image'src={image}/>
            <div className='single_title'>{name}</div>
            
            <div className='single-details'>

                <p>Rating: {rating}</p>
                <AddReview/>
                
            </div>

        </div>
    )
}