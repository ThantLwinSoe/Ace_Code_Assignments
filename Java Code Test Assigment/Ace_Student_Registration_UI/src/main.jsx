import React from 'react'
import * as ReactDOM from "react-dom/client";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './layout/Home.jsx';
import { Error } from './error/Error.jsx';
import { Edit } from './layout/Edit.jsx';
import { Print } from './layout/Print.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error/>
  },
  {
    path: "/edit/:id",
    element: <Edit></Edit>,
    errorElement: <Error/>
  },
  {
    path: "/print/:id",
    element: <Print></Print>,
    errorElement: <Error/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
