import {useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const Menu = () => {
  // 1. Correctly initialize filter state with booleans
  const [filters, setFilters] = useState({
    isVeg: false,
    isNonveg: false,
    isBestseller: false,
  });

  const { resId } = useParams();
  const [menuInfo, allItems] = useRestaurantMenu(resId);

  while (menuInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = menuInfo[2]?.card?.card?.info;

  const handleFilterClick = (filterName) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  let filteredList = allItems.filter((item) => {
    const info = item?.card?.info;

    const vegCondition = filters.isVeg ? info?.isVeg === 1 : true;
    const nonVegCondition = filters.isNonveg ? info?.isVeg !== 1 : true;
    const bestSellerCondition = filters.isBestseller
      ? info?.ratings?.aggregatedRating?.rating > 4
      : true;

    return vegCondition && nonVegCondition && bestSellerCondition;
  });

  return (
    <div className="menu">
      <div className="info">
        <h1>{name}</h1>
        <h3>{cuisines.join(",")}</h3>
        <h3>{costForTwoMessage}</h3>
      </div>

      <div className="category">
        <button
          className={`button ${filters.isVeg ? "veg" : ""}`}
          onClick={() => handleFilterClick("isVeg")}
        >
          Veg
        </button>
        <button
          className={`button ${filters.isNonveg ? "non-veg" : ""}`}
          onClick={() => handleFilterClick("isNonveg")}
        >
          Non-Veg
        </button>
        <button
          className={`button ${filters.isBestseller ? "Bestseller" : ""}`}
          onClick={() => handleFilterClick("isBestseller")}
        >
          Bestseller
        </button>
      </div>
      {filteredList.length > 0 ? (
        filteredList.map((res) => (
          <ul key={res.card.info.id}>
            <li>
              {res.card.info.name} - {"Rs."}
              {res.card.info.price / 100}
            </li>
          </ul>
        ))
      ) : (
        <p>No items found for the selected filters.</p>
      )}
    </div>
  );
};

export default Menu;
