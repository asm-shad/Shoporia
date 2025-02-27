import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <GenderCollectionSection></GenderCollectionSection>
      <NewArrivals></NewArrivals>
    </div>
  );
};

export default Home;
