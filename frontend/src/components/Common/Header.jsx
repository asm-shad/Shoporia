import React from "react";
import Topbar from "../Layout/Topbar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      {/* TopBar  */}
      <Topbar></Topbar>
      {/* NavBar  */}
      <Navbar></Navbar>
      {/* CardDrawer  */}
    </header>
  );
};

export default Header;
