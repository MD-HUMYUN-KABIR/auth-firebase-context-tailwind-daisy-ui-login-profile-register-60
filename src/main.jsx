import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Register from './components/Register';
import AuthProvider from './proveider/AuthProvider';
import Orders from './components/Orders';
import PrivateRoutes from './routes/PrivateRoutes';
import Profile from './components/Profile';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<LogIn></LogIn>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/orders',
        element: <PrivateRoutes> <Orders></Orders> </PrivateRoutes>
      },
      {
        path:'/profile',
        element: <PrivateRoutes> <Profile></Profile> </PrivateRoutes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
