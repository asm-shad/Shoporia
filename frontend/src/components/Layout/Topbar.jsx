import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";

const Topbar = () => {
  return (
    <div className="bg-jeny-red text-white">
      <div className="container mx-auto flex justify-between items-center py-3">
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="h-5 w-5"></TbBrandMeta>
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 w-5"></IoLogoInstagram>
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="h-5 w-5"></RiTwitterXLine>
          </a>
        </div>
        <div className="text-sm text-center flex-grow">
          <span>We ship worldwide - Fast and reliable shipping!</span>
        </div>
        <div className="text-sm hidden md:block">
          <a href="tel:+8801608898818" className="hover:text-gray-300">
            +880 1608 898818
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
