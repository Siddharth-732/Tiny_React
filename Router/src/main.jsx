import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from '../Layout.jsx'
import About from '../components/About/About.jsx'
import Home from '../components/Home/Home.jsx'
import Contact from '../components/Contactus/Contactus.jsx'
import { User } from '../components/User/User.jsx'
import { Github } from '../components/Github/Github.jsx'
import { Route, RouterProvider , createBrowserRouter, createRoutesFromElements} from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "About",
//         element: <About/>
//       },
//       {
//         path: "ContactUs",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='ContactUs' element={<Contact/>}/>
        <Route path='User/:userid' element={<User/>}/>
        <Route path='github' element={<Github/>}/>
      </Route>
    )
  )
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/> {/*This works like-"Whatever you give me i'll render"*/}
  </StrictMode>,
)
