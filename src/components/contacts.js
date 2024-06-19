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
                <li><a href="https://www.facebook.com/sandalikLiyanage"><img className= "m-5" src="linkedin.png"></img></a></li>
                <li><a href="https://www.facebook.com/sandalikLiyanage"><img className= "m-5" src="facebook2.png"></img></a></li>
                <li><a href="https://www.facebook.com/sandalikLiyanage"><img className= "m-5" src="instagram2.png"></img></a></li>
                <li><a href="https://www.facebook.com/sandalikLiyanage"><img className= "m-5" src="github.png"></img></a></li>
                <li><a href="https://www.facebook.com/sandalikLiyanage"><img className= "m-5" src="twitter.png"></img></a></li>


            </ul>
          </div>
      </div>
      
      </div>
    </div>
  )
}
