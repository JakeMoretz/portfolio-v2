/* eslint-disable react/no-unescaped-entities */
import './About.css'


export default function About() {
    return(
        <>
        <div className='about-wrapper'>
        <section className="about-container">
            <h3>Hi, My name is </h3>
            <h1>Jake Moretz</h1>
            <h3>A frontend developer</h3>
        </section>
        <section className ="about-info">
            <p>Allow me to introduce myself in a way that highlights my uniqueness. I go by the name Jake Moretz, 
                a passionate developer hailing from Atlanta, known for my self-taught journey in the world of web development. 
                Over the course of nearly a year, I've immersed myself in the realm of front-end technologies, honing my skills 
                and gaining expertise.
            </p>
            <p>Beyond coding, my diverse background includes leading the way in the HVAC industry, where I've developed exceptional 
                communication and teamwork abilities. This experience has been invaluable in shaping my work ethic, as I've always been 
                driven by self-motivation to achieve my goals.
            </p>
            <p>
                What sets me apart is my innate ability to embrace new challenges fearlessly. My self-taught nature empowers me to rapidly 
                adapt to emerging technologies, making me a perfect fit for any role that requires a dynamic and dedicated individual.
            </p>
        </section>
        </div>
        <h3 className="projects">Projects</h3>
        </>
    )   
}