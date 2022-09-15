import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BlogDetails from '../components/BlogDetails'
import Create from '../components/Create'
import Home from '../components/Home'
import PageNotFound from '../components/PageNotFound'

export default function AllRoutes() {
  return (
  <>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/create' element={<Create/>}/>
    <Route path='/blogs/:id' element={<BlogDetails/>}/>
    <Route path='*' element={<PageNotFound/>}/>
  </Routes>
  </>
  )
}
