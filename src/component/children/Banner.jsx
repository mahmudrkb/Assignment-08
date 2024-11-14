import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="mb-20">
      
      <div className="py-10 pb-48 bg-purple-500 rounded-b-xl text-center space-y-3   ">
        <h1 className="text-4xl text-white font-bold mx-auto w-5/6 ">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="mx-auto w-5/6 text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>

        <button className=" bg-white py-2 px-5 font-semibold rounded-full hover:bg-slate-300 text-purple-600
      ">
          <Link
            to={"/dashboard"}
            
          >
            Shop Now
          </Link>
        </button>
      </div>

      {/* img section  */}

      <div className=" bg-purple-500 rounded-xl w-3/4 mx-auto -mt-36  border-2 border-white p-3 bg-transparent ">
        <img
          className="rounded-xl "
          src="https://i.ibb.co.com/hsTDtpn/banner.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
