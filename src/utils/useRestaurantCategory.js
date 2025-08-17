import { useState } from "react";
const useRestaurantCategory=(allItems)=>{
    const [filters, setFilters] = useState({
    isVeg: false,
    isNonveg: false,
    isBestseller: false,
  });

  const handleFilterClick = (filterName) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };
   
    let filteredList = (allItems || []).filter((item) => {
    const info = item?.card?.info;

    const vegCondition = filters.isVeg ? info?.isVeg === 1 : true;
    const nonVegCondition = filters.isNonveg ? info?.isVeg !== 1 : true;
    const bestSellerCondition = filters.isBestseller
      ? info?.ratings?.aggregatedRating?.rating > 4
      : true;
        return vegCondition && nonVegCondition && bestSellerCondition;

   });
   return [filteredList,filters,handleFilterClick];
}


    

export default useRestaurantCategory;