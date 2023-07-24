import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/Categories.context";
import CategoryPreviewComponent from "../../components/category-preview/CategoryPreview.component";
import "./categories-preview.style.scss";

const CategoriesPreviewComponent = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  console.log(categoriesMap);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];

        return (
          <CategoryPreviewComponent
            key={title}
            title={title}
            products={products}
          />
        );
      })}
    </>
  );
};

export default CategoriesPreviewComponent;
