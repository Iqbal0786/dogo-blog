import React, { useState } from 'react'

export default function Create() {
    const [input,setInput] =useState({
        title:"",
        body:"",
        author:""
    })
    
    const inputHandler=(e)=>{
        const {name,value}= e.target
       setInput({...input ,[name]:value})
    }
  const handleSubmit = (e) => {
    e.preventDefault();
    

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input)
    }).then(() => {
      alert('new blog added');
    })
  }
  return (
    <div
    className='create'
    >
        <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={input.title}
          name='title'
          onChange={inputHandler}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={input.body}
          name='body'
          onChange={inputHandler}        ></textarea>
        <label>Blog author:</label>
        <select
          value={input.author}
          onChange={inputHandler}
          name='author'
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  )
}
