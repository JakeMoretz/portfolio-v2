import './Nav.css';
import { Link } from 'react-scroll';
import React from 'react';

export default function Nav() {
    const [showMenu, setMenu] = React.useState(false);

    function display() {
        setMenu((value) => !value);
    }

    function hideMenu() {
        setMenu(false);
    }

    return (
        <nav className="nav">
            <div className="logo">
                <h2>JM</h2>
            </div>

            <button onClick={display} className="toggle-links">
                <img src="./burger.png" alt="" className="burger-img" />
            </button>

            <div className={`links ${showMenu ? 'toggle' : ''}`}>
                <Link to="home" smooth={true} duration={500} className="Link" onClick={hideMenu}>
                    Home
                </Link>
                <Link to="about" smooth={true} duration={500} className="Link" onClick={hideMenu}>
                    About
                </Link>
                <Link
                    to="project"
                    smooth={true}
                    duration={500}
                    className="Link"
                    onClick={hideMenu}
                >
                    Projects
                </Link>
                <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="Link"
                    onClick={hideMenu}
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
}
