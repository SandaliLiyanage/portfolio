import React from 'react'
import {useState, useEffect} from 'react';
import ScrollReveal from 'scrollreveal';   
import './home.css';


export default function Home() {

  const [headerVisible, setHeaderVisible]= useState(false);
  const [borderRabdius, setborderRadius]= useState('rounded-full');


  useEffect(()=> {
    ScrollReveal().reveal('.header-text',{  duration:2500, distance:'500px', origin:'bottom'});  
  })
  return (
    <section id="home">
        <div id ="header">
            <div className='flex ... flex-col lg:flex-row'>
                <div className="image min-h-full ... h-dvh lg:w-1/2 mt-16 bg-contain bg-center bg-top bg-no-repeat bg-[url('components/images/MyPic4.jpg')]" ></div>
                <div className='lg:w-1/2 lg:place-self-center header-text m-6 lg:mr-16'>
                    <div className='place-self-center'>
                    <p className='text-3xl sm:text-5xl md:text-6xl font-extrabold '>SANDALI LIYANAGE</p>
                    <br></br>
                    <p className='text-2xl'>I'm a Computer Science & Engineering Undergraduate </p>
                    <p className='text-2xl'>at University of Moratuwa, Sri Lanka</p>
                    <div>
                        <ul className='flex flex-row justify-center' >
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
        </div>
    </section>
        
    
  )
}


// bg-cover bg-center bg-top
