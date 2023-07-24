import { Link, Outlet } from "react-router-dom";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./Navigation.jsx";

import Logo from "../../assets/o2.svg";
import { useContext } from "react";

import { UserContext } from "../../contexts/User.contenxt";
import { signOutUser } from "../../utils/firebase.util";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropDown from "../../components/cart-dropdown/CartDropDown";
import { CartContext } from "../../contexts/Cart.context";
import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector.js";

const NavigationComponent = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);

  // console.log(currentUser)

  return (
    <>
      <NavigationContainer>
        <LogoContainer to={"/"}>
          <img
            src={Logo}
            alt="logo"
            style={{
              width: "50px",
              height: "50px",
            }}
          />
        </LogoContainer>
        <NavLinks>
          <NavLink to={"/shop"}>SHOP</NavLink>
          {currentUser ? (
            <NavLink onClick={signOutUser}>Sign Out</NavLink>
          ) : (
            <NavLink to={"/sign-in"}>Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default NavigationComponent;
