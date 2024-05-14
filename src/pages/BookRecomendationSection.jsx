
import React from "react";

const BookRecommendationsSection = () => {
  const recommendationData = [
    {
      id: 1,
      bookTitle: "The Catcher in the Rye",
      reviewer: "Alice Johnson",
      review: "A timeless classic that everyone should read.",
      rating: 4.7,
    },
    {
      id: 2,
      bookTitle: "Pride and Prejudice",
      reviewer: "Michael Smith",
      review: "A delightful romance with memorable characters.",
      rating: 4.5,
    },
    {
      id: 3,
      bookTitle: "The Hobbit",
      reviewer: "Emma Brown",
      review: "A magical adventure that captivates readers of all ages.",
      rating: 4.8,
    },
  ];
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Book Recommendations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recommendationData.map((recommendation) => (
          <div
            key={recommendation.id}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden"
          >
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                {recommendation.bookTitle}
              </h3>
              <p className="text-gray-700 mb-2">
                Reviewer: {recommendation.reviewer}
              </p>
              <p className="text-gray-700 mb-2">
                Rating: {recommendation.rating}
              </p>
              <p className="text-gray-700">{recommendation.review}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookRecommendationsSection;
