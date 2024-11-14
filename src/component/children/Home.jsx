import React from "react";
import Banner from "./Banner";
import Products from "./Products";
import Category from "./Category";
import { Outlet, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Gadget Heaven / Home Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <Banner></Banner>
      <div>
        <h3 className=" mb-10 text-center text-3xl font-semibold">
          Explore Cutting-Edge Gadgets
        </h3>

        <div className="flex  gap-4">
          <Category categories={categories}></Category>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
