import ProductCard from "../product-card/ProductCard";
import "./category-preview.style.scss";

const CategoryPreviewComponent = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title">{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreviewComponent;
