/* eslint-disable react/prop-types */
import './Project.css';

export default function Project(props) {
    return (
        <div className={props.darkMode ? "light-project-wrapper" : "project-wrapper"}>
            <section className="info">
                <h3 className={props.darkMode ? "light-title" : ""}>{props.title}</h3>
                <p className={props.darkMode ? "light-project-description" : "project-description"}>{props.description}</p>
                <p className={props.darkMode ? "light-project-stack" : "project-stack"}><span className={props.darkMode ? "light-title" : ""} >Built with:  </span>{props.stack}</p>
               <span>

                    <a href={props.live}>
                        <button className={props.darkMode ? "light-btn" : "btn"}>View Live</button>
                    </a>

                    <a href={props.code}>
                        <button className={props.darkMode ? "light-btn" : "btn"}>View Code</button>
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
