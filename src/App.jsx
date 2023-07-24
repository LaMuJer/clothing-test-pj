import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home.component";
import NavigationComponent from "./routes/nav/Navigation.component";
import Authentication from "./routes/authentication/Authentication";
import Shop from "./routes/shop/Shop";
import CheckoutComponent from "./routes/checkout/Checkout.component";
import { useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangeListener,
} from "./utils/firebase.util";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<NavigationComponent />}>
        <Route index={true} element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="sign-in" element={<Authentication />} />
        <Route path="checkout" element={<CheckoutComponent />} />
      </Route>
    </Routes>
  );
};

export default App;
