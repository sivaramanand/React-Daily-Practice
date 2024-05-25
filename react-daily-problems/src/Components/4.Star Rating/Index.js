import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css"
const StarRating = ({ noOfStars }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);
  
    function handleClick(getCurrentIndex) {
      setRating(getCurrentIndex + 1);
    }
  
    function handleMouseEnter(getCurrentIndex) {
      setHover(getCurrentIndex + 1);
    }
  
    function handleMouseLeave() {
      setHover(null);
    }
  
    return (
      <div className="star-rating">
        {[...Array(noOfStars)].map((_, index) => {
          return (
            <FaStar
              key={index}
              className={index < (hover || rating) ? "active" : ""}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              size={40}
            />
          );
        })}
      </div>
    );
};

export default StarRating;
