import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="w-full sm:w-1/1 md:w-1/1 lg:w-1/1 xl:w-1/1 p-4">
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{review.bookTitle}</h3>
          <p className="text-gray-700 mb-2">Reviewer: {review.reviewer}</p>
          <p className="text-gray-700 mb-2">Rating: {review.rating}</p>
          <p className="text-gray-700">{review.review}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
