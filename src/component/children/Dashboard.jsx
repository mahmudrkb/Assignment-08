import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  getStoredPrice,
  getStoredProduct,
  getStoredWish,
} from "../utility/addToDb";
import Cart from "./Cart";
import WishList from "./WishList";
import { Helmet } from "react-helmet-async";
import { removeItem } from "localforage";

const Dashboard = () => {
  const [cartList, setCartList] = useState([]);
  const allProduct = useLoaderData();

  useEffect(() => {
    const getProduct = getStoredProduct();

    const getProductInt = getProduct.map((id) => parseInt(id));

    const cartProduct = allProduct.filter((product) =>
      getProductInt.includes(product.product_id)
    );

    setCartList(cartProduct);
  }, []);

  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const getProductWish = getStoredWish();

    const getProductWishInt = getProductWish.map((id) => parseInt(id));

    const wishProduct = allProduct.filter((productWish) =>
      getProductWishInt.includes(productWish.product_id)
    );

    setWishList(wishProduct);
  }, []);

  const [sortBy, setSortBy] = useState([]);

  const handleSort = (sortType) => {
    setSortBy(sortBy);

    if (sortBy) {
      const sortCart = [...cartList].sort((a, b) => b.price - a.price);
      setCartList(sortCart);
    }
  };

  const [cartPrice, setCartPrice] = useState([]);

  useEffect(() => {
    const getProductPrice = getStoredPrice() || [];

    const getPriceInt = getProductPrice.map((prices) => parseInt(prices));

    const cartProductPrice = allProduct.filter((prices) =>
      getPriceInt.includes(prices.price)
    );

    const totalPrice = cartProductPrice.reduce(
      (total, item) => total + item.price,
      0
    );

    setCartPrice(totalPrice);
  }, []);

  const navigate = useNavigate();

  const handlePurchase = () => {
    localStorage.clear();
    setCartList([]);
    setCartPrice(0);
    navigate("/");
    showModal(false);
    handleDisable ()
  };

  const [btnDisable, setBtnDisable] = useState(false);

  const handleDisable = () => {
    if (cartList.length === 0) {
      setBtnDisable(true);
    } else {
      setBtnDisable(false);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Gadget Heaven /Dashboard</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      {/* dashBoard banner  */}
      <div className="py-10 bg-purple-500 space-y-4 text-white text-center">
        <h2 className="text-4xl font-bold">DashBoard</h2>
        <p className="mx-auto w-5/6">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div>
        <Tabs>
          <TabList className="flex justify-center gap-3 bg-purple-500 pb-10">
            <Tab className="py-2 px-5 rounded-lg  border-2 border-white  font-semibold">
              Cart
            </Tab>
            <Tab className="py-2 px-5 rounded-lg  border-2 border-white  font-semibold">
              WishList
            </Tab>
          </TabList>

          <TabPanel className="pt-12 px-5 bg-slate-100">
            <div className="grid grid-cols-2 items-center">
              <h2 className="font-bold text-xl">Cart {cartList.length}</h2>
              <div className="flex justify-end items-center gap-3">
                <h3 className="font-semibold">Total Cost :$ {cartPrice} </h3>
                <button
                  onClick={handleSort}
                  className="py-2 px-5 rounded-2xl border-2 border-purple-500  font-semibold text-purple-500"
                >
                  {" "}
                  Sort By Price{" "}
                  <i className="  fa-solid fa-arrow-down-wide-short"></i>
                </button>

                <button
                  disabled={btnDisable}
                  
                  onClick={()=>document.getElementById('my_modal_8').showModal()}
                  className="py-2 px-5 rounded-2xl  border-2 border-white  font-semibold text-white bg-purple-500"
                >
                  Purchase
                </button>

                <dialog className="modal " role="dialog" id="my_modal_8">
                  <div className="modal-box ">
                    <img
                      className="mx-auto mt-5 mb-3"
                      src="https://i.ibb.co.com/Rvn9ngz/Group.png"
                      alt=""
                    />
                    <h3 className="text-lg font-bold text-center border-b-2 pb-3 ">
                      Payment Successfully
                    </h3>

                    <p className="py-4 text-center">Thanks for Purchasing</p>
                    <p className="text-center"> Total :$ {cartPrice}</p>
                    <div className="modal-action justify-center">
                      <form method="dialog"
                        onClick={handlePurchase}
                        className=" py-2 px-10 rounded-2xl  border-2 border-white  font-semibold text-white bg-purple-500 "
                      > <button>Close</button>
                        
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>

            {/* cart list div */}
            <div>
              {cartList.map((cart) => (
                <Cart cart={cart}></Cart>
              ))}
            </div>
          </TabPanel>

          <TabPanel className="pb-10 px-5 bg-slate-100">
            <div className="grid grid-cols-2 items-center">
              <h2 className="font-bold text-xl">WishList {wishList.length}</h2>
            </div>

            {/* wish list div */}
            <div>
              {wishList.map((wish) => (
                <WishList wish={wish}></WishList>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
