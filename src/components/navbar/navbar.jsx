import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../../assets/light-logo.png'
import menu_icon from '../../assets/menu.webp'
import { Link } from 'react-scroll';

const navbar = () => {

  
    const [sticky, setSticky] = useState(false);
    
    useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
      })
    },[]);

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

  return (

    <nav className={`nav-container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="THALVOR" className='logo' />
      <ul className={mobileMenu ? '' : 'hide-menu-icon'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='about' smooth={true} offset={0} duration={500}>About</Link></li>
        <li><Link to='portfolio' smooth={true} offset={0} duration={500}>Portfolio</Link></li>
        <li><Link to='programs' smooth={true} offset={0} duration={500}>Programs/Projects</Link></li>
        <li><Link to='establishment' smooth={true} offset={0} duration={500}>Establishments</Link></li>
        <li><Link to='contact' smooth={true} offset={-70} duration={500} className='btn'>Contact Me</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default navbar
