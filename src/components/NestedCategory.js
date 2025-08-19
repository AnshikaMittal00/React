

import React, { useState } from 'react';
import ItemList from './ItemList'; 

const NestedCategory = ({ data }) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full mx-auto my-2 bg-gray-100 shadow-sm p-3 rounded-md">
      
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-semibold text-base">
          {data.title} ({data?.itemCards?.length || 0})
        </span>
        <span>{isOpen ? '🔼' : '🔽'}</span> 
      </div>

     
      {isOpen && data.itemCards && (
        <div className="mt-2">
          <ItemList items={data.itemCards} type={"nested"} />
        </div>
      )}
    </div>
  );
};

export default NestedCategory;