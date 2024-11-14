import React, { useEffect, useState } from "react";
import Product from "./Product";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";


const Products = () => {
  const data = useLoaderData();
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!category) {
      setProducts(data);
    } else {
      const filterByCategory = [...data].filter(
        (product) => product.category === category
      );
      setProducts(filterByCategory);
    }
  }, [category, data]);

  return (
    <div>
      <div className="space-y-10">
        <div className="flex   gap-4  ">
          {" "}
          {products.length === 0 ? (
           
             <h1 className="font-bold  mt-24 ml-24 text-purple-500 text-4xl"> No Information Available</h1>
           
          ) : (
            <div className="grid grid-cols-4 gap-4  ">
              {products.map((product, index) => (
                <Product key={index} product={product}></Product>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
