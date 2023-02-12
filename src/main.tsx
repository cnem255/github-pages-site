import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, createHashRouter, Router, RouterProvider} from 'react-router-dom';
import Footer from './components/Footer'
import Navbar from './components/NavBar'
import './index.css'
import About from './pages/About'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />
  }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="mountain">
      <Navbar />
      <RouterProvider router={router} />
      <Footer titleClasses="select-none" linkClasses="link link-hover hover:link-info"/>
    </div>
  </React.StrictMode>,
)
