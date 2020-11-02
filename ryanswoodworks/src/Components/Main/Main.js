import React from 'react';
import Quote from '../Quote/Quote';
import './Main.css'
import Ethos from '../Ethos/Ethos';
import Mud from '../Mud/Mud';

const Main = () => {
    return ( 
        <div className="Main">
            <div className="main-title-box text-right">
                <h1 className="main-title font">RYAN'S WOODWORKS</h1>
            </div>
            <Ethos />
            <div className="main-mid container-fluid d-flex">
                <Mud />
            </div>  
            <div className="padder-xxl"></div>
        </div>
     );
}
 
export default Main;