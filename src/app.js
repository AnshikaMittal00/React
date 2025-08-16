import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/about";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Menu from "./components/Menu";
import{lazy,Suspense} from "react";
import Shimmer from "./components/shimmer";
// import Grocery from "./components/Grocery";
 const Grocery =lazy(()=>import("./components/Grocery")) // ondemand Loading
const AppLayout = () => {
 
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
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
          <Shimmer/>
        }><Grocery /></Suspense>,
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
