import React from "react";
import {  NavLink } from "react-router-dom";

const Category = ({ categories }) => {
  return (
    <div>
      <div className="w-fit">
        <ul className=" flex flex-col justify-center gap-3 border-2 p-3 rounded-xl items-center  ">

        <li className="my-2"> <NavLink  className={({ isActive,  }) =>
                 isActive ? "active" : "pm"
              } to={"/"} > All Product</NavLink> </li>
          {categories.map((category) => (
           
           
            <NavLink   className={({ isActive,  }) =>
                 isActive ? "active" : "pm"
              } key={category.category} to={`/category/${category.category}`}>
              {" "}
              <li className=" ">{category.category}</li>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
