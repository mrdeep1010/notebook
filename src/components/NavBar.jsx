import React from 'react'
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
    const location = useLocation();
    debugger;
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-sm fixed-top navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">NoteBook</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/home" ? "active" : ""}`} aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/About" ? "active" : ""}`} to="/About">About</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="d-felx">
                        <Link className="btn btn-primary mx-1" to="/">
                            Login
                        </Link>
                        <Link className="btn btn-primary mx-1" to="/signup">
                            SignUp
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
