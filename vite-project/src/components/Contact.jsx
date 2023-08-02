import './Contact.css'

export default function Contact() {
    const date = new Date()
    let year = date.getFullYear()

    return(
        <footer>
            <section className='year'>
                <p>© {year} - Jake Moretz</p>
            </section>
            <section className='contact-links'>
                <a href="mailto:jmoretz9090@gmail.com"><img src="./mail.png" alt="mail-logo" className="mail" /></a>
                <a href="https://www.linkedin.com/in/jake-moretz-450668255/"><img src="./linkedin.png" alt="linkedin-logo" className="linkedin" /></a>
                <a href="https://github.com/JakeMoretz"><img src="./github.png" alt="github.logo" className="github" /></a>
            </section>
        </footer>
    )
}