import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between py-4 px-8'>
        <h1 className='text-red-600 text-4xl font-black'>PHIMMOIFLIX</h1>
        <div className='flex gap-5'>
            <button className='text-white button'>Đăng nhập</button>
            <button className='text-white bg-red-500 rounded-sm py-1 px-4'>Đăng ký</button>            
        </div>        
    </div>
  )
}

export default Navbar