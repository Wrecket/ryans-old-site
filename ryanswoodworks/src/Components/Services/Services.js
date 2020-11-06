import React from 'react';
import './Services.css';
import cupboard from'../media/3.jpeg';
import laser from '../media/laser.jpeg';
import crate from '../media/crate.jpeg';
import personal from '../media/personalisation-plaques.jpeg'
import logo from "../media/logo3.png";
import Contact from '../Contact/Contact';

const Services = () => {
    return ( 
        <div className="Services">
            <div className="blackbar d-flex"><Contact/></div>
            <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6 mud-tier-2">
                <h2 className="personal-custom-title text-border font">OUR SERVICES</h2>
                <div className="d-flex">
                    <div>
                    <div className="crate">
                        <div className="personal-img-wrap d-flex">
                            <div className="crate-img-container container">
                                <img className="img-fluid" src={crate} alt="custom made crate"/>
                            </div>
                        </div>
                        <div className="personal-title-wrap">
                            <h2 className="personal-title text-border font">CUSTOM WORKS</h2>
                        </div>
                        <div className="personal-desc-wrap">
                        <a href="nothing"><p className="personal-desc font">Click to find out more</p></a>
                        </div>
                    </div>
                    <div className="barwrap">
                        <div className="logo">
                            <img className="img-fluid" src={logo} alt="Logo"></img>
                        </div>
                    </div>
                </div>
                <div className="mud-left-mover d-flex">
                    <div>
                        <div className="mud-custom-wrap">
                            <div className="mud-img-wrapper built-in">
                                <img className="mud-img-left img-fluid" src={cupboard} alt="Built in works"></img>
                            </div>
                            <h2 className="mud-custom-title font text-border">BUILT IN SERVICES</h2>
                            <a href="nothing"><p className="mud-custom-desc font">Click for more info</p></a>
                        </div>
                    </div>
                </div>
                
                </div>
                <div className="personal">
                    <div className="personal-img-wrap d-flex">
                        <div className="personal-img-container container">
                            <img className="img-fluid" src={laser} alt="mud kitchen"/>
                        </div>
                        <div className="personal-img-container container">
                            <img className="img-fluid" src={personal} alt="mud kitchen"/>
                        </div>
                    </div>
                    <div className="personal-title-wrap text-right">
                        <h2 className="personal-title text-border font">PERSONALISATION</h2>
                    </div>
                    <div className="personal-desc-wrap text-right">
                    <a href="nothing"><p className="personal-desc font">Click to find out more</p></a>
                    </div>
                </div>
                </div>
                <div class="col-sm-5">
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default Services;