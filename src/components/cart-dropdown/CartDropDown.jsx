import "./cart-dropdown.style.jsx";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.context";
import { Link, useNavigate } from "react-router-dom";
import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.style.jsx";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const gotoCheckOut = () => {
    navigate("/checkout");
  };

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Link to={"/checkout"}>
        <Button onClick={gotoCheckOut}>CHECKOUT</Button>
      </Link>
    </CartDropDownContainer>
  );
};

export default CartDropDown;
