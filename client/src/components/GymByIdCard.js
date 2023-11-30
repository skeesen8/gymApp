import AddReview from "./AddReview"



export default function GymByIdCard({ name, rating, image }) {
  return (
    <div className="grid-container">
      <div className="single-card">
        <img className="single-image" src={image} alt={name} />
        <div className="single-content">
          <div className="single_title">{name}</div>
          <div className="single-details">
            <p>Rating: {rating}</p>
          </div>
          <div className="add-review-container">
            <AddReview />
          </div>
        </div>
      </div>
   
    </div>
  );
}