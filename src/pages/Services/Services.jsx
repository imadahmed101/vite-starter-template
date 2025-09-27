import React from 'react'

const services = [
    {
        id: 1,
        title: 'Kitchen',
        description: 'Offering Kitchen remoddeling for your home.',
        image: '/images/kitchen.jpg'

    },
    {
        id: 2,
        title: 'Bathroom',
        description: 'Offering bathroom remoddeling for your home.',
        image: '/images/bathroom.jpg'

    },
    {
        id: 3,
        title: 'Flooring',
        description: 'Offering custom flooring for your home.',
        image: '/images/flooring.jpg'

    },
    {
        id: 4,
        title: 'Rec Rooms',
        description: 'Offering rec room remoddeling for your home.',
        image: '/images/rec-room.jpg'

    },
    {
        id: 5,
        title: 'Additions',
        description: 'Offering additions to your home or outdoor needs.',
        image: '/images/additions.jpg'

    },
    {
        id: 6,
        title: 'Decks',
        description: 'Offering custom deck creation and remoddeling.',
        image: '/images/deck.jpg'

    },
    {
        id: 7,
        title: 'Fencing',
        description: 'Offering custom fencing options or upgrades.',
        image: '/images/fencing.jpg'

    },


]

const Services = () => {
    return (
        <div className='py-16 px-4 md:px-16'>
            <h1 className='text-2xl text-green-700 text-center font-bold mb-16'>Services Offered</h1>

            <div className='max-w-[1200px] mx-auto space-y-16'>

                {services.map((service) => (
                    <div key={service.id} className={`flex flex-col-reverse md;flex-row items-center gap-8 ${service.id % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                        }`}>
                        <div className='flex-1'>
                            <div className='w-full aspect-[16/9] max-w-[500px] overflow-hidden rounded'>
                                <img src={service.image} className='w-full h-full object-cover' />
                            </div>
                        </div>
                        <div className='flex-1'>
                            <h2 className='text-xl font-semibold mb-2 md:mb-0'>{service.title}</h2>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Services