import "./productCard.style.scss";
import Button, { Button_Types } from "../button/Button";
import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCard = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">  
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={Button_Types.inverted} onClick={addProductToCard}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
