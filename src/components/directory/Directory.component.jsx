import CategoryItemComponent from "../category-item/Category-item.component";
import "./diectory.style.scss";

const DirectoryComponent = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      route: "shop/hats",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      route: "shop/jackets",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      route: "shop/sneakers",
    },
    {
      id: 4,
      title: "women",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      route: "shop/women",
    },
    {
      id: 5,
      title: "men",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      route: "shop/men",
    },
  ];
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItemComponent category={category} key={category.id} />
      ))}
    </div>
  );
};

export default DirectoryComponent;
