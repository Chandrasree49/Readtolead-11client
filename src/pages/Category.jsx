import React from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold " style={{color:"#E46019 ",marginTop:"40px"}}>Book Category</h1>
      <p  className="text-center font-semibold my-10 ">Here are some categorywise book given.Anyone can choose their favourite books clicking this category.</p>
    <div className="flex flex-wrap justify-center">
      <CategoryCard
        category="History"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjJdfwZNo4iO75ZiOp109r514Z-eOX9-x4EiJPjyo94g&s"
        name="History"
        info="Explore the past with these historical books."
      />
      <CategoryCard
        category="Mysteries"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbTM2bd3XmVifodo_QSLOHE9F7_T123CcjRlok5v9SGQ&s"
        name="Mysteries"
        info="Solve thrilling mysteries with these books."
      />
      <CategoryCard
        category="Science"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTApfxp8KCK26mhTAzgJKxv9T_R70DVGsrbQHzln5OKQw&s"
        name="Science & Math"
        info="Discover the wonders of science and math."
      />
      <CategoryCard
        category="Horror"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRutVNfGvvMZUtEWiN8Mnm24nt4VD5Uxg5Xvbf92gudqacKv7hoVbKx8xXYuXcMzHGVR3I&usqp=CAU"
        name="Horror"
        info="Experience spine-chilling horror stories."
      />
    </div>
    </div>
  );
};

export default Category;
