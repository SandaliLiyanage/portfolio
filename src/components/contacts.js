import React from 'react'
import {useEffect, useState} from 'react';
import ScrollReveal from 'scrollreveal';

export default function Contacts() {
  useEffect(() => {
    ScrollReveal().reveal('.contacts-reveal', { duration: 2500, distance: '500px', origin: 'bottom' })
  })
  return (
    <div id ="contacts" >
      <div className='contacts-reveal'>
      <h1 className='text-4xl m-8'>Contacts</h1>
      <div className='flex ... flex-col lg:flex-row'>
        <div className='lg:w-1/2 place-self-center'>
          <p >Email: sandaliliyanagecse@gmail.com</p>
          </div>
          <div className='lg:w-1/2 place-self-center'>
            	<ul className='flex flex-row justify-center m-8' >
              <li><a href="www.linkedin.com/in/sandaliliyanage-cse"><img className= "m-5" src={process.env.PUBLIC_URL + "/linkedin.png" } alt = "linkedin icon"></img></a></li>
                            <li><a href="https://www.facebook.com/sandalikLiyanage"><img className= "m-5" src={process.env.PUBLIC_URL + "/facebook2.png"} alt = "facebook icon"></img></a></li>
                            <li><a href="https://github.com/SandaliLiyanage"><img className= "m-5" src={process.env.PUBLIC_URL + "/github.png"} alt = "github icon"></img></a></li>
                            <li><a href="https://www.facebook.com/sandalikLiyanage"><img className= "m-5" src={process.env.PUBLIC_URL + "/instagram2.png"}  alt = "instagram icon"></img></a></li>
                            <li><a href="https://www.facebook.com/sandalikLiyanage"><img className= "m-5" src={process.env.PUBLIC_URL + "/twitter.png"} alt = "twitter icon"></img></a></li>


            </ul>
          </div>
      </div>
      
      </div>
    </div>
  )
}
