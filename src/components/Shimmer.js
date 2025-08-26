import React from 'react';




const RestaurantCardShimmer = () => (
  <div className="w-64 p-4 m-4 bg-white rounded-lg shadow-md">
   
    <div className="h-40 bg-gray-200 rounded-md animate-pulse"></div>
    
    <div className="mt-4">

      <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse"></div>
      
      
      <div className="h-4 w-1/2 bg-gray-200 rounded mt-2 animate-pulse"></div>
      
      
      <div className="h-4 w-full bg-gray-200 rounded mt-2 animate-pulse"></div>
    </div>
  </div>
);


export const HomeShimmer = () => {
  return (
    <div className="flex flex-wrap justify-center p-4" data-testid="home-shimmer">
     
      {Array.from({ length: 12 }).map((_, index) => (
        <RestaurantCardShimmer key={index} />
      ))}
    </div>
  );
};



const MenuItemShimmer = () => (
  <div className="p-2 m-2 border-b border-gray-200 flex justify-between items-center">

    <div className="flex-1 pr-4">
      <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse"></div>
      <div className="h-4 w-full bg-gray-200 rounded mt-2 animate-pulse"></div>
      <div className="h-4 w-5/6 bg-gray-200 rounded mt-1 animate-pulse"></div>
      <div className="h-5 w-1/4 bg-gray-200 rounded mt-4 animate-pulse"></div>
    </div>

   
    <div className="w-24 flex-shrink-0 flex flex-col items-center">
      <div className="w-24 h-24 bg-gray-200 rounded-md animate-pulse"></div>
      <div className="w-16 h-8 bg-gray-200 rounded-md mt-2 animate-pulse"></div>
    </div>
  </div>
);


export const MenuShimmer = () => {
  return (
    <div className="max-w-4xl mx-auto mt-4" data-testid="menu-shimmer">
    
      {Array.from({ length: 10 }).map((_, index) => (
        <MenuItemShimmer key={index} />
      ))}
    </div>
  );
};

    