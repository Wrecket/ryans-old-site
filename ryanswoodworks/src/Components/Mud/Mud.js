import React from 'react';
import './Mud.css';
import monkey from '../media/monkey.png';
import splat from '../media/splatdouble.png';
import logo from "../media/logo3.png";
import arlo from '../media/Arlo.jpeg';
import cupboard from'../media/3.jpeg';


const Mud = () => {
    return ( 
        <div className="Mud">
            <div classname="muddy">
            <div class="container-fluid mud-tier-1">
            <div class="row">
                <div class="col-sm-6">
                <div className="mud-left-side">
                    <div className="mud-wrap-text font">
                        <h2 className="mud-title-text text-border font">CREATE A SPACE<br></br> YOU'LL LOVE.</h2>
                        {/* <div className="mud-desc-wrap">
                            <p className="mud-desc-2 font">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci consequatur blanditiis dolore perferendis ex. Labore laboriosam cumque enim qui distinctio ipsa at reprehenderit harum placeat, quo amet asperiores veritatis blanditiis!</p>
                        </div> */}
                    </div>  
                </div>
                </div>
                <div class="col-sm-6">
                <div className="mud-wrap d-flex">
                        <h2 className=" mud-title text-center font">BUILT IN SERVICES</h2>
                        <div className="mud-logo">
                            <img className="img-fluid" src={logo} alt="Logo"></img>
                        </div>
                        <div className="mud-img-container container">
                            <img className="img-fluid" src={cupboard} alt="mud kitchen"/>
                        </div>
                        <div className="mud-desc-container text-center container">
                            <p className="mud-desc font2">Click for more info</p>
                        </div>
                    </div> 
                </div>
            </div>
            </div>
        <div>
        </div>
        
               
                    
        </div>
            </div>
            );
}
 
export default Mud;



        