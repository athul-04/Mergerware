import React from "react";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import {Info}  from './Info'; 
import { Hello } from "./Hello";
import Errorjs from "./Error/Errorjs";
import Borrowerjs from "./Borrowerjs";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Temp from "./Temp";
import Lenderjs from "./Lenderjs";

export const AppRouter=()=>{
  const routes=createBrowserRouter([
      {path:'/',element:<Login />,errorElement:<Errorjs/>},
      {path:'/signup',element:<Signup />,errorElement:<Errorjs/>},
      {path:'/a',element:<Temp />,errorElement:<Errorjs/>},
      {path:'/home/lender/:userId',element:<Lenderjs />,errorElement:<Errorjs/>},
      {path:'/home/borrower/:userId',element:<Borrowerjs />,errorElement:<Errorjs/>},
      // {path:'/home/admin/:userId',element:<Lender />,errorElement:<Errorjs/>},

  ])

  return(
    <RouterProvider router={routes} />
  )

}




