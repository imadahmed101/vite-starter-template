import React from 'react'

const Contact = () => {
  return (
        <div className='min-h-screen'>
        <h2 className='text-center mb-8 text-green-700 text-2xl font-bold'>Contact Us For Your Next Indoor or Outdoor Project</h2>
        <div className=' px-8 md:px-16 flex flex-col md:flex-row justify-center gap-4'>
          <div className='flex-1 my-auto lg:my-0'>
            <img src='/images/contact.jpg' className=''/>
            </div>

            <div className='flex-1 text-center md:text-left'>
              <div className='inline-flex gap-2'>
                <img src='/images/telephone.png' className='w-6 h-6 my-auto bg-white p-20'/>
              <h3 className='text-xl font-semibold mb-2'>Telephone</h3>
              </div>
            <p className='mb-8'>
              905-894-8599
            </p>
              <div className='inline-flex gap-2'>
                <img src='/images/email.png' className='w-6 h-6 my-auto'/>
              <h3 className='text-xl font-semibold mb-2'>Email</h3>
              </div>
            
            <p className='mb-8'>

              dennisoreillycontracting@live.ca
            </p>
              <div className='inline-flex gap-2'>
                <img src='/images/clock.png' className='w-6 h-6 my-auto'/>
              <h3 className='text-xl font-semibold mb-2'>Business Hours</h3>
              </div>
            
            <p className='mb-8'>
              Monday-Friday 9am-5pm
            </p>
            <div className='inline-flex gap-2'>
                <img src='/images/area.png' className='w-6 h-6 my-auto'/>
              <h3 className='text-xl font-semibold mb-2'>Areas Served</h3>
              </div>

            <p className='mb-8'>
              Niagara Falls, St. Catherines, Thorold, Welland, Port Colborne, Fort Erie, Grimsby, Lincoln, Niagara-on-the-Lake, Wainfleet, West Lincoln.
            </p>

            </div>

        </div>
    </div>
  )
}

export default Contact