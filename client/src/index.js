import React from "react";
import App from "./components/App";
import "./index.css";
import Gym from "./components/Gym";
import AddGymForm from "./components/AddGymForm";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import ReactDOM from 'react-dom/client';
import GymCard from "./components/GymCard";




const routes=[
    {
    path:"/",
    element:<App />
  },{
    path:"/gyms/<id>",
    element:<Gym />
  },{
    path:"/gyms",
    element:<GymCard/>
  },{
    path:"/addgym",
    element:<AddGymForm />
  }
  ]
  const router=createBrowserRouter(routes)
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
   <RouterProvider router={router}/>
  );