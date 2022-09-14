import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  const deleteBlogHandler=(id)=>{
    setBlogs(blogs.filter(e=>e.id!=id))

  }

  useEffect(()=>{
      fetch("http://localhost:8000/blogs").then((req)=> req.json()).then((res)=>{
       
        setBlogs(res)
      }).catch((error)=>{
        console.log(error.message)
      })
  },[])
  return (
    <div className="home">
     { blogs && <BlogList blogs={blogs} title={"All Blogs"} deleteBlogHandler={deleteBlogHandler}/>}
    </div>
  );
}
