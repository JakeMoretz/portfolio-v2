/* eslint-disable react/prop-types */
import "./Skills.css"

export default function Skills(props) {
    return(
    
            <div className="skill-wrapper">
                <img src={props.skill} alt="" className="skill-img" />
                <p className="skill-text">{props.text}</p>
            </div>
       
    )
}