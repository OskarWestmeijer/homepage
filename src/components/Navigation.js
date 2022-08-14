import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {

    return (
        <nav className="navbar navbar-expand-sm">
            <div className="container-fluid">
                <div className="navbar-collapse justify-content-md-center">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/experience">Experience</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  className="nav-link" to="/values">Values</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}