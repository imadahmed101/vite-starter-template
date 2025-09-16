import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <>
    <nav className='bg-black flex justify-center items-center gap-4 md:gap-8 pb-2 md:pb-0 text-white text-xl text-semibold'>
        <NavLink to='/' className={({ isActive }) =>
          `border-b-2 pb-1 transition-all duration-200 ${isActive ? 'border-white' : 'border-transparent'
          }`
        }>Home</NavLink>
      </nav>
      
      </>
  )
}

export default Navbar