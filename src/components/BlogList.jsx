import React from 'react'
import { Link } from 'react-router-dom'

export default function 
({blogs , title ,deleteBlogHandler}) {
  return (
    <div className='blog-list'>
        <h2>{title}</h2>
{blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`blogs/${blog.id}`}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          </Link>
          <button onClick={()=>{
             deleteBlogHandler(blog.id)
          }}>Delete Blog</button>
        </div>
      ))}
    </div>
  )
}
