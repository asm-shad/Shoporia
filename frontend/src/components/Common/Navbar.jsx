import React, { useState } from "react";
// import { AiTwotoneShopping } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";

import { RiMenuFold3Line, RiShoppingBag4Line } from "react-icons/ri";

import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { GiCrossedAirFlows } from "react-icons/gi";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

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
            to={"/collections/all"}
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
            <RiShoppingBag4Line className="h-6 w-6 text-gray-700 cursor-pointer"></RiShoppingBag4Line>
            <span className="absolute bg-jeny-red text-white text-xs rounded-full px-2 py-0.5 -top-1">
              4
            </span>
          </button>
          {/* Search */}
          <div className="overflow-hidden">
            <SearchBar></SearchBar>
          </div>

          <button onClick={toggleNavDrawer} className="md:hidden">
            <RiMenuFold3Line className="h-7 w-7 text-gray-700"></RiMenuFold3Line>
          </button>
        </div>
      </nav>
      <CartDrawer
        drawerOpen={drawerOpen}
        toggleCartDrawer={toggleCartDrawer}
      ></CartDrawer>
      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <GiCrossedAirFlows className="h-6 w-6 text-gray-600 hover:text-gray-800"></GiCrossedAirFlows>
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4">
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Men
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Women
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Top Wear
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
