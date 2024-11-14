import React from "react";

const WishList = ({ wish }) => {
  return (
    <div>
      <div className=" mt-10 flex justify-center items-center gap-4 bg-white rounded-lg">
        <div className="flex items-center justify-between gap-5 ">
          <img
            className="w-[120px] flex justify-start"
            src={wish.product_image}
            alt=""
          />
          <div className="p-3">
            <h3 className="font-semibold text-xl">{wish.product_title}</h3>
            <p>{wish.description}</p>
            <h3 className="font-semibold">Price : $ {wish.price}</h3>

            <button className="py-2 px-3 rounded-xl  border-2 border-white  font-semibold text-white bg-purple-500" >Add To Cart</button>
          </div>
          <i className="text-red-700 fa-regular fa-circle-xmark"></i>
        </div>
      </div>
    </div>
  );
};

export default WishList;
