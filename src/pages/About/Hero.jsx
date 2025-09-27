import React from 'react'
import { NavLink } from 'react-router'

const Hero = () => {
  return (
    <div className="bg-[url('/images/contact.jpg')] bg-cover bg-center bg-no-repeat min-h-screen pt-24">
      <div className='bg-black/55 opacity-70 max-w-[499px] rounded p-2 mx-auto text-white'>
        <div>
          <h2 className='text-center mb-8 text-2xl font-bold'>About Us</h2>
          <div className=' px-8 md:px-16 flex flex-col md:flex-row justify-center gap-4'>

            <div className='flex-1 text-center md:text-left'>
              <div className='inline-flex gap-2'>
                <img src='/images/telephone.png' className='w-6 h-6 my-auto bg-white rounded' />
                <h3 className='text-xl font-semibold mb-2'>Telephone</h3>
              </div>
              <p className='mb-8'>
                905-999-5000
              </p>
              <div className='inline-flex gap-2'>
                <img src='/images/email.png' className='w-6 h-6 my-auto bg-white rounded' />
                <h3 className='text-xl font-semibold mb-2'>Email</h3>
              </div>

              <p className='mb-8'>

                info@restaraunt.ca
              </p>
              <div className='inline-flex gap-2'>
                <img src='/images/clock.png' className='w-6 h-6 my-auto bg-white rounded' />
                <h3 className='text-xl font-semibold mb-2'>Business Hours</h3>
              </div>

              <p className='mb-8'>
                Monday-Friday 9am-5pm
              </p>


            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero