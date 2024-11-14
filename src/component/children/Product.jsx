import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { product_title, product_id, product_image, price } = product;

  return (
    <div>
      {/* product list  */}
      <div className="card bg-base-100 shadow-xl border-2 min-h-full ">
     <div>
     <figure className="">
          <img className="w-[130px] h-[130px]" src={product_image} alt={product_title} />
        </figure>
        <div className="card-body p-4">
          <h2 className=" font-semibold text-xl  ">{product_title}</h2>
          <p>Price : {price} $</p>
          <div className="card-actions">
            <Link to={`/products/${product_id}`} className="btn text-purple-600">Details</Link>
          </div>
        </div>
     </div>
      </div>
    </div>
  );
};

export default Product;
