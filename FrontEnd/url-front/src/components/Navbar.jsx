import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav className="navbar">
            <h1 className="logo ">URL Shortener</h1>
            <div className="nav-links">
                <Link to="/" className="nav-item">Home</Link> |
                 <Link to="/history" className="nav-item">Histroy</Link>
            </div>
        </nav>
        
    );
}

export default Navbar;