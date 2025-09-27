import React from 'react'
import { NavLink } from 'react-router'

const Contact = () => {
  return (
    <div className='py-16 min-h-screen'>
      <h2 className='text-center mb-8 text-white text-2xl font-bold'>Error 404</h2>
        <NavLink to='/'>
      <p className='text-center underline '>The page you have requested does not exist. Please click here to go back to home page.</p>
    </NavLink>

    </div >
  )
}

export default Contact