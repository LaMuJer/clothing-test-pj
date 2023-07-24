import { useParams } from "react-router-dom";
import "./category.style.scss";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../contexts/Categories.context";
import ProductCard from "../../components/product-card/ProductCard";

const CategoryComponent = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categoriesMap[category]);
  
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category-container">
      {products &&
        products.map((product, idx) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default CategoryComponent;
