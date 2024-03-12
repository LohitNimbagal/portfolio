import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import goshopping from '../assets/goshopping.jpeg'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Link } from 'react-router-dom'
import projectsdata from '../../projectsdata.json'


export default function Projects() {
  return (
    <div className='w-full h-full flex justify-evenly flex-wrap'>
      {projectsdata.map((project) => (
        <Card key={project.title} className='w-full bg-white bg-opacity-30 backdrop-blur-1 rounded-lg  py-5 my-5 flex flex-col items-center'>

          <CardHeader className='text-center'>
            <CardTitle className='text-2xl'>{project.title}</CardTitle>
            <CardDescription className='flex gap-3'>
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </CardDescription>
          </CardHeader>

          <section className='lg:flex items-center justify-center'>
            <Carousel className="w-full max-w-3xl px-12">
              <CarouselContent>
                <CarouselItem><img src={goshopping} alt="" /></CarouselItem>
                <CarouselItem><img src={goshopping} alt="" /></CarouselItem>
                <CarouselItem><img src={goshopping} alt="" /></CarouselItem>
              </CarouselContent>
              <CarouselPrevious className='left-2' />
              <CarouselNext className='right-2' />
            </Carousel>

            <div className='w-96 h-full flex flex-col items-start justify-start'>
              <CardContent>
                <ul className='list-disk my-1 text-sm'>
                  <h4 className='font-semibold'>Discription </h4>
                  {project.discription.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))
                  }
                </ul>
              </CardContent>

              <CardFooter className='flex items-center justify-start gap-5'>
                <Link to={project.liveLink} target='_blank'>
                  <Button>Live Link</Button>
                </Link>
                <Link to={project.gitLink} target='_blank'>
                  <Button>GitHub</Button>
                </Link>
              </CardFooter>
            </div>

          </section>
        </Card>
      ))
      }
    </div>
  )
}
