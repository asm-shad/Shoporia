import React, { useEffect, useState } from "react";
import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturesSection from "../components/Products/FeaturesSection";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductByFilters } from "../redux/slices/productsSlice";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [bestSellerProduct, setBestSellerProduct] = useState(null);

  useEffect(() => {
    // Fetch products for a specific collection
    dispatch(
      fetchProductByFilters({
        gender: "Women",
        category: "Bottom Wear",
        limit: 8,
      })
    );
    // Fetch best seller product
    const fetchBestSeller = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`
        );
        setBestSellerProduct(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBestSeller();
  }, [dispatch]);

  return (
    <div>
      <Hero></Hero>
      <GenderCollectionSection></GenderCollectionSection>
      <NewArrivals></NewArrivals>

      {/* Best Seller */}
      <h2 className="text-3xl text-center font-bold mb-4 ">Best Seller</h2>
      {bestSellerProduct ? (
        <ProductDetails productId={bestSellerProduct._id}></ProductDetails>
      ) : (
        <p className="text-center">Loading best seller product...</p>
      )}

      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for Women
        </h2>
        <ProductGrid
          products={products}
          loading={loading}
          error={error}
        ></ProductGrid>
      </div>

      <FeaturedCollection></FeaturedCollection>
      <FeaturesSection></FeaturesSection>
    </div>
  );
};

export default Home;
