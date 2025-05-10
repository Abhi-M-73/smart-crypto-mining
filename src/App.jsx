import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Pricing from './pages/Pricing'
import Services from './pages/Services'
import Products from './pages/Products'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Sidebar from './components/Sidebar'


const App = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='min-h-screen w-full bg-color relative'>
      <BrowserRouter>
        <Navbar open={open} setOpen={setOpen} />
        <Sidebar open={open} setOpen={setOpen} />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/service" element={<Services />} />
          <Route path="/product" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
