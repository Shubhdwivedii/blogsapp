import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

  const {page, setPage, totalPages} = useContext(AppContext);

  return (
    <div className='fixed bottom-0 bg-white flex justify-center py-2 px-3 w-full border-t-2 border-gray-300 shadow-[0_-4px_8px_rgba(0,0,0,0.1)] items-center'>
        <footer className='flex justify-between w-[580px] items-center'>
            <div className='flex gap-3'>
                { page>1 &&
                  <button onClick={() => setPage(prev => prev - 1)} className='font-normal text-sm border-2 border-gray-300 px-2 rounded-md'>Previous</button>
                }
                {page < totalPages && 
                  <button onClick={() => setPage(prev => prev + 1)} className='font-normal text-sm border-2 border-gray-300 py-1 rounded-md px-2'>Next</button>
                }
            </div>  

            <p className='font-bold text-xs text-center' >Page <span>{page}</span>  of  <span>{totalPages}</span> </p>
        </footer>
    </div>
  )
}

export default Pagination