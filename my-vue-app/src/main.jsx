import React from 'react'
import {createRoot}from 'react-dom/client'
import {StrictMode} from 'react'
import {createBrowserRouter,RouterProvider}from 'react-router-dom'
import './index.css';
import RootLayout from './Components/RootLayout';
import Home from './Components/Home/Home';
import Footer from './Components/Footer';
import ErrorPage from './Components/ErrorPage';
import DetailsPage from './Components/DetailsPage';
import Friends from './Components/Friends';
import Banner from './Components/Banner';


const router=createBrowserRouter([

{
  path:'/',
  element:<RootLayout/>,
errorElement:<ErrorPage/>,
  children:[
{


  path:'/',
  element:<Friends/>
},

    {
path:'/details/:id',
element:<DetailsPage/>
    },
    
    {
      path:'/Footer',
      element:<Footer/>
    }
  ]
}
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)