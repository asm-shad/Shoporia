import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e) => {
    // Close sidebar if clicked outside
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    // Add Event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);
    // clean event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchProducts = [
        {
          _id: 1,
          name: "Floral Summer Dress",
          price: 120,
          images: [{ url: "https://picsum.photos/500/500?random=9" }],
        },
        {
          _id: 2,
          name: "Elegant Evening Gown",
          price: 250,
          images: [{ url: "https://picsum.photos/500/500?random=10" }],
        },
        {
          _id: 3,
          name: "Casual Denim Jacket",
          price: 180,
          images: [{ url: "https://picsum.photos/500/500?random=11" }],
        },
        {
          _id: 4,
          name: "Cozy Knit Sweater",
          price: 90,
          images: [{ url: "https://picsum.photos/500/500?random=12" }],
        },
        {
          _id: 5,
          name: "Chic High-Waisted Skirt",
          price: 150,
          images: [{ url: "https://picsum.photos/500/500?random=5" }],
        },
        {
          _id: 6,
          name: "Trendy Crop Top",
          price: 70,
          images: [{ url: "https://picsum.photos/500/500?random=6" }],
        },
        {
          _id: 7,
          name: "Luxury Silk Scarf",
          price: 200,
          images: [{ url: "https://picsum.photos/500/500?random=7" }],
        },
        {
          _id: 8,
          name: "Sporty Yoga Leggings",
          price: 130,
          images: [{ url: "https://picsum.photos/500/500?random=8" }],
        },
      ];
      setProducts(fetchProducts);
    }, 1000);
  }, []);
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Filter Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden border border-gray-200 p-2 justify-center items-center"
      >
        <FaFilter className="mr-2"></FaFilter>
      </button>
      {/* Filter SideBar */}
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterSidebar></FilterSidebar>
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collection</h2>

        {/* Sort Options */}
        <SortOptions></SortOptions>
        {/* ProductGrid */}
        <ProductGrid products={products}></ProductGrid>
      </div>
    </div>
  );
};

export default CollectionPage;
