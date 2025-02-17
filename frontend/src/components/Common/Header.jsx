import React from "react";
import Topbar from "../Layout/Topbar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      {/* TopBar  */}
      <Topbar></Topbar>
      {/* NavBar  */}
      <Navbar></Navbar>
      {/* CardDrawer  */}
    </header>
  );
};

export default Header;
