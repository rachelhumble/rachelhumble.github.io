import React from "react";
import "../styles/Navtabs.css";

function Navtabs() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand active" href="/">Home</a>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="navbar-brand" href="/portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="navbar-brand" href="/contactme">Contact Me</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navtabs