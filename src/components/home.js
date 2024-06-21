import React from 'react'
import {useEffect} from 'react';
import ScrollReveal from 'scrollreveal';   
import './home.css';


export default function Home() {




  useEffect(()=> {
    ScrollReveal().reveal('.header-text',{  duration:2500, distance:'500px', origin:'bottom'});  
  })

  
  return (
    <section id="home">
        <div id ="header">
            <div className='flex ... flex-col lg:flex-row'>
                <div className="image min-h-full ... h-dvh lg:w-1/2 mt-16 bg-contain bg-center bg-top bg-no-repeat bg-[url('components/images/MyPic4.jpg')]" alt = "bg" ></div>
                <div className='lg:w-1/2 lg:place-self-center header-text m-6 lg:mr-16'>
                    <div className='place-self-center'>
                    <p className='text-3xl sm:text-5xl md:text-6xl font-extrabold '>SANDALI LIYANAGE</p>
                    <br></br>
                    <p className='text-2xl'>I'm a Computer Science & Engineering Undergraduate </p>
                    <p className='text-2xl'>at University of Moratuwa, Sri Lanka</p>
                    <div>
                        <ul className='flex flex-row justify-center' >
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
        </div>
    </section>
        
    
  )
}

