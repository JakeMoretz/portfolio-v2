/* eslint-disable react/prop-types */
import "./Skills.css"

export default function Skills(props) {
    return(
    
            <div className={props.darkMode ? "light-skill-wrapper" : "skill-wrapper"}>
                <img src={props.skill} alt="" className={props.darkMode ? "light-skill-img" : "skill-img"}/>
                <p className={props.darkMode ? "light-skill-text" : "skill-text"}>{props.text}</p>
            </div>
       
    )
}