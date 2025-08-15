import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { Menu_URL } from "../utils/constants";

const Menu = () => {
    const [isClicked, setisClicked] = useState(false);
    const [NClicked, setNClicked] = useState(false);
    const [menuInfo, setMenuInfo] = useState(null);
    const [filtered, setFiltered] = useState(null); // Initialized with null
    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(Menu_URL + resId);
        const json = await data.json();
        const cards = json?.data?.cards;
        setMenuInfo(cards);

        const initialItems = cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards;
        setFiltered(initialItems);
    };

    if (menuInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = menuInfo[2]?.card?.card?.info;
    
    const allItems = menuInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards;
    
    // Logic to reset filters when buttons are unclicked
    const handleVegClick = () => {
        setisClicked(prev => !prev);
        if (!isClicked) {
            const vegItems = allItems.filter(item => item.card.info.isVeg === 1);
            setFiltered(vegItems);
        } else {
            setFiltered(allItems);
        }
    };
    
    const handleNonVegClick = () => {
        setNClicked(prev => !prev);
        if(!NClicked){
            const nonVegItems = allItems.filter(item => item.card.info.isVeg !== 1);
            setFiltered(nonVegItems);
        } else {
            setFiltered(allItems);
        }
    };

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(",")}</h3>
            <h3>{costForTwoMessage}</h3>
            <div className="category">
                <button 
                    className={`button ${isClicked ? "veg" : ""}`}
                    onClick={handleVegClick}>
                    Veg
                </button>
                <button
                    className={`button ${NClicked ? "non-veg" : ""}`}
                    onClick={handleNonVegClick}>
                    Non-Veg
                </button>
            </div>
            {filtered && filtered.map(res =>
                <ul key={res.card.info.id}>
                    <li>{res.card.info.name} - {"Rs."}{res.card.info.price / 100}</li>
                </ul>
            )}
        </div>
    );
};

export default Menu;