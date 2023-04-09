import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Nav from './Componant/Nav/Nav';
import Home from './Componant/home/Home';
import Friend from './Componant/Friend/Friend';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <div><h1>hello word</h1></div>
//   },
//   {
//     path: '/app',
//     element: <App></App>
//   },
//   {
//     path: '/home',
//     element: <div><h1>hello home</h1></div>
//   }
// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav></Nav>,
    children: [
      {
        path: '/',
        element: <Friend></Friend>,
        loader:() => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: '/app',
        element: <App></App>
      },
      {
        path: '/home',
        element: <Home></Home>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
