import React from 'react'
import vector from '../assets/vector.png'

export default function About() {
    return (
        <div className='flex items-center justify-center px-2 py-10 gap-20'>
            <section className='h-fit flex flex-col items-start justify-start gap-5 '>
                <h2 className="text-xl tracking-wider">
                    👋 Hi I am <span className="font-semibold">Lohit Nimbagal</span>
                </h2>
                <h1 className='text-4xl font-semibold tracking-wider'>Frontend Web Developer</h1>
                <p>
                    I'm a self-taught frontend developer with an electronics background. My main focus is on crafting responsive and functional designs that seamlessly blend creativity and technology. With an eye for detail, I bring a unique perspective to every project. Explore my latest projects in the projects page or section.
                </p>
            </section>
            <img src={vector} alt="" className='' />
        </div>
    )
}