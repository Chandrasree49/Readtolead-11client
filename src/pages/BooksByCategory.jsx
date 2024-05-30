import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL, API_ENDPOINTS } from "./apiEndPoints";

function BooksByCategory() {
  const { category } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/booksbycat/${category}`
        );
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [category]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {books.map((book) => (
        <div
          key={book._id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <img
            src={book.image}
            alt={book.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{book.name}</h2>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Author:</span> {book.authorName}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Category: </span>
              {book.category}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Rating: </span>
              {book.rating}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Quantity: </span>
              {book.quantity}
            </p>

            <Link
              to={`/bookdetails/${book._id}`}
              className="btn btn-outline btn-primary"
            >
              Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BooksByCategory;
