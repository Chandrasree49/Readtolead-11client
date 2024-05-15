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
    quantity: 0,
    authorName: "",
    category: "History",
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

    if (name === "quantity") {
      const quantity = parseInt(value);
      setFormData((prevState) => ({
        ...prevState,
        [name]: quantity,
      }));
    } else if (name === "rating") {
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
          quantity: 0,
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
        toast.error("Book add Failed");
        console.error("Error adding book:", response.statusText);
      }
    } catch (error) {
      toast.success("Book add Failed");
      console.error("Error adding book:", error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b ">
      <div
        className="container w-full max-w-xl p-8  rounded-lg shadow-lg flex flex-col items-center mx-auto"
        style={{ background: "#F3E6DE" }}
      >
        <ToastContainer />
        <h1 className="text-2xl font-bold mb-4">Add Book</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 ">
            <div className="mb-4 ">
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
            <div className="mb-4 ">
              <label htmlFor="image" className="block font-medium mb-2">
                Image URL
              </label>
              <input
                type="text"
                id="image"
                name="image"
                value={formData.image}
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
                min="1"
                max="500"
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
                <option value="">Select a category</option>
                <option value="History">History</option>
                <option value="Mysteries">Mysteries</option>

                <option value="Science">Science</option>
                <option value="Horror">Horror</option>
              </select>
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
            <div className="mb-4">
              <label
                htmlFor="shortDescription"
                className="block font-medium mb-2"
              >
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
              <label htmlFor=" BookContents" className="block font-medium mb-2">
                Book Contents
              </label>
              <textarea
                id="BookContents"
                name="BookContents"
                value={formData.BookContents}
                onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>
          </div>

          <button
            type="submit"
            className=" text-white px-20 py-2 rounded "
            style={{ background: "#F77D3A" }}
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
