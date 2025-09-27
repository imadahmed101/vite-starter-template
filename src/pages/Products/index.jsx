import React from 'react'
import { NavLink } from 'react-router'

const Products = () => {
    return (
        <div className='bg-white text-black min-h-screen'>
            <div className='px-4 pb-8'>
                <section id="projects" className="py-16">
                    <h2 className="text-3xl font-bold text-center mb-12">Menu</h2>
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                            {/* Card 1 */}
                            <NavLink to='/' className="flex flex-col justify-between h-full rounded-lg border p-5 shadow-lg">
                                <img
                                    // src="/images/cloud1.svg"
                                    src='/images/burger.jpg'
                                    alt='Burger and fries with sauce.'
                                    className="rounded-md mb-4 h-60 w-full object-cover"
                                />
                                <div className='flex justify-between'>

                                    <h3 className="text-xl font-semibold mb-2">Burger Combo</h3>
                                    <p>$13.99</p>
                                </div>

                                <p className="text-gray-800 mb-3">
                                    A fresh beef patty, toasted buns, crisp veggies and savoury sauce, combined with fresh fries and dipping sauces.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-3 text-gray-600">
                                    <span className="text-sm bg-gray-200 px-2 py-1 rounded">400 Cal</span>
                                    <span className="text-sm bg-gray-200 px-2 py-1 rounded">30g+ Protein</span>
                                    <span className="text-sm bg-gray-200 px-2 py-1 rounded">45 Carbs</span>
                                    <span className="text-sm bg-gray-200 px-2 py-1 rounded">5g Fat</span>
                                </div>

                            </NavLink>
                            {/* Card 2 */}
                            <NavLink to='/' className="flex flex-col justify-between h-full rounded-lg border p-5 shadow-lg">
                                <img
                                    // src="/images/cloud1.svg"
                                    src='/images/beef.jpg'
                                    alt='Beef with veggies and sauce.'
                                    className="rounded-md mb-4 h-60 w-full object-cover"
                                />
                                <div className='flex justify-between'>

                                    <h3 className="text-xl font-semibold mb-2">Beef Combo</h3>
                                    <p>$15.99</p>
                                </div>

                                <p className="text-gray-800 mb-3">
                                    A fresh tender beef, sauteed veggies and savoury sauce. Pair this with your favourite beverage.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-3 text-gray-600">
                                    <span className="text-sm bg-gray-200 px-2 py-1 rounded">440 Cal</span>
                                    <span className="text-sm bg-gray-200 px-2 py-1 rounded">34g+ Protein</span>
                                    <span className="text-sm bg-gray-200 px-2 py-1 rounded">14 Carbs</span>
                                    <span className="text-sm bg-gray-200 px-2 py-1 rounded">5g Fat</span>
                                </div>

                            </NavLink>
                            {/* Card 3 */}
                            <NavLink to='/' className="flex flex-col justify-between h-full rounded-lg border p-5 shadow-lg">
                                <img
                                    src='/images/lamb.jpg'
                                    alt='Lamb roasted on a plate.'
                                    className="rounded-md mb-4 h-60 w-full object-cover"
                                />
                                <div className='flex justify-between'>

                                    <h3 className="text-xl font-semibold mb-2">Lamb Entree</h3>
                                    <p>$17.99</p>
                                </div>

                                <p className="text-gray-800 mb-3">
                                    A freshly roasted lamb, sauteed veggies and savoury sauce. Pair this with your favourite beverage.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-3 text-gray-600">
                                    <span className="text-sm bg-gray-200 px-2 py-1 rounded">380 Cal</span>
                                    <span className="text-sm bg-gray-200 px-2 py-1 rounded">26g+ Protein</span>
                                    <span className="text-sm bg-gray-200 px-2 py-1 rounded">13 Carbs</span>
                                    <span className="text-sm bg-gray-200 px-2 py-1 rounded">6g Fat</span>
                                </div>
                                </NavLink>

                                                            {/* Card 1 */}
                            <NavLink to='/' className="flex flex-col justify-between h-full rounded-lg border p-5 shadow-lg">
                                <img
                                    // src="/images/cloud1.svg"
                                    src='/images/burger.jpg'
                                    alt='Burger and fries with sauce.'
                                    className="rounded-md mb-4 h-60 w-full object-cover"
                                />
                                <div className='flex justify-between'>

                                    <h3 className="text-xl font-semibold mb-2">Burger Combo</h3>
                                    <p>$13.99</p>
                                </div>

                                <p className="text-gray-800 mb-3">
                                    A fresh beef patty, toasted buns, crisp veggies and savoury sauce, combined with fresh fries and dipping sauces.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-3 text-gray-600">
                                    <span className="text-sm bg-gray-200 px-2 py-1 rounded">400 Cal</span>
                                    <span className="text-sm bg-gray-200 px-2 py-1 rounded">30g+ Protein</span>
                                    <span className="text-sm bg-gray-200 px-2 py-1 rounded">45 Carbs</span>
                                    <span className="text-sm bg-gray-200 px-2 py-1 rounded">5g Fat</span>
                                </div>

                            </NavLink>
                            {/* Card 2 */}
                            <NavLink to='/' className="flex flex-col justify-between h-full rounded-lg border p-5 shadow-lg">
                                <img
                                    // src="/images/cloud1.svg"
                                    src='/images/beef.jpg'
                                    alt='Beef with veggies and sauce.'
                                    className="rounded-md mb-4 h-60 w-full object-cover"
                                />
                                <div className='flex justify-between'>

                                    <h3 className="text-xl font-semibold mb-2">Beef Combo</h3>
                                    <p>$15.99</p>
                                </div>

                                <p className="text-gray-800 mb-3">
                                    A fresh tender beef, sauteed veggies and savoury sauce. Pair this with your favourite beverage.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-3 text-gray-600">
                                    <span className="text-sm bg-gray-200 px-2 py-1 rounded">440 Cal</span>
                                    <span className="text-sm bg-gray-200 px-2 py-1 rounded">34g+ Protein</span>
                                    <span className="text-sm bg-gray-200 px-2 py-1 rounded">14 Carbs</span>
                                    <span className="text-sm bg-gray-200 px-2 py-1 rounded">5g Fat</span>
                                </div>

                            </NavLink>
                            {/* Card 3 */}
                            <NavLink to='/' className="flex flex-col justify-between h-full rounded-lg border p-5 shadow-lg">
                                <img
                                    src='/images/lamb.jpg'
                                    alt='Lamb roasted on a plate.'
                                    className="rounded-md mb-4 h-60 w-full object-cover"
                                />
                                <div className='flex justify-between'>

                                    <h3 className="text-xl font-semibold mb-2">Lamb Entree</h3>
                                    <p>$17.99</p>
                                </div>

                                <p className="text-gray-800 mb-3">
                                    A freshly roasted lamb, sauteed veggies and savoury sauce. Pair this with your favourite beverage.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-3 text-gray-600">
                                    <span className="text-sm bg-gray-200 px-2 py-1 rounded">380 Cal</span>
                                    <span className="text-sm bg-gray-200 px-2 py-1 rounded">26g+ Protein</span>
                                    <span className="text-sm bg-gray-200 px-2 py-1 rounded">13 Carbs</span>
                                    <span className="text-sm bg-gray-200 px-2 py-1 rounded">6g Fat</span>
                                </div>
                                </NavLink>
                    </div>
                    </div>
                </section>


            </div>
        </div>
    )
}

export default Products