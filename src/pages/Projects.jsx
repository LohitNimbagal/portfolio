import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import goshopping from '../assets/goshopping.jpeg'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const projects = [
  {
    title: "PreVue",
    // screenshot: "/assets/prevue.png",
    gitLink: "https://github.com/LohitNimbagal/PreVue",
    liveLink: "https://prevuee.vercel.app/",
  },
  {
    title: "Password Generator",
    // screenshot: "/assets/password-generator.png",
    gitLink: "https://github.com/LohitNimbagal/Password-Generator",
    liveLink: "https://paasswordgenerator.netlify.app/",
  },
  // {
  //   title: "To-Do List App",
  //   // screenshot: "assets/to-do-app.png",
  //   gitLink: "https://github.com/LohitNimbagal/To-Do-App",
  //   liveLink: "https://minimal-taskmanager.netlify.app/",
  // },
  // {
  //   title: "BMI Calculator",
  //   // screenshot: "/assets/bmi-calculator.png",
  //   gitLink: "https://github.com/LohitNimbagal/minimalBMIcalculator",
  //   liveLink: "https://minimalbmicalcalculator.netlify.app/",
  // }, {
  //   title: "Weather Checker",
  //   // screenshot: "/assets/weather-app.png",
  //   gitLink: "https://github.com/LohitNimbagal/minimalistweatherwebapp",
  //   liveLink: "https://minimalistweatherwebapp.netlify.app/",
  // },
  // {
  //   title: "Calculator",
  //   // screenshot: "/assets/calculator.png",
  //   gitLink: "https://github.com/LohitNimbagal/minimalistcalculator",
  //   liveLink: "https://minimalistcalculator.netlify.app/",
  // },
  // {
  //   title: "Bubble Game",
  //   // screenshot: "/assets/buble-game.png",
  //   gitLink: "https://github.com/LohitNimbagal/Bubble-Game",
  //   liveLink: "https://bbubblegame.netlify.app/",
  // }
]

export default function Projects() {
  return (
    <div className='w-full h-full flex justify-evenly flex-wrap gap-10'>
      {projects.map((project) => (
        <Card className='w-full bg-white bg-opacity-30 backdrop-blur-1 rounded-lg flex py-5'>

          <Carousel className="w-full max-w-3xl p-5 px-12">
            <CarouselContent>
              <CarouselItem><img src={goshopping} alt="" /></CarouselItem>
              <CarouselItem><img src={goshopping} alt="" /></CarouselItem>
              <CarouselItem><img src={goshopping} alt="" /></CarouselItem>
            </CarouselContent>
            <CarouselPrevious className='left-2' />
            <CarouselNext className='right-2' />
          </Carousel>

          <div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>E-Commers</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className='list-disc my-1 text-sm'>
                <h4 className='font-semibold'>About: </h4>
                <li className='ml-5'>JWT Authentication</li>
                <li className='ml-5'>Location-based currency conversion.</li>
                <li className='ml-5'>User Convenience: Seamless currency adaptation.</li>
              </ul>

              <ul className='list-disc my-1 text-sm'>
                <h4 className='font-semibold'>New:</h4>
                <li className='ml-5'>JWT Authentication</li>
                <li className='ml-5'>Location-based currency conversion.</li>
                <li className='ml-5'>User Convenience: Seamless currency adaptation.</li>
              </ul>
            </CardContent>
            <CardFooter className='flex items-center justify-evenly'>
              <Button>Live Link</Button>
              <Button>GitHub</Button>
            </CardFooter>
          </div>
        </Card>
      ))
      }
    </div>
  )
}
