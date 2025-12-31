import React from 'react'
import './about.css'
import my_picture from '../../assets/me.jpg'

const about = () => {
  return (
    <div className='about container'>
        <div className='about-text'>
            <h2>About Me</h2>
            <p>I am a versatile and motivated technology professional with a strong foundation in web development, cybersecurity, and IT support. I have hands-on experience building functional, user-friendly web applications using HTML, CSS, JavaScript, React, and Node.js, along with database management and API integration. I have developed full-stack projects such as job platforms and wallet-based systems, giving me practical skills in deploying and managing real-world applications. My approach combines technical problem-solving with creativity, ensuring that the solutions I build are both efficient and user-focused. </p>

            <p>In addition to web development, I have a solid background in cybersecurity, having completed the TryHackMe Pre-Security Path and the Cisco Introduction to Cybersecurity course. I understand networking fundamentals, system security, and common vulnerabilities, and I am actively developing my skills toward a career in penetration testing. I am also proficient in IT support and Microsoft tools, including PC maintenance, troubleshooting, operating systems, Word, Excel, and PowerPoint, providing comprehensive technical assistance in both professional and educational settings. With strong analytical skills, a quick learning ability, and a passion for technology, I strive to create solutions that are secure, efficient, and impactful.</p>
        </div>
        <div className='about-profile'>
            <img src={my_picture} alt="" />
            <p>Game ID: THALVOR</p>
        </div>
    </div>
  )
}

export default about
