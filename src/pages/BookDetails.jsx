import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../component/AuthProvider/AuthProvider";
import BorrowModal from "./BorrowModal";
import { BASE_URL } from "./apiEndPoints";

function BookDetails() {
  const { user, logout } = useContext(AuthContext);
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [isBorrowed, setIsBorrowed] = useState(false);
  const [showBorrowModal, setShowBorrowModal] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/getbookbyid/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBook();
  }, [id]);

  useEffect(() => {
    const checkBorrowed = async () => {
      try {
        const response = await axios.post(
          `${BASE_URL}/api/checkborrowed/${id}`,
          {
            userEmail: user.email,
          }
        );
        setIsBorrowed(response.data.message === "yes");
      } catch (error) {
        console.error("Error checking borrowed status:", error);
      }
    };

    checkBorrowed();
  }, [id, user.email]);

  const handleBorrow = () => {
    setShowBorrowModal(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {book ? (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={book.image}
            alt={book.name}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">{book.name}</h2>
            <p className="text-gray-700 mb-2">Author: {book.authorName}</p>
            <p className="text-gray-700 mb-2">Category: {book.category}</p>
            <p className="text-gray-700 mb-2">Rating: {book.rating}</p>
            <p className="text-gray-700 mb-4">
              Description: {book.shortDescription}
            </p>
            <button
              onClick={handleBorrow}
              className={`bg-blue-500 text-white font-semibold py-2 px-4 rounded ${
                book.quantity === 0 || isBorrowed
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-600"
              }`}
              disabled={book.quantity === 0 || isBorrowed}
            >
              {isBorrowed ? "Return" : "Borrow"}
            </button>
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              open modal
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center">Loading...</p>
      )}

      {showBorrowModal && (
        <BorrowModal
          book={book}
          onClose={() => setShowBorrowModal(false)}
          user={user}
        />
      )}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default BookDetails;
