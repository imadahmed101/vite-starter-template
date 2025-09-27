import React from 'react'
import { NavLink } from 'react-router'

const pages = [
  {name: "Home", path: "/"},
  {name: "About", path: "/about"},
  {name: "Services", path: "/services"},
  {name: "Contact", path: "/contact"},
  {name: "Products", path: "/products"},
  {name: "Portfolio", path: "/portfolio"},
]

const Navbar = () => {
  return (
    <>
    <nav className='bg-black flex justify-center items-center gap-4 md:gap-8 pb-2 md:pb-0 text-white text-xl text-semibold'>
        {pages.map((page) => (

          <NavLink key={page.path} to={page.path} className={({ isActive }) =>
            `border-b-2 pb-1 transition-all duration-200 ${isActive ? 'border-white' : 'border-transparent'
              }`
            }>{page.name}</NavLink>
          ))}
      </nav>
      
      </>
  )
}

export default Navbar