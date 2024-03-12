import React from 'react'
import { NavLink } from 'react-router-dom'

const navItems = ['About', 'Projects', 'Blogs']

export default function NavBar() {
    return (
        <div className='w-full h-16 flex items-center justify-between py-8'>
            <h1 className='text-2xl font-semibold antialiased tracking-wider'>Lohit Nimbagal</h1>

            <ul className='flex items-center gap-10 tracking-wider'>
                {navItems.map((item) => (
                    <NavLink key={item}  to={item === 'About' ? `/` : `/${item.toLowerCase()}`}>
                        <li className='hover:text-gray-600 transition duration-400'>
                            {item}
                        </li>
                    </NavLink>
                ))}
            </ul>
        </div>
    )
}