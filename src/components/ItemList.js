import { useDispatch, useSelector } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { addItems, removeItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  
  const getCartItemCount = (itemId) => {
    const item = cartItems.find((cartItem) => cartItem.id === itemId);
    return item ? item.count : 0;
  };

  const handleAddItem = (item) => {
   
    dispatch(addItems({ ...item, id: item.card.info.id }));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem({ id: item.card.info.id}));
  };

  return (
    <div>
      <ul>
        {items.map((item) => {
          const itemCount = getCartItemCount(item?.card?.info?.id);

          return (
            <li key={item?.card?.info?.id} className="p-2 m-2 border-b border-gray-400 flex justify-between items-center">
              <div className="flex-1 pr-4">
                <h3 className="text-lg text-left font-bold">{item?.card?.info?.name}</h3>
                <p className="text-gray-600 text-left text-sm mt-1">{item?.card?.info?.description}</p>
                <h3 className="font-bold  text-left text-md mt-2">Rs.{item?.card?.info?.defaultPrice / 100}</h3>
              </div>
              <div className="w-24 h-24 flex-shrink-0 relative">
                <img className="w-full h-full object-cover rounded-md" src={`${IMG_URL}/${item?.card?.info?.imageId}`} alt={item?.card?.info?.name} />
                
                {itemCount === 0 ? (
                  <button
                    className="absolute top-[90%] left-1/2 -translate-x-1/2 p-2 bg-pink-100 rounded-md"
                    onClick={() => handleAddItem(item)}
                  >
                    ADD+
                  </button>
                ) : (
                  <div className="flex items-center absolute top-[90%] left-1/2 -translate-x-1/2 p-2 bg-pink-100 rounded-md">
                    <button onClick={() => handleRemoveItem(item)} className="px-2">-</button>
                    <span className="px-2">{itemCount}</span>
                    <button onClick={() => handleAddItem(item)} className="px-2">+</button>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemList;