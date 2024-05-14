import React from "react";
import ReviewCard from "./ReviewCard";

const BookReviewsSection = () => {

  const reviewsData = [
    {
      id: 1,
      bookTitle: "The Great Gatsby",
      reviewer: "John Doe",
      review: "A masterpiece of American literature.",
      rating: 5,
    },
    {
      id: 2,
      bookTitle: "To Kill a Mockingbird",
      reviewer: "Jane Smith",
      review: "Powerful and thought-provoking.",
      rating: 4.5,
    },
    {
      id: 3,
      bookTitle: "1984",
      reviewer: "John Crew",
      review: "A chilling portrayal of a dystopian society.",
      rating: 4.8,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Book Reviews</h2>
      <div className="grid grid-cols-12 sm:grid-cols-6 md:grid-cols-3 gap-4">
        {reviewsData.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default BookReviewsSection;
