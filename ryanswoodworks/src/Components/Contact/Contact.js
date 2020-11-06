import React from 'react';
import './Contact.css'

const Contact = () => {
    return ( 
        <div className="Contact">
            <div className="container contact-box text-center shadow">
            <button className="quote-toggler btn btn-dark" data-toggle="collapse" data-target="#contactContent" aria-controls="contactContent" aria-expanded="false" aria-label="Toggle navigation"><div className="contact-header text-center">
                    <h2 className="font">Contact Us</h2>
                </div></button>
                <div className="collapse contact-collapse" id="contactContent">
                <div className="contact text-center">
                    <div className="form container">
                        <form>
                            <div className="center d-flex">
                            <input type="text" id="name" name="name" placeholder="Full name..."></input>
                            <input type="email" id="email" name="email" placeholder="Email"></input>
                            </div>
                            <div className="center d-flex">
                            <input type="text" id="postcode" name="postcode" placeholder="Postcode..."></input>
                            <input type="number" id="number" name="number" placeholder="Contact Number..."></input>
                            </div>
                            <textarea id="other" name="other" rows="4" placeholder="Please include as much information as necessary..."/>
                        </form>
                        <button type="button" class="btn btn-warning">Send</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;