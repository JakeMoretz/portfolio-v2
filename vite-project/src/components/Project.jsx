/* eslint-disable react/prop-types */
import './Project.css';

export default function Project(props) {
    return (
        <div className="project-wrapper">
            <section className="info">
                <h3 className="project-title">{props.title}</h3>
                <p className="project-description">{props.description}</p>
                <p className="project-stack">{props.stack}</p>
               <span>

                    <a href={props.live}>
                        <button className ="btn">View Live</button>
                    </a>

                    <a href={props.code}>
                        <button className ="btn">View Code</button>
                    </a>
                    
               </span>
            </section>
            <section className="img-container">
                <img
                    src={props.img}
                    alt="Project img"
                    className="project-img"
                />
            </section>
        </div>
    );
}
