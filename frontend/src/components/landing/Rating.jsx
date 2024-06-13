import React, { useState } from 'react';

const Rating = ({ rating, onRatingChange }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (newRating) => {
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => (
        <span key={index} className="cursor-pointer">
          <svg
            onClick={() => handleClick(index + 1)}
            onMouseEnter={() => setHoverRating(index + 1)}
            onMouseLeave={() => setHoverRating(0)}
            className={`h-6 w-6 fill-current text-yellow-500 ${
              rating > index ? '' : 'opacity-50'
            }`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 15l-5.67 a5.37 5.37 0 0 1 0-7.98l5.67 -5.67L15 7.93l-5.67 5.67zM17.33 8.23l-2.83-2.83 1.41-1.41L20 10l-2.83 2.83-1.41-1.41z" />
          </svg>
        </span>
      ))}
    </div>
  );
};

export default Rating;
