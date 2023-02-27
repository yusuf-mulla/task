import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBar1 } from './Navbar/NavBar1'
import { Home} from './Navbar/Pages/Home'
import { About} from './Navbar/Pages/About'
import { Blog} from './Navbar/Pages/Blog'
import { ContactUs} from './Navbar/Pages/ContactUs'



export const RouteData = () => {
  return (
    <div>
        <BrowserRouter>
        <NavBar1/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/contactUS' element={<ContactUs/>}/>

        </Routes>

        </BrowserRouter>
    </div>
  )
}
