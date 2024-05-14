import React from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <CategoryCard
        category="history"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjJdfwZNo4iO75ZiOp109r514Z-eOX9-x4EiJPjyo94g&s"
        name="History"
        info="Explore the past with these historical books."
      />
      <CategoryCard
        category="mysteries"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbTM2bd3XmVifodo_QSLOHE9F7_T123CcjRlok5v9SGQ&s"
        name="Mysteries"
        info="Solve thrilling mysteries with these books."
      />
      <CategoryCard
        category="science-math"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTApfxp8KCK26mhTAzgJKxv9T_R70DVGsrbQHzln5OKQw&s"
        name="Science & Math"
        info="Discover the wonders of science and math."
      />
      <CategoryCard
        category="horror"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRutVNfGvvMZUtEWiN8Mnm24nt4VD5Uxg5Xvbf92gudqacKv7hoVbKx8xXYuXcMzHGVR3I&usqp=CAU"
        name="Horror"
        info="Experience spine-chilling horror stories."
      />
    </div>
  );
};

export default Category;
