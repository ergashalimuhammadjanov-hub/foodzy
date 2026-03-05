import React, { useState } from 'react'
import Home from './pages/home/Home'
import Products from './pages/products/Products'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/naavbar/Nav'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>

      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </>
  )
}
export default App