import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from '../Layout.jsx'
import About from '../components/About/About.jsx'
import Home from '../components/Home/Home.jsx'
import Contact from '../components/Contactus/Contactus.jsx'
import { RouterProvider , createBrowserRouter} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "About",
        element: <About/>
      },
      {
        path: "ContactUs",
        element: <Contact/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
