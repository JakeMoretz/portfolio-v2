/* eslint-disable react/prop-types */
import './Nav.css';
import { Link } from 'react-scroll';
import React from 'react';

export default function Nav(props) {
    const [showMenu, setMenu] = React.useState(false);

    function display() {
        setMenu((value) => !value);
    }

    function hideMenu() {
        setMenu(false);
    }

    return (
        <nav className={props.darkMode ? 'light' : ''}>
            <div className="logo">
                <h2>JM</h2>
            </div>

            {/* <div className="switch-wrapper">
                <label className="switch">
                    <span
                        className={
                            props.darkMode ? 'light-light-mode' : 'light-mode'
                        }
                    >
                        Light
                    </span>
                    <input onClick={props.toggleDarkMode} type="checkbox" />
                    <span className="slider round"></span>
                    <span
                        className={
                            props.darkMode ? 'light-dark-mode' : 'dark-mode'
                        }
                    >
                        Dark
                    </span>
                </label>
            </div> */}

            <button onClick={display} className="toggle-links">
                <img
                    src="./burger.png"
                    alt=""
                    className={props.darkMode ? 'light' : 'burger-img'}
                />
            </button>

            <div
                className={`links ${showMenu ? 'toggle' : ''} && ${
                    props.darkMode ? 'light-links' : 'links'
                }`}
            >
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className={props.darkMode ? 'light-mode-link' : 'Link'}
                    onClick={hideMenu}
                >
                    Home
                </Link>
                <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className={props.darkMode ? 'light-mode-link' : 'Link'}
                    onClick={hideMenu}
                >
                    About
                </Link>
                <Link
                    to="project"
                    smooth={true}
                    duration={500}
                    className={props.darkMode ? 'light-mode-link' : 'Link'}
                    onClick={hideMenu}
                >
                    Projects
                </Link>
                <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className={props.darkMode ? 'light-mode-link' : 'Link'}
                    onClick={hideMenu}
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
}
