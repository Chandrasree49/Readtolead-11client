import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "./apiEndPoints";

function BorrowModal({ book, onClose, user }) {
  const [returnDate, setReturnDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  console.log(book);
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
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {/* <h2>Borrow {book.name}</h2> */}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Return Date:</label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
            {errorMessage && <p>{errorMessage}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default BorrowModal;
