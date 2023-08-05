/* eslint-disable react/prop-types */
import "./skills.css"

export default function Skills(props) {
    return(
        <section className="skills">
            <div className="skill-wrapper">
                <img src={props.skill} alt="" className="skill-img" />
                <p className="skill-text">{props.text}</p>
            </div>
        </section>
    )
}