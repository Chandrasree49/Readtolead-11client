import React from "react";
import { useNavigate } from "react-router-dom";

function CategoryCard({ category, image, name, info }) {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate(`/bookbycategory/${category}`);
  };

  return (
    <div
      className="max-w-xs rounded overflow-hidden shadow-lg m-4"
      onClick={handleCategoryClick}
    >
      <img className="w-full" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{info}</p>
      </div>
    </div>
  );
}

export default CategoryCard;
