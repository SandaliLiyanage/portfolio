import React from 'react'
import {useEffect} from 'react';
import ScrollReveal from 'scrollreveal';

export default function Projects() {
  useEffect(() => {
    ScrollReveal().reveal('.projects-scroll', { duration: 2500, distance: '500px', origin: 'bottom' })
  })
  return (
    <div>
    <section id="projects" className="scroll-margin-top-16 projects-scroll">
      <h1 className='text-4xl m-8'>PROJECTS</h1>
      <div className='flex flex-col lg:flex-row projects-scroll'>
      <img src={process.env.PUBLIC_URL + "/nanoprocessor.png" } alt="4-bit nano-processor" className='m-6 sm:m-12 lg:ml-40 lg:w-96'></img>
      <div className='lg:w-1/2 lg:place-self-center m-6 md:m-8 lg:mr-40 '>
      <p className='text-3xl'>4-bit nano-processor</p>
      <a className='break-all' href = "https://github.com/SandaliLiyanage/Nanoprocessor-Design-Project" ><u>https://github.com/SandaliLiyanage/Nanoprocessor-Design-Project</u></a>
      <p >Designed a 4-bit nano-processor for the course module Computer Organization & Digital Design in the second semester at the University of Moratuwa.</p>
      </div>
      </div>
      <div className='flex flex-col lg:flex-row projects-scroll'>
      <img src={process.env.PUBLIC_URL + "/RPAL.png"}alt = "RPAL interpreter" className='m-6 sm:m-12 lg:ml-40 lg:w-96 '></img>
      <div className='lg:w-1/2 lg:place-self-center m-6 md:m-8 lg:mr-40 '>
      <p className='text-3xl'>RPAL - Interpreter</p>
      <a className='break-all' href = "https://github.com/rajivaPavan/rpal-project" ><u>https://github.com/rajivaPavan/rpal-project</u></a>
      <p >Implemented an interpreter for the RPAL language using the given Lexical, Grammar and Semantic Rules.</p>
      </div>  
      </div>
      
    </section>
    </div>
  )
}
