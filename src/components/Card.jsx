import React, { useState } from "react";
import "../styles/Card.css";
import Star from "../assets/icon-star.svg";
import SecondCard from "./SecondCard";

const Card = () => {
   const [selectedRating, setSelectedRating] = useState("");
   const [submitted, setSubmitted] = useState(false);

   const clickedRatingHandler = (rating) => {
      setSelectedRating(rating);
   };

   const submitHandler = (e) => {
      e.preventDefault();
      setSubmitted(true);
   };

   return submitted ? (
      <SecondCard selectedRating={selectedRating} />
   ) : (
      <form onSubmit={submitHandler} className="card">
         <img src={Star} />
         <h1>How did we do?</h1>
         <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
         </p>
         <div className="ratings">
            {[1, 2, 3, 4, 5].map((rating, key) => (
               <button
                  type="button"
                  key={key}
                  onClick={() => clickedRatingHandler(rating)}
               >
                  {rating}
               </button>
            ))}
         </div>
         <button
            type="submit"
            disabled={!selectedRating}
            className="submit"
         >
            Submit
         </button>
      </form>
   );
};

export default Card;
