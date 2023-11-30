import React from "react";
import App from "./components/App";
import "./index.css";
import Gym from "./components/Gym";
import AddGymForm from "./components/AddGymForm";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import ReactDOM from 'react-dom/client';
import GymCard from "./components/GymCard";
import AddReview from "./components/AddReview";
import GymById from "./components/GymById";
import GymByIdCard from "./components/GymByIdCard";
import MainPage from "./components/MainPage"
import Navbar from "./components/Navbar"





const routes=[
    {
    path:"/",
    element:<><App /><Navbar /></>
  },{
    path:"/gyms",
    element:<><GymCard/><Navbar /></>
  },{
    path:"/addgym",
    element:<><AddGymForm /><Navbar /></>
  },{
    path:"/gyms/:id",
    element:<><GymById/><Navbar /></>
  },{
    path:"/reviews",
    element:<><AddReview/><Navbar /></>
  },{

  }
  ]
  const router=createBrowserRouter(routes)
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
   <RouterProvider router={router}/>
  );