import React from 'react'
import {useState, useEffect} from 'react';   
import './home.css';


export default function Home() {
// const [header, setHeader] = useState(false);

// const changeBackground = () => {
//     console.log(window.scrollY);
//     if(window.scrollY >= 40){
//         setHeader(true);
//     }else{
//         setHeader(false);
//     }
//     }
//     window.addEventListener('scroll', changeBackground);
//     console.log('Header: ', header);
  return (
    <section id="home">
        <div id ="header">
            <div className='flex ... flex-col lg:flex-row'>
                <div className="min-h-full ... h-dvh bg-cover bg-center bg-top lg:w-1/2 bg-[url('components/images/MyPic4.jpg')]" ></div>
                <div className='lg:w-1/2 place-self-center '>
                    <div className='place-self-center'>
                    <p className='text-6xl font-extrabold m-8'>SANDALI LIYANAGE</p>
                    <br></br>
                    <p className='text-2xl'>I'm a Computer Science & Engineering Undergraduate</p>
                    <p className='text-2xl'>at University of Moratuwa, Sri Lanka</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        
    
  )
}
