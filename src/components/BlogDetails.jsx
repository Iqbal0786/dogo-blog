import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../customHooks/useFetch';

export default function BlogDetails() {
    const {id} = useParams();
    const navigate=useNavigate()
    const {data:blog,isPending,error} = useFetch(`https://dogo-blog-json-server.herokuapp.com/blogs/${id}`);
    const deleteBlogHandler=()=>{
        fetch(`https://dogo-blog-json-server.herokuapp.com/blogs/${blog.id}`,{method:"Delete"}).then(()=>{
            navigate("/")
        }).catch((error)=>{
            console.log(error.message)
        })
    }
  return (
    <div className='blog-details'>
     {isPending && <div>Loading....</div> }
     {error && <div>{error}</div>}
     {blog && <article>
           <h2>{blog.title}</h2>
           <p>Written by {blog.author}</p>
           <div>{blog.body}</div>
           <button onClick={deleteBlogHandler}>Delete</button>
     </article> }

    </div>
  )
}
