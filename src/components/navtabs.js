import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navtabs.css";

function Navtabs() {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand active" href="/">Home</a>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link to="/portfolio" 
                            className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link" && "navbar-brand"}>
                                Portfolio 
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contactme" 
                            className={location.pathname === "/contactme" ? "nav-link active" : "nav-link" && "navbar-brand"}>
                                Contact Me 
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navtabs