import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';

const Blogs = () => {

    const { loading, blogs} = useContext(AppContext);

  return (
    <div className='w-[630px] pt-24 pb-24 py-10'>        
    {
            loading ? 
            (<Spinner/>) : 
            ( 
            <div className='flex flex-col gap-y-6 max-w-3xl mx-auto w-11/12'>
                {
                blogs.map(blog => 
                    <div key={blog.id}>
                        <h2 className='font-bold text-lg cursor-pointer hover:underline1' >{blog.title}</h2>
                        <p className='text-sm my-1'>By <span className='italic'>{blog.author}</span> on <span className='font-semibold underline cursor-pointer'>{blog.category}</span></p>
                        <p className='text-sm mt-[4px]'>Posted on <span>{blog.date}</span></p>
                        <p className='text-md mt-[12px]'>{blog.content}</p>
                        <div className='flex gap-x-2'>
                        {
                            blog.tags.map((tag, index) => 
                                    <span key={index} className='text-blue-700 font-semibold text-xs underline cursor-pointer mt-[8px]'>{`#${tag}`}</span>
                            )
                        }
                        </div>
                    </div>
                )
                }
            </div> )
        }
    </div>
  )
}

export default Blogs