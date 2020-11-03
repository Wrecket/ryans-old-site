import React from 'react';
import './Main.css'
import Ethos from '../Ethos/Ethos';

const Main = () => {
    return ( 
        <div className="Main">
            <div className="main-title-box text-right">
                <h1 className="main-title font">RYAN'S WOODWORKS</h1>
            </div>
            <Ethos />            
        </div>
     );
}
 
export default Main;