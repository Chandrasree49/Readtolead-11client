import React, { useContext, useState, useEffect } from "react";
import { BASE_URL, API_ENDPOINTS } from "./apiEndPoints";
import { AuthContext } from "../component/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const BorrowBook = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const { user, logout } = useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    const fetchBorrowedBooks = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/borrowedbooks/${user.email}`
        );
        console.log(response.data);
        setBorrowedBooks(response.data);
      } catch (error) {
        console.error("Error fetching borrowed books:", error);
      }
    };

    fetchBorrowedBooks();
  }, [user]);

  const handleReturnBook = async (bookId) => {
    try {
      await axios.post(`${BASE_URL}/return/${bookId}/${user.email}`);
      setBorrowedBooks(borrowedBooks.filter((book) => book.id !== bookId));
      console.log("Book returned successfully");
    } catch (error) {
      console.error("Error returning book:", error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Borrowed Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {borrowedBooks.map((book) => (
          <div key={book.id} className="bg-white rounded shadow p-4">
            <img
              src={book.image}
              alt={book.name}
              className="w-full h-40 object-cover mb-4"
            />
            <h2 className="text-lg font-bold mb-2">{book.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{book.category}</p>
            <p className="text-sm text-gray-600 mb-2">
              Borrowed Date: {book.borrowedDate}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Return Date: {book.returnDate}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Borrowed Date: {book.borrowedDate}
            </p>

            <button
              onClick={() => handleReturnBook(book.id)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Return
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BorrowBook;
