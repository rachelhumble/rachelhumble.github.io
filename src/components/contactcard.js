import React from "react";
import "../styles/ContactCard.css";
import Image from "../images/me.jpg";

function ContactCard() {
    return (
        <>
            
            <div className="card mb-3">
            <div className="card-radius">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={Image} className="card-img" alt="Rachel"></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title contact-card-title">Contact Me</h5>
                            <p className="card-text c-text"><img id="icon-mobile" src="https://img.icons8.com/carbon-copy/2x/iphone-x.png" alt="mobile"></img>(828) 551-2812 </p>
                            <p className="card-text c-text"><img id="icon" src="https://img.icons8.com/ios/2x/send-mass-email.png" alt="email"></img> rachelhumble@me.com </p>
                            <div className="btn-group" role="group" aria-label="First group">
                                <a href="https://github.com/rachelhumble" target="_blank" rel="noopener noreferrer" role="button" className="btn btn-outline-dark">Github</a>
                                <a href="https://www.linkedin.com/in/rachel-humble-08b599109/" target="_blank" rel="noopener noreferrer" role="button" className="btn btn-outline-dark">LinkedIn</a>
                                <a href="https://drive.google.com/file/d/17D5sTJ4nSFwX2coBrSii5U7ytrYOlCxi/view?usp=sharing" target="_blank" rel="noopener noreferrer" role="button" className="btn btn-outline-dark">Resumé</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <br></br>
        </>
    )
}

export default ContactCard