import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../common.scss";
import Logo from "../../../assets/ICT_logo.svg";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <section className="website">
            <header>
                <div className="container">
                    <p className="text-end"><i className="fa-solid fa-envelope"></i> <span>business@induscybertech.com</span></p>
                </div>
                <div className="header">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container">
                            <NavLink className="navbar-brand" to="/" onClick={closeMenu}>
                                <img src={Logo} alt="" className="logo" />
                            </NavLink>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded={menuOpen ? "true" : "false"}
                                aria-label="Toggle navigation"
                                onClick={toggleMenu}
                            >
                                <i className="fa-solid fa-bars text-light"></i>
                            </button>
                            <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center align-items-start">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" to="/" onClick={closeMenu}>Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/about" onClick={closeMenu}>About</NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Service
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><NavLink className="dropdown-item" to="IT-solutions" onClick={closeMenu}>IT Staff Augmentation</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="Project-Development" onClick={closeMenu}>Project Development</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="Cloud-Solutions" onClick={closeMenu}>Cloud Solutions</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="Cybersecurity" onClick={closeMenu}>Cybersecurity</NavLink></li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="Contact-us" onClick={closeMenu}>Contact</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="tel:+1234567890" onClick={closeMenu}>
                                            <button className="btn btn-outline call">Call Now <i className="fa-solid fa-phone ms-2"></i></button>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </section>
    );
};
