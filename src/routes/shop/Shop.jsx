import { Route, Routes } from "react-router-dom";
import "./shop.style.scss";
import CategoriesPreviewComponent from "../categories-preview/CategoriesPreview.component";
import CategoryComponent from "../category/Category.component";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreviewComponent />} />
      <Route path="/:category" element={<CategoryComponent />} />
    </Routes>
  );
};

export default Shop;
