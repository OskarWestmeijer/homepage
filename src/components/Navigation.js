import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {

    return (
        <nav className="navbar navbar-expand-md fixed-top">
            <div className="container">
                <a href="https://oskar-westmeijer.com" className="navbar-brand">Oskar Westmeijer</a>


                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navmenu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/experience">Experience</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/values">Values</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/projects">Projects</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}