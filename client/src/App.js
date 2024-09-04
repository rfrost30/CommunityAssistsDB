import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Facility from "./pages/Facility";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./style.scss"

//Navbar and Footer layout
const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}


const router = createBrowserRouter([
  //Home and Facility page route with Navbar & Footer.
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/facility/:id",
        element:<Facility/>
      },
    ]
  },
  //Register page route.
  {
    path: "/register",
    element: <Register/>,
  },
  //Login page route.
  {
    path: "/login",
    element: <Login/>,
  },
]);





function App() {

  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
