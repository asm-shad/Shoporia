import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";

const placeholderProducts = [
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

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <GenderCollectionSection></GenderCollectionSection>
      <NewArrivals></NewArrivals>

      {/* Best Seller */}
      <h2 className="text-3xl text-center font-bold mb-4 ">Best Seller</h2>
      <ProductDetails></ProductDetails>

      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for Women
        </h2>
        <ProductGrid products={placeholderProducts}></ProductGrid>
      </div>
    </div>
  );
};

export default Home;
