import React, { useState, useEffect } from "react";
import axios from "axios";

import { BASE_URL } from "./apiEndPoints";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBookForm = ({}) => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [book, setBook] = useState({
    image: "",
    name: "",
    authorName: "",
    category: "",
    rating: 0,
  });

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/getbookbyid/${id}`);
      setBook(response.data);
    } catch (error) {
      console.error("Error fetching book:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${BASE_URL}/updatebook/${id}`, book);

      navigate("/all-book");
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  return (
    <div className=" min-h-screen container mx-auto">
      <h1
        className="text-center text-4xl font-bold "
        style={{ color: "#E46019 ", marginTop: "40px", marginBottom: "20px" }}
      >
        Update Book
      </h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Image:
          </label>
          <input
            type="text"
            name="image"
            value={book.image}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={book.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Author Name:
          </label>
          <input
            type="text"
            name="authorName"
            value={book.authorName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Category:
          </label>

          <input
            type="text"
            name="category"
            value={book.category}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Rating:
          </label>
          <input
            type="number"
            name="rating"
            value={book.rating}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className=" text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            style={{ background: "#F77D3A" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBookForm;
