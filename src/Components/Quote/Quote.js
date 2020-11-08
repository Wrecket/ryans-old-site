import React from 'react';
import './Quote.css'

const Quote = () => {
    return ( 
        <div className="Quote">
            <div className="container quote-box text-center shadow">
            <button className="quote-toggler btn btn-dark" data-toggle="collapse" data-target="#quoteContent" aria-controls="quoteContent" aria-expanded="false" aria-label="Toggle navigation"><div className="quote-header text-center">
                    <h2 className="font">Get a Free Quotation</h2>
                </div></button>
                <div className="collapse quote-collapse" id="quoteContent">
                <div className="quote text-center">
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
 
export default Quote;