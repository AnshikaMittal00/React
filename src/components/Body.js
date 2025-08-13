import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
const Body = () => {
  const [List, setList] = useState([]); //useState runs on the initial render of component 
  const [filteredRes,setfilteredRes]=useState([]);
  const [searchText, setsearchText]=useState([]);

  useEffect(() => { // useEffect run once the component is initial rendered 
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setList(restaurants);
    setfilteredRes(restaurants);
  };
  return (List.length === 0) ?
    (
      <h1>
        <Shimmer />
      </h1>
    )
  :(
    <div className="body">
      <div className="filter">
        <div className="search">
            <input type="text" className="search-Box" 
            value={searchText} 
            onChange={(e)=>{
               setsearchText (e.target.value);
            }}
            />
            <button 
            onClick={()=>{
            const filteredList= List.filter((res)=>
               res.info.name.toLowerCase().includes(searchText.toLowerCase())
               );
               setfilteredRes(filteredList);
            }}
            
            >search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = List.filter((res) => res.info.avgRating > 4);
            setfilteredRes(filtered);
          }}
        >
          Top-Rated Restaurants
        </button>
      </div>
      <div className="res-cards">
        {filteredRes.map((res) => (
          <ResCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  
  
  );

  
};


export default Body;
