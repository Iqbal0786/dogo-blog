import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'

export default function AllRoutes() {
  return (
  <>
  <Routes>
    <Route path='/' element={<Home/>}/>

  </Routes>
  </>
  )
}
