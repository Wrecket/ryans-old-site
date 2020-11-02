import React from 'react';
import './Mud.css'
import monkey from '../media/monkey.png'
import splat from '../media/splatdouble.png'

const Mud = () => {
    return ( 
        <div className="Mud">
            
                

            <div className="mud-wrap container d-flex">
            <h2 className=" mud-title-1 text-center font2">Bespoke</h2>
                <h2 className=" mud-title-2 text-center font2">Mud</h2>
                <h2 className=" mud-title-3 text-center font2">Kitchens</h2>
                <div className="monkey-box">
                    <img className="monkey img-fluid" src={monkey} alt="hanging monkey" />
                </div>
                <div className="splat-box">
                    <img className="splat img-fluid" src={splat} alt="splat"/>
                </div>
                <div className="mud-img-container container">
                    <img className="img-fluid" src="https://www.ryanswoodworks.co.uk/img/kitchen2.png" alt="mud kitchen"/>
                </div>
                <div className="mud-desc-container container">
                    <p className="mud-desc font2">Our range of handcrafted Mud Kitchens range from preset masterpieces, all the way to completely personalised builds, with more additional options and extras than you could count! Feel free to swap out stoves for ovens, doors for pans, personalisation via laser engraving, or even missmatch colours to your hearts content!</p>
                </div>
            </div>
        </div>
     );
}
 
export default Mud;