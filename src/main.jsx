import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./component/Root";
import Home from "./component/children/Home";
import ProductDetails from "./component/children/ProductDetails";
import Error from "./component/children/Error";
import Category from "./component/children/Category";
import Products from "./component/children/Products";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./component/children/Dashboard";
import AboutUs from "./component/children/AboutUs";

import {  HelmetProvider } from 'react-helmet-async';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categoryData.json"),
        children: [
          {
            path: "/",
            element: <Products></Products>,
            loader: () => fetch("../data.json"),
          },
          {
            path: "/category/:category",
            element: <Products></Products>,
            loader: () => fetch("../data.json"),
          },
        ],
      },

      {
        path: "/products/:product_id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/dashboard",
        element:<Dashboard></Dashboard>,
        loader: () => fetch("/data.json"),
       
      },
      {
        path:"/about",
        element:<AboutUs></AboutUs>

      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
    <RouterProvider router={router} />
    <ToastContainer
    	position="top-center"
    	/>
      </HelmetProvider>
      

  </StrictMode>
);
