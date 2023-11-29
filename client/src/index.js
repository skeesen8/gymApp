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




const routes=[
    {
    path:"/",
    element:<App />
  },{
    path:"/gyms",
    element:<GymCard/>
  },{
    path:"/addgym",
    element:<AddGymForm />
  },{
    path:"/gyms/:id",
    element:<GymById/>
  },{
    path:"/reviews",
    element:<AddReview/>
  }
  ]
  const router=createBrowserRouter(routes)
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
   <RouterProvider router={router}/>
  );