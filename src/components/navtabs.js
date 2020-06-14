import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navtabs.css";

function Navtabs() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link to="/" className="navbar-brand">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/portfolio" className="navbar-brand">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contactme" className="navbar-brand">Contact Me</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navtabs