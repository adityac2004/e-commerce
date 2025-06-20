import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout  from "./Pages/Layout"
import  Home  from './Pages/Home'
import  Products from "./Pages/Products"
import  Cart from "./Pages/Cart"
import  Account from "./Pages/Account"
import Contact from "./Pages/Contact"
import ViewMor from './Pages/ViewMor'

function App() {
  return (
    <BrowserRouter basename='/e-commerce' >
    <Routes>
      <Route element={<Layout/>} path='/'>
      <Route index element={<Home />} />
      <Route element={<Home/>} path="/home"/>
      <Route element={<Products/>} path="/products"/>
      <Route element={<Cart/>} path="/cart"/>
      <Route element={<Account/>} path="/account"/>
      <Route element={<Contact/>} path="/contact"/>
      <Route element={<ViewMor/>} path='/viewmore/:id'/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App