import { createContext, useState, useEffect } from "react";

import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase.util.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
  setCategoriess: () => null,
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategories] = useState({});

  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategories(categoryMap);
    };
    getCategories();
  }, []);

  const value = { categoriesMap, setCategories };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
