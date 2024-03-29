/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import './Info.css';

export default function Info(props) {
    return (
        <>
            <section className={props.darkMode ? 'light' : 'about-info'}>
                <p>
                    Allow me to introduce myself in a way that highlights my
                    uniqueness. My name is Jake Moretz, a passionate
                    developer hailing from Atlanta, known for my self-taught
                    journey in the world of web development. Since the fall of
                    2022, I have been deeply engaged in the world of front-end
                    technologies, continually refining my skills and gaining
                    more knowledge everyday.
                </p>
                <br />
                <p>
                    Beyond coding, my diverse background includes leading the
                    way in the HVAC industry, where I've developed exceptional
                    communication and teamwork abilities. This experience has
                    been invaluable in shaping my work ethic, as I've always
                    been driven by self-motivation to achieve my goals.
                </p>
                <br />
                <p>
                    What sets me apart is my innate ability to embrace new
                    challenges fearlessly. My self-taught nature empowers me to
                    rapidly adapt to emerging technologies, making me a perfect
                    fit for any role that requires a dynamic and dedicated
                    individual.
                </p>
            </section>
        </>
    );
}
