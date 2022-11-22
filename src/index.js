import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import MyBio from './components/MyBio';
import { createBrowserRouter , RouterProvider, Route } from 'react-router-dom'


import PageError from './components/PageError'
import Details from './components/Details';
import Contacts from './components/Contacts';
import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MyBio/>,
    errorElement: <PageError/>,
    children: [
      {
        index: true, 
        element: <Home/>},
      {
        path: "details",
        element: <Details/>
      },
      {
        path: "contacts",
        element: <Contacts/>
      }

    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
