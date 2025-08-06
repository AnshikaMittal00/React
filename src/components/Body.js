import ResCard from "./ResCard";
import { useState } from "react";
import Data from "../utils/mockData";

const Body = () => {
  const arr = useState(Data);
  const [List,setList]=arr;
  console.log(List);
  console.log(setList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            
            const filtered = List.filter((res) => res.data.ratings > 4);
             setList(filtered)
          }
        
        }
        
          onMouseOver={() => {}}
        >
          Top-Rated Restaurants
        </button>
      </div>
      <div className="res-cards">
        {List.map((res) => (
          <ResCard key={res.data.id} resData={res} />
        ))}
      </div>
    </div>
  );
};
export default Body;
