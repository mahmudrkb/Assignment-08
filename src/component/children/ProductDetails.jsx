import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";import { addToStoredPrice, addToStoredProduct,addToStoredWish  } from '../../component/utility/addToDb';



const ProductDetails = () => {
  const { product_id } = useParams();
  const data = useLoaderData();
  const id = parseInt(product_id);
  const product = data.find((product) => product.product_id === id);

  const {
    product_image,
    product_title,
    price,
    availability,
    description,
    specification,
    rating,
  } = product;


  const handleMarkAsCart = (id) =>{
   
    addToStoredProduct(id);
}

const handleAddToWish = (id) =>{
    addToStoredWish(id);
}


const handleAddPrice=(prices)=>{
  addToStoredPrice(prices)
}






  return (
    <div className="bg-slate-100 pb-28" >
      {/* detail section banner */}
      <div className="pb-48 bg-purple-500 space-y-3 text-white text-center">
        <h2 className="text-4xl font-bold">Product Details</h2>
        <p className="mx-auto w-5/6">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      {/* product cart */}
      <div className=" -mt-36 rounded-xl w-3/4 mx-auto bg-white flex gap-4 p-4 ">
        <img  className="w-[350px] h-[350px] mx-auto " src={product_image} alt="" />

        <div className="space-y-3">
          <h3 className="text-3xl font-semibold">{product_title}</h3>
          <p className=" font-semibold text-lg">Price:$ {price}</p>
          <button className=" py-2 px-4 rounded-2xl hover:bg-slate-100 text-green-600 bg-green-200">{availability}</button>
          <p>{description}</p>
          <div>
            <h3 className="font-semibold text-lg">Specification :</h3>
            <div>
              <ol>
                {specification.map((specific, index) => (
                  <li key={index}>{specific}</li>
                ))}
              </ol>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Rating : </h4>
            <div className="flex ">
              <div className="rating mr-5">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
              </div>
              <div>{rating}</div>
            </div>
          </div>
         <div className="flex items-center gap-7">

         <button  onClick={() => {handleAddPrice(price); handleMarkAsCart(product_id)}} ><div className=" py-2 px-4 rounded-2xl text-white bg-purple-500 font-semibold hover:bg-purple-800">Add To Cart <i className="fa-solid fa-cart-shopping"></i></div> </button>

         <button onClick={() => handleAddToWish(product_id)}  ><i className="hover:bg-slate-200 border-2 rounded-full p-3 fa-regular fa-heart"></i> </button>
         </div>


        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
