/* eslint-disable react/prop-types */
import './Contact.css';

export default function Contact(props) {
    const date = new Date();
    let year = date.getFullYear();

    return (
        <footer className={props.darkMode ? 'light-footer' : ''}>
            {/* <section className="year">
                <p>© {year} - Jake Moretz</p>
            </section> */}
            <section className="contact-links">
                <a href="mailto:jmoretz9090@gmail.com">
                    <img
                        src="./mail.png"
                        alt="mail-logo"
                        className={props.darkMode ? 'light-mail' : 'mail'}
                    />
                </a>
                <a href="https://www.linkedin.com/in/jake-moretz-450668255/">
                    <img
                        src="./linkedin.png"
                        alt="linkedin-logo"
                        className={
                            props.darkMode ? 'light-linkedin' : 'linkedin'
                        }
                    />
                </a>
                <a href="https://github.com/JakeMoretz">
                    <img
                        src="./github.png"
                        alt="github.logo"
                        className={props.darkMode ? 'light-github' : 'github'}
                    />
                </a>
            </section>
            <section className="year">
                <p>© {year} - Jake Moretz</p>
            </section>
        </footer>
    );
}
