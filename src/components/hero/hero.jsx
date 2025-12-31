import React from 'react'
import './hero.css'
import right_arrow from '../../assets/right-arrow.gif'
import { Link } from 'react-scroll'

const hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Miracle Agha</h1>
        <h3>Gamer - Developer - Cyberscurity (Pen-Tester) - Anything</h3>
        <Link to='programs' smooth={true} offset={0} duration={500} className='btn'> Explore More<img src={right_arrow} alt="My GIF" /></Link>
      </div>
    </div>
  )
}

export default hero
