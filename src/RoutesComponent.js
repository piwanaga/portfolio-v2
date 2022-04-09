import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './components/Pages/About'
import Projects from './components/Pages/Projects'
import Connect from './components/Pages/Connect'
import Home from './components/Pages/Home'

const RoutesComponent = () => {
    return (
        <Routes>
            <Route 
                path='/about'
                element={<About />}
            />
            <Route 
                path='/projects'
                element={<Projects />}
            />
            <Route 
                path='/connect'
                element={<Connect />}
            />
            <Route 
                path='/'
                element={<Home />}
            />
        </Routes>
    )
}

export default RoutesComponent