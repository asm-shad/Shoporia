import React, { useState } from "react";
// import { AiTwotoneShopping } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";

import { RiMenuFold3Line, RiShoppingBag4Line } from "react-icons/ri";

import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);


  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-2 sm:px-0">
        {/* Left-Logo */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            Shoporia
          </Link>
        </div>
        {/* Center NavIGATION LINK */}
        <div className="hidden md:flex space-x-6">
          <Link
            to={"#"}
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            MEN
          </Link>
          <Link
            to={"#"}
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Women
          </Link>
          <Link
            to={"#"}
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Top Wear
          </Link>
          <Link
            to={"#"}
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Bottom Wear
          </Link>
        </div>
        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-black">
            <FaRegUser className="h-6 w-6 text-gray-700"></FaRegUser>
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black"
          >
            <RiShoppingBag4Line className="h-6 w-6  text-gray-700"></RiShoppingBag4Line>
            <span className="absolute bg-jeny-red text-white text-xs rounded-full px-2 py-0.5 -top-1">
              4
            </span>
          </button>
          {/* Search */}
          <div className="overflow-hidden">
            <SearchBar></SearchBar>
          </div>

          <button className="md:hidden">
            <RiMenuFold3Line className="h-7 w-7 text-gray-700"></RiMenuFold3Line>
          </button>
        </div>
      </nav>
      <CartDrawer
        drawerOpen={drawerOpen}
        toggleCartDrawer={toggleCartDrawer}
      ></CartDrawer>
    </>
  );
};

export default Navbar;
