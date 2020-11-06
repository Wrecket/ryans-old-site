import React from 'react';
import './Built.css';
import monkey from '../media/monkey.png';
import splat from '../media/splatdouble.png';
import splat2 from '../media/splat.png';
import logo from "../media/logo3.png";
import arlo from '../media/Arlo.jpeg';


const Built = () => {
    return ( 
        <div className="Built">
            <div className="built-wrap-text font">
                        <div className="splat-box2">
                            <img className="splat img-fluid" src={splat2} alt="splat"/>
                            <div className="container built-title-text">
                            <h2 className="builty-title-text text-border font">Let's get<br></br> <span className="font2">MUDDY.</span></h2>
                        </div>
                        </div>
                        
                        {/* <div className="mud-desc-wrap">
                            <p className="mud-desc-2 font">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci consequatur blanditiis dolore perferendis ex. Labore laboriosam cumque enim qui distinctio ipsa at reprehenderit harum placeat, quo amet asperiores veritatis blanditiis!</p>
                        </div> */}
            </div>
            <div class="container-fluid built-tier-1">
            <div class="row">
                <div class="col-sm-6">
                <div className="built-wrap d-flex">
                    <h2 className=" built-title-1 text-center font2">Bespoke</h2>
                    <h2 className=" built-title-2 text-center font2">Mud</h2>
                    <h2 className=" built-title-3 text-center font2">Kitchens</h2>
                <div className="monkey-box">
                        <img className="monkey img-fluid" src={monkey} alt="hanging monkey" />
                </div>
                <div className="splat-box">
                        <img className="splat img-fluid" src={splat} alt="splat"/>
                </div>  
                <div className="built-logo">
                        <img className="img-fluid" src={logo} alt="Logo"></img>
                </div>
                <div className="built-img-container container">
                        <img className="img-fluid" src={arlo} alt="Built kitchen"/>
                </div>
                <div className="built-desc-container text-center container">
                        <p className="Built-desc font2">Click for more info</p>
                </div>
                </div> 
                <div class="col-sm-6">
                <div className="built-left-side">
                </div>
                </div>
                </div>
            </div>
            </div>
        <div>         
        </div>
            </div>
            );
}
 
export default Built;



        