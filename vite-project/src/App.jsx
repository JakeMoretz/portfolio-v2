/* eslint-disable react/prop-types */

import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Info from './components/Info';
import Skills from './components/Skills';
import skillData from './skills.js';
import data from './projectData';
import './App.css';

export default function App() {
    const [darkMode, setDarkMode] = React.useState(false);

    function toggleDarkMode() {
        setDarkMode((prevState) => !prevState);
    }

    const projectCard = data.map((item) => {
        return (
            <Project
                key={item.id}
                title={item.title}
                description={item.description}
                stack={item.stack}
                img={item.img}
                live={item.live}
                code={item.code}
                darkMode={darkMode}
            />
        );
    });

    const skillElement = skillData.map((item) => {
        return (
            <Skills
                key={item.id}
                skill={item.skill}
                text={item.text}
                darkMode={darkMode}
            />
        );
    });

    return (
        <main id="home" className={darkMode ? 'light-main' : 'main'}>
            <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <About darkMode={darkMode} />
            <h3 className={darkMode ? 'light-about' : 'info-title'}>About</h3>
            <div id="about">
                <Info darkMode={darkMode} />
            </div>
            <h3 className={darkMode ? 'light-about' : 'info-title'}>Skills</h3>
            <div className="skills">{skillElement}</div>
            <h3 className={darkMode ? 'light-about' : 'info-title'}>
                Projects
            </h3>
            <div id="project">{projectCard}</div>
            <div id="contact">
                <Contact darkMode={darkMode} />
            </div>
        </main>
    );
}
