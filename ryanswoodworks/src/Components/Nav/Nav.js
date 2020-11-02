import React from 'react';
import './Nav.css'
import logo from "../media/logo3.png"
import Quote from '../Quote/Quote';

const Nav = () => {
    return ( 
        <div className="Nav">
            <nav className="navbar navbar-expand-lg navbar-dark bg-black static-top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="nav-logo">
                <img className="img-fluid" src={logo} alt="Logo"></img>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav font">
                <li className="nav-item active">
                    <a className="nav-link" href="Nav">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="Nav">Gallery</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="Nav">Reviews</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="Nav">Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="Nav">Delivery</a>
                </li>
                </ul>
            </div>
            </nav>
            <div className="nav-header-box d-flex">
                <Quote />
            </div>
        </div>
     );
}
 
export default Nav;