import React from 'react'
import {useEffect} from 'react';
import ScrollReveal from 'scrollreveal';

export default function Skills() {

  useEffect(()=>{
    ScrollReveal().reveal('.skills-reveal',{duration:2500, distance:'500px', origin:'bottom'});
  })

  return (
    <div id='skills'>
      <div className='skills-reveal'>
      <h1 className='text-4xl m-8 scroll-pt-2.5 '>Skills</h1>
      <p className='m-6'> Still in a voyage of refining my skill set.</p>
      </div>
      
    </div>
  )
}
