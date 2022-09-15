import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function 
() {
    const navigate=useNavigate()
  return (
     <>
     <button className='go-back-button' onClick={()=>{
         navigate("/")
     }} >Go Back</button>
    <div >
   <img src="https://i.gifer.com/CwD0.gif" alt="" />
    </div>
    </>
  )
}
