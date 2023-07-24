import { useContext } from "react";
import "./cart-icon.style.jsx";
import { CartContext } from "../../contexts/Cart.context";
import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./cart-icon.style.jsx";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon>🛒</ShoppingIcon>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
