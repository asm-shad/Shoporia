import React, { useState } from "react";
import { GiCrossedAirFlows } from "react-icons/gi";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  return (
    <div
      className={`fixed top-0 right-0 sm:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <GiCrossedAirFlows className="h-6 w-6 text-gray-600 hover:text-gray-800"></GiCrossedAirFlows>
        </button>
      </div>
      {/* Cart Content with scrollable area  */}
    </div>
  );
};

export default CartDrawer;
