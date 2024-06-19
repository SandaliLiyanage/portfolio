import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';

export default function Experience () {
    useEffect(() =>{
        ScrollReveal().reveal('.experience-scroll', { duration: 2500, distance: '500px', origin: 'bottom'})
    }
    )
    return (
        <div>
        <section id = 'experience' className='scroll -margin-top-16 experience-scroll'>
            <h1 className='text-4xl m-8'>EXPERIENCE</h1>
            <p className='m-6'>Have a lot of experience... hee hee</p>
        </section>
        
        </div>
    )
}


