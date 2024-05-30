import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../component/AuthProvider/AuthProvider";
import BorrowModal from "./BorrowModal";
import { BASE_URL } from "./apiEndPoints";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CardPayment from "../component/CardPayment";

function BookDetails() {
  const { user, logout } = useContext(AuthContext);
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [paymentDone, setPaymentDone] = useState(false);
  const [isBorrowed, setIsBorrowed] = useState("yes");
  const [showBorrowModal, setShowBorrowModal] = useState(false);

  const handlePaymentComplete = (paymentData) => {
    // Handle the payment data received from CardPayment component
    setPaymentDone(paymentData);
  };

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/getbookbyid/${id}`);
        setBook(response.data);
        console.log(response.data);
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
        setIsBorrowed(response.data.message);
        console.log(response.data.message);
      } catch (error) {
        console.error("Error checking borrowed status:", error);
      }
    };

    checkBorrowed();
  }, [id, user.email]);

  const handleBorrow = () => {
    setShowBorrowModal(true);
  };

  const [returnDate, setReturnDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!returnDate) {
      setErrorMessage("Please enter a return date");
      return;
    }

    try {
      await axios.post(`${BASE_URL}/api/borrow/${book._id}`, {
        userEmail: user.email,
        userName: user.displayName,
        returnDate,
        borroweddate: new Date().toISOString(),
      });

      onClose();
    } catch (error) {
      console.error("Error borrowing book:", error);
      toast.success("Borrow Failed");
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <ToastContainer />

      {book && (
        <div className="container mx-auto px-4 py-8">
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

              {isBorrowed == "no" && book.quantity > 0 && (
                <button
                  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  Borrow
                </button>
              )}
            </div>
          </div>

          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <p className="py-4">
                <h3 className="font-bold text-lg">Want to Borrow!</h3>
                <h2 className="font-bold text-lg">
                  Please Make Payment after that borrow button will be active!
                </h2>
                <p className="py-4">{<h1>Borrow {book.name}</h1>}</p>
              </p>
              {!paymentDone && (
                <CardPayment
                  onPaymentComplete={handlePaymentComplete}
                ></CardPayment>
              )}

              <div className="py-4">
                <form method="dialog">
                  <div>
                    <label>Return Date:</label>
                    <input
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                    />
                  </div>
                  <br />
                  <div>
                    <label>Name:</label>
                    <input
                      type="text"
                      value={user && user.displayName}
                      disabled
                    />
                  </div>
                  <br />
                  <div>
                    <label>Email:</label>
                    <input type="text" value={user && user.email} disabled />
                  </div>
                  <br />
                  <div>
                    <button
                      type="button"
                      disabled={!paymentDone}
                      onClick={handleSubmit}
                      className={
                        paymentDone
                          ? "bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600"
                          : "bg-gray-500 text-white font-semibold py-2 px-4 rounded hover:bg-gray-500"
                      }
                    >
                      Borrow Now
                    </button>
                    <br />
                  </div>
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>

          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Want to Borrow!</h3>
              <p className="py-4">{<h1>Borrow {book.name}</h1>}</p>

              <div className="modal-content">
                <form></form>
              </div>
              <button className="btn">Close</button>
            </div>
          </dialog>
        </div>
      )}

      {!book && <div>Loading.............</div>}
    </div>
  );
}

export default BookDetails;
