import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SignUp from './pages/signup/index';
import Landing from './pages/landing/landing';
import Post from './pages/posts/post';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignIn from './pages/signin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path:'/signin',
    element:<SignIn/>
  },
  
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/landing',
    element: <Landing />,
  },

  {
    path: "/post",
    element:<Post/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
