import React from 'react'
import {useState, useEffect} from 'react';   
import {HashLink as Link } from 'react-router-hash-link';

export default function Nav() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
    if(window.scrollY >= 80){
        setNavbar(true);
    }else{
        setNavbar(false);
    }
    }

    const scrollWithOffset = (el, offset) => {
      const elementPosition = el.offsetTop;
      const offsetPosition = elementPosition - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    };

    window.addEventListener('scroll', changeBackground);
    console.log('Navbar:', navbar);

  return (
    <div className='fixed top-0 w-full z-10 '>
      <nav className={navbar ? 'bg-sky-950 opacity-75 ' : 'white '} >
        <ul className={navbar ? 'text-white' : 'text-black'}>
            <li><Link smooth to="/#home" >Home</Link></li>
            <li><Link smooth to="/#projects" scroll={el => scrollWithOffset(el, 93)}>Projects</Link></li>
            <li><Link smooth to="/#skills" scroll={el => scrollWithOffset(el, 93)}>Skills</Link></li>
            <li><Link smooth to="/#contacts" scroll={el => scrollWithOffset(el, 93)}>Experience</Link></li>
            <li><Link smooth to="/#contacts" scroll={el => scrollWithOffset(el, 93)}>Contacts</Link></li>
        </ul>
      </nav>
    </div>
  )
}
