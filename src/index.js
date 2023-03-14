import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MuyiMainComponent from "./MuyiMainComponent";
import MuyiSigninForm from "./MuyiForm/MuyiSigninForm";
import MuyiSignupForm from "./MuyiForm/MuyiSignupForm";

const router = createBrowserRouter([
  { path: "/", element: <MuyiMainComponent /> },
  { path: "/signup", element: <MuyiSignupForm /> },
  { path: "/signin", element: <MuyiSigninForm /> },
  { path: "viewproduct/:id", element: <MuyiSigninForm /> },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
