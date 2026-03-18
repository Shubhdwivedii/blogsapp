import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';

const Blogs = () => {

    const { loading, blogs} = useContext(AppContext);

  return (
    <div className='w-[550px] mt-10 mb-10'>
        {
            loading ? 
            (<Spinner/>) : 
            ( 
            <div>
                {
                blogs.map(blog => 
                    <div key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>By <span>{blog.author}</span> on <span>{blog.category}</span></p>
                        <p>Posted on <span>{blog.date}</span></p>
                        <p>{blog.content}</p>
                        {
                            blog.tags.map((tag, index) => 
                                    <span key={index}>{`#${tag}`}</span>
                            )
                        }
                    </div>
                )
                }
            </div> )
        }
    </div>
  )
}

export default Blogs