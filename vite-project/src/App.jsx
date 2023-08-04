// import React from 'react'
import React from 'react'
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Info from './components/Info';
import data from './projectData';
import './App.css';

export default function App() {
    const projectCard = data.map((item) => {
        return (
            <Project
                key={item.id}
                title={item.title}
                description={item.description}
                stack={item.stack}
                img={item.img}
            />
        );
    });

  
        
    return (
        <main id="home" className="main">
            <Nav />           
            <About />           
            <div id="about">
                <Info />
            </div>            
            <div id="project">{projectCard}</div>
            {projectCard}
            {projectCard}
            <div id="contact">
                <Contact />
            </div>
        </main>
    );
}
