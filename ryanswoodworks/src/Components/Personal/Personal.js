import React from 'react';
import './Personal.css';
import plaque from '../media/personalisation-plaques.jpeg';
import laser2  from '../media/laser.jpeg';
import plaque2 from '../media/personalisation-plaques2.jpeg';
import crate from '../media/crate.jpeg';


const Personal = () => {
    return ( 
        <div className="Personal">
            <div className="personal-wrap container">
                <div className="personal-header-box">
                    <h2 className="personal-header font">MAKE IT PERSONAL</h2>
                </div>
                <div className="personal-desc-box d-flex container">
                    <div className="personal-left">
                        <p className="personal-desc font">With the latest laser engraving technology at our disposal, the potential for customisation is limitless. From named plaques to decorated crates, if you can think of it, we can provide it. <br/><br/> But why stop there? Every item on Ryan's Woodworks is fully customisable, anything from cutout-shapes, to paint, even to size, shape and beyond.<br/><br/> Beyond this level of customisation, we also offer custom works services with the same guidelines as the above... your imagination is the limit.</p>
                        <div className="personal-img-box-2">
                            <img className="personal-img img-fluid" src={crate} alt="laser engraving"></img>
                        </div>
                    </div>
                    <div className="personal-photos">
                        <div className="personal-img-box">
                            <img className="personal-img img-fluid" src={plaque} alt="laser engraving"></img>
                        </div>
                        <div className="personal-img-box">
                            <img className="personal-img img-fluid" src={laser2} alt="laser engraving"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Personal
