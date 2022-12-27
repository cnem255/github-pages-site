import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/NavBar'
import './index.css'
import About from './pages/About'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'about',
    element: <About />
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="bg-gradient-to-r w-screen h-screen from-green-700 to-cyan-700 scroll-smooth">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
