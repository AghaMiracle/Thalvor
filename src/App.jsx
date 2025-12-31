import React,  { useState, useEffect } from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import About from './components/about/about'
import Portfolio from './components/portfolio/portfolio'
import Programs from './components/Programs/programs'
import Establishment from './components/Establishments/establishment'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Loader from './components/loader/loader'


const App = () => {


    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000); // show loader 2.5s
        return () => clearTimeout(timer);
    }, []);


    return loading ? (
        <Loader/> ) : (
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