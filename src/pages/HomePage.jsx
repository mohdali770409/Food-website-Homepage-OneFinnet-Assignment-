import React from "react";
import HeroSection from "../components/HeroSection";
import CategorySection from "../components/CategorySection";
import Navbar from "../components/Navbar";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategorySection />
    </div>
  );
};

export default HomePage;
