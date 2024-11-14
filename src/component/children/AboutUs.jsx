import React from "react";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>Gadget Heaven /About Us</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="bg-purple-500  text-center py-10 space-y-3 text-white">
        <h1 className="text-3xl font-semibold">About</h1>
        <p className="mx-auto w-4/5">
          Gadget Haven is a premier destination for all your gadget needs. We
          strive to offer the latest in tech products with a focus on quality,
          affordability, and exceptional customer service. Whether you're
          shopping for a new laptop, smartphone, or accessories, we’ve got you
          covered.
        </p>
      </div>

      {/* our team */}
      <div className=" my-10 ">
        <h2 className="text-3xl font-bold text-center text-purple-500 mb-2">
          {" "}
          Meet Our Team
        </h2>
        <p className="mx-auto w-3/5 text-center  mb-5">
          We’re a team of passionate tech enthusiasts dedicated to bringing you
          the best gadget shopping experience.
        </p>

        <img
          className="rounded-md bg-slate-200   p-10"
          src="https://i.ibb.co.com/L0NBRpL/rca-team-propper.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutUs;
