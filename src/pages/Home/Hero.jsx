import React from 'react'
import { NavLink } from 'react-router'

const Hero = () => {
  return (
    <div className="bg-[url('/images/hero.jpg')] bg-cover bg-center bg-no-repeat min-h-screen">
      <div className='py-64 rounded shadow-lg text-center'>
        <div className='bg-black/55'>
        <h2 className='text-2xl md:text-5xl font-bold text-white mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]'>Restaraunt Name </h2>
        <p className='md:text-xl text-white mb-12 max-w-[700px] mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]'>more info about restaurant is placed here. promote a dish/event here.</p>
        </div>
        <NavLink to="/products" className='bg-black p-4 text-white font-medium md:text-2xl'>Start Your Order</NavLink>
      </div>
    </div>
  )
}

export default Hero