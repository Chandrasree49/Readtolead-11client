import React from "react";

function Book({ book, onBorrowClick }) {
  return (
    <div>
      <h2>{book.name}</h2>
      <img src={book.image} alt={book.name} />
      <p>Author: {book.authorName}</p>
      <p>Category: {book.category}</p>
      <p>Rating: {book.rating}</p>
      <p>Description: {book.shortDescription}</p>
      <button onClick={onBorrowClick} disabled={book.quantity === 0}>
        Borrow
      </button>
    </div>
  );
}

export default Book;
