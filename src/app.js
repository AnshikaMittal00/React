import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/about";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Menu from "./components/Menu";
import{lazy,Suspense, useEffect,useState} from "react";
import {HomeShimmer} from "./components/shimmer";
import UserContext from "./utils/UserContext.js";
import {Provider} from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";
import OrderPlaced from "./components/OrderPlaced.js";
import useOnlineStatus from "./utils/useOnlineStatus.js";
import OfflinePage from "./components/OfflinePage.js";
import ThemeManager from "./components/ThemeManager.js";
import LoginRegister from "./components/LoginRegister.js";
// import Grocery from "./components/Grocery";
 const Grocery =lazy(()=>import("./components/Grocery")) 
 // ondemand Loading
const AppLayout = () => {
  const online=useOnlineStatus();
  const [userInfo,setuserInfo]=useState([]);
  const [time,settime]=useState([]);
  useEffect(()=>{
   const data={
         name:"Anshika Mittal",
    };
    setuserInfo(data.name);
     
  },[])


 
  return (
    <Provider  store={appStore}>
       <UserContext.Provider value={{loggedInUser:userInfo,setuserInfo}}>
        <ThemeManager/>
       <div className="bg-white text-black  bg-background text-text-primary">
      <Header />
      { online ? <Outlet /> : <OfflinePage status={online}/> }
    </div>
    </UserContext.Provider>
   
    </Provider>
   
  );
};
const appRouter = createBrowserRouter([
  //list of objects
  {
    path: "/",
    element: <AppLayout />,
    children: [
        {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/menu/:resId",
        element: <Menu />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={
          <HomeShimmer/>
        }><Grocery /></Suspense>,
      },
       {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order",
        element: <OrderPlaced />,
      },
      {
        path: "/login",
        element: <LoginRegister />,
      },
    ],
    errorElement: <Error />,
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
