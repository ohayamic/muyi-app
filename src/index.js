import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MuyiMainComponent from "./MuyiMainComponent";
import MuyiEditForm from "./MuyiForm/MuyiEditForm";
import MuyiForm from "./MuyiForm/MuyiForm";

const router = createBrowserRouter([
  { path: "/", element: <MuyiMainComponent /> },
  { path: "/signup", element: <MuyiForm /> },
  { path: "/signin", element: <MuyiEditForm /> },
  { path: "viewproduct/:id", element: <MuyiEditForm /> },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
