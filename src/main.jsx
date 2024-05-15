import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MainLayout from "./layout/MainLayout.jsx";
import AuthProvider from "./component/AuthProvider/AuthProvider.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import AddBook from "./pages/AddBook.jsx";
import AllBook from "./pages/AllBook.jsx";
import Details from "./pages/Details.jsx";
import ProtectedRoute from "./component/ProtectedRoute.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Category from "./pages/Category.jsx";
import BorrowBook from "./pages/BorrowBook.jsx";
import BooksByCategory from "./pages/BooksByCategory.jsx";
import BookDetails from "./pages/BookDetails.jsx";
import UpdateBookForm from "./pages/UpdateBookForm.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/Register",
        element: <Register />,
      },

      {
        path: "/add-book",
        element: <AddBook />,
      },
      {
        path: "/all-book",
        element: (
          <ProtectedRoute>
            <AllBook></AllBook>
          </ProtectedRoute>
        ),
      },
      {
        path: "/Details/:id",
        element: (
          <ProtectedRoute>
            <Details />
          </ProtectedRoute>
        ),
      },
      {
        path: "/Category/:id",
        element: (
          <ProtectedRoute>
            <Category />
          </ProtectedRoute>
        ),
      },

      {
        path: "/BorrowBook",
        element: (
          <ProtectedRoute>
            <BorrowBook></BorrowBook>
          </ProtectedRoute>
        ),
      },
      {
        path: "/bookbycategory/:category",
        element: (
          <ProtectedRoute>
            <BooksByCategory></BooksByCategory>
          </ProtectedRoute>
        ),
      },

      {
        path: "/update-book/:id",
        element: (
          <ProtectedRoute>
            <UpdateBookForm></UpdateBookForm>
          </ProtectedRoute>
        ),
      },

      {
        path: "/bookdetails/:id",
        element: (
          <ProtectedRoute>
            <BookDetails></BookDetails>
          </ProtectedRoute>
        ),
      },
      {
        path: "/borrowed-books",
        element: (
          <ProtectedRoute>
            <BorrowBook></BorrowBook>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
