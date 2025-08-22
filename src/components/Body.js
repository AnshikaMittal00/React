import ResCard ,{Popular}from "./ResCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { Res_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext.js";
import { useContext } from "react";
const Body = () => {
  const [List, setList] = useState(""); //useState runs on the initial render of component 
  const [filteredRes,setfilteredRes]=useState([]);
  const [searchText, setsearchText]=useState("");
  const [isLoading, setIsLoading] = useState(false);
  const PopularRescard=Popular(ResCard);
   const {setuserInfo,loggedInUser}=useContext(UserContext);

  useEffect(() => { // useEffect run once the component is initial rendered 
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch( Res_URL );
    const json = await data.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setList(restaurants);
    setfilteredRes(restaurants);
    // console.log(json);
  };
 const onlineStatus=useOnlineStatus();
 if(onlineStatus===false) return (
 <h1>Looks like you are offline!!Please check your internet!!</h1>
);
  const filterTopRated = () => {
    setIsLoading(true); 
    setTimeout(() => { 
      const filtered = List.filter((res) => res.info.avgRating > 4);
      setfilteredRes(filtered);
      setIsLoading(false); 
    }, 500); 
  };

  return (List.length === 0 || isLoading  ) ?
    (
      <h1>
        <Shimmer />
      </h1>
    )
  :(
    <div className="body">
      <div className="flex flex-col md:flex-row">
        <div className="search m-2 p-2 ">
            <input type="text" className="border border-solid border-black" 
            value={searchText} 
            onChange={(e)=>{
               setsearchText(e.target.value);
            }
          }
            />
            <button className="px-2 py-2 m-2 bg-pink-100 rounded-lg hover:shadow-lg transition-shadow duration-300  active:bg-pink-300"
            onClick={()=>{
            const filteredList= List.filter((res)=>
               res.info.name.toLowerCase().includes(searchText.toLowerCase())
               );
               setfilteredRes(filteredList);
              
            }}
            
            >search</button>
        </div>
        <div className="search m-2 p-2 flex items-center" >
          <button className="bg-pink-100 px-2 py-2 rounded-lg hover:shadow-lg transition-shadow duration-300 active:bg-pink-300" onClick={filterTopRated}>
          Top-Rated Restaurants
        </button>
        </div>
        {/* <div>
          <label>UserName:</label>
          <input className="border border-black p-2" value={loggedInUser} onChange={(e)=>setuserInfo(e.target.value)

          }></input>
        </div> */}
         
      </div>
      <div className="flex flex-wrap gap-2">
        {filteredRes.map((res) => (
         <Link  key={res.info.id} to={"/menu/"+res.info.id} className="link"> 
          {
            res.info.avgRating > 4.3 ? <PopularRescard resData={res}/>: <ResCard resData={res}/>
          }
        
         </Link>
        ))}
      </div>
    </div>
  
  
  );

  
};


export default Body;
