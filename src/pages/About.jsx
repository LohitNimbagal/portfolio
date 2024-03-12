import React from 'react'
import vector from '../assets/vector.png'
import { NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function About() {
    return (
        <div className='flex flex-col items-center justify-center px-2 py-10 gap-20'>
            <section className='flex items-center justify-center gap-32 '>
                <div className='flex flex-col gap-5 items-start justify-center'>
                    <h2 className="text-xl tracking-wider">
                        👋 Hi I am Lohit Nimbagal
                    </h2>
                    <h1 className='text-4xl font-semibold tracking-wider'>Frontend Web Developer</h1>
                    <p>
                        I'm a self-taught frontend developer with an electronics background. My main focus is on crafting responsive and functional designs that seamlessly blend creativity and technology. With an eye for detail, I bring a unique perspective to every project. Explore my latest projects in the projects page or section.
                    </p>

                    <NavLink to="/projects">
                        <Button className='flex items-center gap-2'>
                            Explore Projects
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className='w-4 h-4'><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                        </Button>
                    </NavLink>
                </div>
                <img src={vector} alt="" />
            </section>
            {/* <section className='w-full h-36 bg-white bg-opacity-30 p-5 backdrop-blur-1 rounded-lg'>
                
            </section> */}
        </div>
    )
}