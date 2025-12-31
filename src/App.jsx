import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import About from './components/about/about'
import Portfolio from './components/portfolio/portfolio'
import Programs from './components/Programs/programs'
import Establishment from './components/Establishments/establishment'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'


const App = () => {

    return(
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Portfolio/>
        <Programs/>
        <Establishment/>
        <Contact/>
        <div className='container'><Footer/></div>
    </div>
    )
}

export default App