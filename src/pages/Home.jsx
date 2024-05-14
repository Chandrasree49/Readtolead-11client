import React from "react";
import Hero from "../component/Hero";
import TabCat from "../component/TabCat";
import BookReviewsSection from "./BookReadSection";
import BookRecommendationsSection from "./BookRecomendationSection";
import Category from "./Category";

const Home = () => {
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  const token = getCookie("token");
  console.log(token);
  return (
    <div>
      <Hero></Hero>
      <Category></Category>
      <BookReviewsSection />
      <BookRecommendationsSection></BookRecommendationsSection>
    </div>
  );
};

export default Home;
