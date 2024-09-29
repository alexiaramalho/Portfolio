import {createBrowserRouter, RouterProvider}from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App";
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import PageNotFound from '../pages/PageNotFound';
import "./index.css";


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {index: true, element: <Home/>},
      {path: "/Projects", element: <Projects/>},
      {path: "/Contact", element: <Contact/>},
      {path: "*", element: <PageNotFound/>}
      
    ]
  }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)