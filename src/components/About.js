 const Icon = ({ path, className = "w-8 h-8" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d={path} />
  </svg>
);
const About = () => {
   

  return (
    <div className="bg-white font-sans p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        
        
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-pink-600 tracking-tight">
            About <span className="text-gray-800">Biterun</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Your Daily Bite, On The Run.
          </p>
        </div>

        
        <div className="bg-pink-50 p-6 sm:p-10 rounded-2xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
        
            <div className="flex justify-center">
              <img 
                src="https://placehold.co/400x400/fbcfe8/4c1d95?text=Biterun" 
                alt="Biterun Logo"
                className="rounded-full object-cover w-48 h-48 sm:w-64 sm:h-64 border-8 border-white shadow-xl"
              />
            </div>

      
            <div className="text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Our Story
              </h2>
              <p className="text-gray-700 mb-4">
                At Biterun, we believe that delicious food should never be a compromise, no matter how busy your day gets. Born in the heart of Ghaziabad, our mission is to connect you with the best local restaurants, delivering your favorite meals right to your doorstep, fast and fresh.
              </p>
              <p className="text-gray-700">
                We're a team of foodies, tech enthusiasts, and delivery pros dedicated to making your mealtime easier and more enjoyable. From our developers to our delivery partners, we're all part of the Biterun family.
              </p>
            </div>
          </div>
        </div>

        
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">What We Stand For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            
           
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex justify-center items-center h-16 w-16 mx-auto rounded-full bg-pink-100">
                <Icon path="M3.75 13.5l3.75-3.75m0 0h12.5m-12.5 0v12.5m12.5-12.5l-3.75-3.75M3.75 13.5l3.75 3.75m0 0h12.5m-12.5 0V3.75m0 9.75l-3.75 3.75M12 12m-3.75 0a3.75 3.75 0 107.5 0 3.75 3.75 0 10-7.5 0z" className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-gray-800">Quality Eateries</h3>
              <p className="mt-2 text-gray-600">We partner with the best local restaurants to bring you a curated selection of high-quality meals.</p>
            </div>

         
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex justify-center items-center h-16 w-16 mx-auto rounded-full bg-pink-100">
                <Icon path="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-gray-800">Speedy Delivery</h3>
              <p className="mt-2 text-gray-600">Our efficient delivery network ensures your food arrives hot and on time, every time.</p>
            </div>

            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex justify-center items-center h-16 w-16 mx-auto rounded-full bg-pink-100">
                <Icon path="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-gray-800">Customer Love</h3>
              <p className="mt-2 text-gray-600">We're passionate about making our customers happy. Your satisfaction is our top priority.</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
