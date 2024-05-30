import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "./apiEndPoints";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
<<<<<<< HEAD
import { FaList, FaTh, FaStar } from "react-icons/fa"; // Import icons from FontAwesome
=======
import { FaList, FaTh } from "react-icons/fa";
>>>>>>> c12cd11bd0effb189ef567a9c6115dbaf943481b
import ReactRating from "react-rating";
import { Link } from "react-router-dom";

const AllBook = () => {
  const [books, setBooks] = useState([]);
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [viewType, setViewType] = useState("card");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/allbook`);
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleFilter = () => {
    setShowAvailableOnly(!showAvailableOnly);
  };

  const handleChangeView = (type) => {
    setViewType(type);
  };

  const filteredBooks = showAvailableOnly
    ? books.filter((book) => book.quantity > 0)
    : books;

  return (
<<<<<<< HEAD
    <div>
      {!books && <span className="loading loading-spinner loading-lg"></span>}
      {books && (
        <div className="container mx-auto py-8">
          <div className="flex justify-between items-center mb-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              onClick={handleFilter}
=======
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          onClick={handleFilter}
        >
          {showAvailableOnly ? "Show All Books" : "Show Available Books"}
        </button>

        <div className="flex space-x-2">
          <FaList
            className={`text-xl cursor-pointer ${
              viewType === "table" ? "text-blue-500" : "text-gray-500"
            }`}
            onClick={() => handleChangeView("table")}
          />
          <FaTh
            className={`text-xl cursor-pointer ${
              viewType === "card" ? "text-blue-500" : "text-gray-500"
            }`}
            onClick={() => handleChangeView("card")}
          />
        </div>
      </div>

      {viewType === "card" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredBooks.map((book) => (
            <div
              key={book._id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
>>>>>>> c12cd11bd0effb189ef567a9c6115dbaf943481b
            >
              {showAvailableOnly ? "Show All Books" : "Show Available Books"}
            </button>
            {/* View type icons */}
            <div className="flex space-x-2">
              <FaList
                className={`text-xl cursor-pointer ${
                  viewType === "table" ? "text-blue-500" : "text-gray-500"
                }`}
                onClick={() => handleChangeView("table")}
              />
              <FaTh
                className={`text-xl cursor-pointer ${
                  viewType === "card" ? "text-blue-500" : "text-gray-500"
                }`}
                onClick={() => handleChangeView("card")}
              />
<<<<<<< HEAD
            </div>
          </div>

          {viewType === "card" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredBooks.map((book) => (
                <div
                  key={book._id}
                  className="bg-white shadow-md rounded-lg overflow-hidden"
                >
=======
              <div className="p-4">
                <h2 className="text-xl font-bold mb-4">{book.name}</h2>
                <p className="text-gray-700 mb-2">
                  {" "}
                  <span className="font-semibold">Author:</span>{" "}
                  {book.authorName}
                </p>
                <p className="text-gray-700 mb-4">
                  {" "}
                  <span className="font-semibold">Category:</span>{" "}
                  {book.category}
                </p>
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold ">Rating: </span>{" "}
                  <ReactRating initialRating={book.rating} readonly />
                </p>
                <Link
                  to={`/update-book/${book._id}`}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                >
                  Update
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Author</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Rating</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredBooks.map((book) => (
              <tr key={book._id}>
                <td className="border px-4 py-2">
>>>>>>> c12cd11bd0effb189ef567a9c6115dbaf943481b
                  <img
                    src={book.image}
                    alt={book.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{book.name}</h2>
                    <p className="text-gray-700 mb-2">
                      Author: {book.authorName}
                    </p>
                    <p className="text-gray-700 mb-2">
                      Category: {book.category}
                    </p>
                    <p className="text-gray-700 mb-2">
                      Rating:
                      <ReactRating initialRating={book.rating} readonly />
                    </p>
                    <Link
                      to={`/update-book/${book._id}`}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                    >
                      Update
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <table className="table-auto w-full">
              {/* Table headers */}
              <thead>
                <tr>
                  <th className="px-4 py-2">Image</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Author</th>
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2">Rating</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody>
                {filteredBooks.map((book) => (
                  <tr key={book._id}>
                    <td className="border px-4 py-2">
                      <img
                        src={book.image}
                        alt={book.name}
                        className="w-12 h-12 object-cover"
                      />
                    </td>
                    <td className="border px-4 py-2">{book.name}</td>
                    <td className="border px-4 py-2">{book.authorName}</td>
                    <td className="border px-4 py-2">{book.category}</td>
                    <td className="border px-4 py-2">
                      <ReactRating
                        initialRating={book.rating}
                        readonly
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded">
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default AllBook;
