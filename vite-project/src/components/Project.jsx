/* eslint-disable react/prop-types */
import './Project.css'


export default function Project(props) {
    return (
        <div className="project-wrapper">
        <section className="info">
            <h3 className="project-title">{props.title}</h3>
            <p className ="project-description">{props.description}</p>
            <p className ="project-stack">{props.stack}</p>
        </section>
        <section className="img-container">
            <img src={props.img} alt="Project img" className="project-img"/>
        </section>
        </div>
        
    )
}