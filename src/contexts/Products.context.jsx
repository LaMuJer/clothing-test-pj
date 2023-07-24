import { createContext, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase.util";

export const ProductContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    };
    getCategoriesMap();
    console.log("first");
  }, []);

  const value = { products };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
