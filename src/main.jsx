import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import AddProduct from './components/AddProduct/AddProduct';
import BrandProducts from './components/BrandProducts/BrandProducts';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ProductCart from './components/ProductCart/ProductCart';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';
import AuthProvider from './providers/AuthProvider';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import PrivateRoute from './components/routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://style-savvy-server.vercel.app/brands')
      },
      {
        path: '/addProduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path: '/updateProduct/:id',
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({ params }) => fetch(`https://style-savvy-server.vercel.app/products/${params.id}`)
      },
      {
        path: '/brandProducts/:name',
        element: <BrandProducts></BrandProducts>,
        loader: () => fetch('https://style-savvy-server.vercel.app/products')
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://style-savvy-server.vercel.app/products/${params.id}`)
      },
      {
        path: '/cart',
        element: <PrivateRoute><ProductCart></ProductCart></PrivateRoute>,
        loader: () => fetch('https://style-savvy-server.vercel.app/cart')
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
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
