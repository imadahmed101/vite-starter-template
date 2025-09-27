import React from 'react'
import { NavLink } from 'react-router'

const Services = () => {
  return (
    <div className='py-16'>
        <h3 className='text-center mb-8 text-2xl font-semibold'>Services Offered</h3>
        <div className=' max-w-[1000px] px-4 lg:px-0 mx-auto flex flex-col md:flex-row justify-center gap-4'>
          <div className='flex-1'>
            <img src='/images/kitchen.jpg'/>
            <p className='text-xl text-center font-medium mt-2'>
              Kitchen Remodelling
            </p>
            </div>

            <div className='flex-1'>
            <img src='/images/bathroom.jpg'/>
            <p className='text-xl text-center font-medium mt-2'>
              Bathroom Remodelling
            </p>
            </div>

            <div className='flex-1'>
            <img src='/images/flooring.jpg'/>
            <p className='text-xl text-center font-medium mt-2'>
              Custom Flooring
            </p>
            </div>

        </div>
        <NavLink to='/services' className='flex justify-center mt-16 text-xl'><span className='border-black border-[2px] px-2 py-1'>View All Services</span></NavLink>
    </div>
  )
}

export default Services