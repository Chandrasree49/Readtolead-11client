import React, { useContext, useState, useEffect } from "react";
import { BASE_URL, API_ENDPOINTS } from "./apiEndPoints";
import { AuthContext } from "../component/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddBook = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user);
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    quantity: "",
    authorName: "",
    category: "Novel",
    shortDescription: "",
    rating: "",
    isBorrowed: false,
    borrower: "",
    borrowedBy: "",
    addedBy: "",
  });
  useEffect(() => {
    if (user && user.email) {
      setFormData((prevState) => ({
        ...prevState,
        addedBy: user.email,
      }));
    }
  }, [user]);
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "rating") {
      // Ensure rating is between 1 and 5
      const ratingValue = Math.max(1, Math.min(5, parseInt(value)));
      setFormData((prevState) => ({
        ...prevState,
        [name]: ratingValue,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_ENDPOINTS.ADD_BOOK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success("Book added successfully");
        console.log("Book added successfully");

        setFormData({
          image: "",
          name: "",
          quantity: "",
          authorName: "",
          category: "",
          shortDescription: "",
          rating: "",
          isBorrowed: false,
          borrower: "",
          borrowedBy: "",
          addedBy: "Admin",
        });
      } else {
        toast.success("Book add Failed");
        console.error("Error adding book:", response.statusText);
      }
    } catch (error) {
      toast.success("Book add Failed");
      console.error("Error adding book:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-4">Add Book</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="block font-medium mb-2">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="authorName" className="block font-medium mb-2">
            Author Name
          </label>
          <input
            type="text"
            id="authorName"
            name="authorName"
            value={formData.authorName}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block font-medium mb-2">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          >
            <option value="Novel">Novel</option>
            <option value="Thriller">Thriller</option>
            <option value="History">History</option>
            <option value="Drama">Drama</option>
            <option value="Sci-Fi">Sci-Fi</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="shortDescription" className="block font-medium mb-2">
            Short Description
          </label>
          <textarea
            id="shortDescription"
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="rating" className="block font-medium mb-2">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            min="1"
            max="5"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
