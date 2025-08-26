import React from 'react';

const OfflineIcon = () => (
  <svg 
    className="w-16 h-16 text-red-500 mx-auto mb-4" 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M18.364 5.636a9 9 0 010 12.728m-12.728 0a9 9 0 010-12.728m12.728 0L5.636 18.364M12 20.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm-3.25-4.5a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" 
    />
  </svg>
);

const OfflinePage = ({status}) => {
  


  if (status === false) {
    return (
      
      <div className="flex items-center justify-center min-h-screen bg-gray-50 font-sans">
        <div className="w-full max-w-md p-8 text-center bg-white rounded-2xl shadow-lg">
          <OfflineIcon />
          <h1 className="text-2xl font-bold text-gray-800">
            Looks like you're offline!
          </h1>
          <p className="mt-2 text-gray-600">
            Please check your internet connection and try again.
          </p>
        </div>
      </div>
    );
  }

  return null; 
};

export default OfflinePage;
