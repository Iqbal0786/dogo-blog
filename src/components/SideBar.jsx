import React from 'react';
import { Link } from 'react-router-dom';

export default function () {
  return (
   <>
     <div className='navbar'>
        <h1>The Dogo Blogs</h1>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create">New Blog</Link>
          </div>
        </div>
   </>
  )
}
