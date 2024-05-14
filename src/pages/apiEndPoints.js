// apiEndpoints.js

const BASE_URL = "http://localhost:3000"; // Change this to your API base URL

const API_ENDPOINTS = {
  ADD_BOOK: BASE_URL + "/api/addbook",
  GET_BOOKS: BASE_URL + "/api/books",
  // Define other endpoints here
};

export { BASE_URL, API_ENDPOINTS };
