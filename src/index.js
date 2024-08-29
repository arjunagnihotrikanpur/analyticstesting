import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Navbar from "./components/Navbar"
import Home from './components/Home';



const router = createBrowserRouter(
  [{
  element: <Navbar />,
  children: [
    {path: "/", element: <Home />}
  ]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
