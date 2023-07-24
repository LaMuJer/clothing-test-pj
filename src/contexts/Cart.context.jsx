import { createContext, useEffect, useState, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
  // find if contains
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // if found , icrease quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // return a new array with modified cartItems / new cart item
  return [
    ...cartItems,
    {
      ...productToAdd,
      quantity: 1,
    },
  ];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is , Remove that item from the cart
  if (cartItemToRemove.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartItems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

const USER_ACTION_TYPE = {
  ADD_CART_ITEM: "ADD_CART_ITEM",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  console.log(payload);

  switch (type) {
    case USER_ACTION_TYPE.ADD_CART_ITEM:
      return {
        ...state,
        ...payload,
      };

    case USER_ACTION_TYPE.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    default:
      throw new Error("Unhandled Type for Cart Reducer");
  }
};

export const CartProvider = ({ children }) => {
  //   for reducer
  const [{ cartItems, cartCount, cartTotal, isCartOpen }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    dispatch(
      createAction(USER_ACTION_TYPE.ADD_CART_ITEM, {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      })
    );
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemReducer(newCartItems);
  };

  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemReducer(newCartItems);
  };

  const clearItemFromCart = (cartItemToRemove) => {
    const newCartItems = clearCartItem(cartItems, cartItemToRemove);
    updateCartItemReducer(newCartItems);
  };

  const setIsCartOpen = (bool) => {
    dispatch(createAction(USER_ACTION_TYPE.SET_IS_CART_OPEN, bool));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
