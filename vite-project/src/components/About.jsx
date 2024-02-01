/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import './About.css';

export default function About(props) {
    return (
        <>
            <div className={props.darkMode ? "light-about-wrapper" : "about-wrapper"}>
                <section className={props.darkMode ? "light-about-container" : "about-container"}>
                    <h3 className={props.darkMode ? "light-intro" : "intro"}>Hi, My name is </h3>
                    <h1>Jake Moretz</h1>
                    <h3 className={props.darkMode ? "light-intro" : "intro"}>A frontend developer</h3>
                </section>
            </div>
        </>
    );
}
