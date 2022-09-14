import React from 'react'
import { useParams } from 'react-router-dom'

export default function BlogDetails() {
    const {id} = useParams()
  return (
    <div className='blog-details'>BlogDetails {id}</div>
  )
}
