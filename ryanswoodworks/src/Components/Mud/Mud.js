import React from 'react';
import './Mud.css';
import monkey from '../media/monkey.png';
import splat from '../media/splatdouble.png';
import splat2 from '../media/splat.png';
import logo from "../media/logo3.png";
import arlo from '../media/Arlo.jpeg';
import cupboard from'../media/3.jpeg';
import laser from '../media/laser.jpeg';
import personal from '../media/personalisation-plaques.jpeg'

const Mud = () => {
    return ( 
        <div className="Mud">
             <div className="mud-left-side">
                <div className="mud-wrap-text font">
                    <h2 className="mud-title-text font">CREATE A SPACE YOU'LL LOVE.</h2>
                    <div className="mud-desc-wrap">
                    <p className="mud-desc-2 font">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci consequatur blanditiis dolore perferendis ex. Labore laboriosam cumque enim qui distinctio ipsa at reprehenderit harum placeat, quo amet asperiores veritatis blanditiis!</p>
                    </div>
                    <div className="mud-custom-wrap">
                        <div className="mud-img-wrapper">
                            <img className="mud-img-left img-fluid" src={cupboard} alt="Built in works"></img>
                        </div>
                        <h2 className="mud-custom-title">BUILT IN SERVICES</h2>
                        <a href="nothing"><p className="mud-custom-desc">Click for more info</p></a>
                    </div>
                    <div className="mud-custom-wrap">
                        <div className="mud-img-wrapper">
                            <img className="mud-img-left img-fluid" src="https://images.pexels.com/photos/207153/pexels-photo-207153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Built in works"></img>
                        </div>
                        <h2 className="mud-custom-title">OUTDOOR STRUCTURES</h2>
                        <a href="nothing"><p className="mud-custom-desc">Click for more info</p></a>
                    </div>
                </div>  
                </div>
                <div className="mud-right-side">
                    <div className="mud-wrap d-flex">
                        <h2 className=" mud-title-1 text-center font2">Bespoke</h2>
                        <h2 className=" mud-title-2 text-center font2">Mud</h2>
                        <h2 className=" mud-title-3 text-center font2">Kitchens</h2>
                        <div className="monkey-box">
                            <img className="monkey img-fluid" src={monkey} alt="hanging monkey" />
                        </div>
                        <div className="splat-box">
                            <img className="splat img-fluid" src={splat} alt="splat"/>
                        </div>
                        
                        <div className="mud-logo">
                            <img className="img-fluid" src={logo} alt="Logo"></img>
                        </div>
                        <div className="mud-img-container container">
                            <img className="img-fluid" src={arlo} alt="mud kitchen"/>
                        </div>
                        <div className="mud-desc-container text-center container">
                            <p className="mud-desc font2">Click for more info</p>
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
                        <div className="personal-title-wrap">
                            <h2 className="personal-title font">PERSONALIASATION</h2>
                        </div>
                        <div className="personal-desc-wrap">
                        <a href="nothing"><p className="personal-desc font">Click to find out more</p></a>
                        </div>
                    </div>
                </div>
    </div>
     );
}
 
export default Mud;