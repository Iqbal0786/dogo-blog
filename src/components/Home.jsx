import React, { useEffect, useState } from "react";
import useFetch from "../customHooks/useFetch";
import BlogList from "./BlogList";

export default function Home() {
  const {data:blogs,isPending,error} =useFetch("https://dogo-blog-json-server.herokuapp.com/blogs")

  
  return (
    <div className="home">
         { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
     { blogs && <BlogList blogs={blogs} title={"All Blogs"} />}
    </div>
  );
}
