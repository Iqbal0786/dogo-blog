import React, { useEffect, useState } from "react";
import useFetch from "../customHooks/useFetch";
import BlogList from "./BlogList";

export default function Home() {
  const {data:blogs,isPending,error} =useFetch("http://localhost:8000/blogs")

  const deleteBlogHandler=(id)=>{
    //setBlogs(blogs.filter(e=>e.id!=id))

  }


  return (
    <div className="home">
         { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
     { blogs && <BlogList blogs={blogs} title={"All Blogs"} deleteBlogHandler={deleteBlogHandler}/>}
    </div>
  );
}
