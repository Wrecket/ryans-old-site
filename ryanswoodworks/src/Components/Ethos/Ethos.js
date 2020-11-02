import React from 'react';
import Quote from '../Quote/Quote';
import './Ethos.css'

const Ethos = () => {
    return ( 
        <div className="Ethos">
            <h2 className="Ethos-title white font">WOODWORKING LIKE NO OTHER.</h2>
            <div className="Ethos-desc white">
                <p class="font">Here at Ryan's Woodworks we pride ourselves on the quality of our workmanship and woodwork, undertaking anything thrown our way with no job too big, or too small. </p>
                <p class="font">All of the raw materials for our products are sustainably sourced, recycled and given new life. Each and every creation is sanded to a smooth finish, then completed with a treatment of teak oil.</p> 
                <p class="font">Along with the below products, we also offer a custom works service that encompasses all aspects of woodwork, from fixing breaks to creating new custom furniture and bespoke fitted cupboards. Please use the contact page to request a free quotation.</p>                  
                <Quote />
            </div>
        </div>
     );
}
 
export default Ethos;