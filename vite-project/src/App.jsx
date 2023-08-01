// import React from 'react'
import Nav from './components/Nav'
import About from './components/About'
import Project from './components/Project'
import data from './projectData'
import './App.css'

export default function App() {

    const projectCard = data.map(item => {
        return(
            <Project 
                key={item.id}
                title={item.title}
                description={item.description}
                stack={item.stack}
                img={item.img}
            />
        )
    })
    return (
        <main className='main'>
            <Nav />
            <About />
           {projectCard}
           {projectCard}
           {projectCard}
        </main>
    )
}