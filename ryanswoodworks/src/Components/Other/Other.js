import React from 'react';
import './Other.css';
import logo from "../media/logo3.png";
import cupboard from '../media/1.jpeg';
import crate from '../media/crate.jpeg';
import laser from '../media/laser.jpeg';


const Other = () => {
    return ( 
        <div className="Other">
            <div class="container-fluid other-tier-1">
                <div class="row">
                    <div class="col-sm-6">
                        <div className="other-left-side">
                            <div className="other-wrap-text font">
                                <h2 className="other-title-text text-border font">MAKE IT PERSONAL.</h2>
                                    {/* <div className="mud-desc-wrap">
                                        <p className="mud-desc-2 font">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci consequatur blanditiis dolore perferendis ex. Labore laboriosam cumque enim qui distinctio ipsa at reprehenderit harum placeat, quo amet asperiores veritatis blanditiis!</p>
                                    </div> */}
                            </div>  
                        </div>
                    </div>
                    <div className="col-sm-6">
                    <div className="other-wrap container">
                        <h2 className=" other-title text-center font">OTHER SERVICES</h2>                        
                        <div className="other-logo">
                            <img className="img-fluid" src={logo} alt="Logo"></img>
                        </div>
                        <div className="container d-flex">
                        <div classname="other-image-wrapper">
                            <div className="other-img-container container">
                                <img className="img-fluid" src={crate} alt="Built kitchen"/>
                            </div>
                        </div>
                        <div classname="other-image-wrapper">
                            <div className="other-img-container desktop container">
                                <img className="img-fluid" src={cupboard} alt="Built kitchen"/>
                            </div>
                        </div>
                        </div>
                            <div className="other-img-container desktop container">
                                <img className="img-fluid" src={laser} alt="Built kitchen"/>
                            </div>
                        <div className="other-desc-container text-center container">
                            <p className="other-desc font2">Click for more info</p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
            );
}
 
export default Other;



        