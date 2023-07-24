import { useNavigate } from "react-router-dom";
import "./category.style.scss";

const CategoryItemComponent = ({ category }) => {
  const { title, imageUrl, route } = category;

  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(route);
  };

  return (
    <div className="category-container" onClick={navigateHandler}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItemComponent;
