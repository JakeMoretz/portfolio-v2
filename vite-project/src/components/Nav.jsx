import './Nav.css';
import { Link } from 'react-scroll';
import React from 'react';

export default function Nav() {
    return (
        <nav className="nav">
            <div className="logo">
                <h2>JM</h2>
            </div>

            <button className="toggle-links">
                <img src="./burger.png" alt="" className="burger-img" />
            </button>

            <div className="links" data-visible="false">
                <Link to="home" smooth={true} duration={500} className="Link">
                    Home
                </Link>
                <Link to="about" smooth={true} duration={500} className="Link">
                    About
                </Link>
                <Link
                    to="project"
                    smooth={true}
                    duration={500}
                    className="Link"
                >
                    Projects
                </Link>
                <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="Link"
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
}
