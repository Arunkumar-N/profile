import React from "react";
import "./ContactLine.css";

const ContactLine = () => {
    return (
        <div className="flex-display-contact">
            <div className="contact-item">
                <a href="mailto: arunkumar.frnd.n@gmail.com">
                    <i className="fa fa-envelope highlight"></i>
                    <span>arunkumar.frnd.n@gmail.com</span>
                </a>

            </div>
            <div className="contact-item">
                <a href="tel:+919743828451">
                    <i className="fa fa-phone highlight"></i>
                    <span> +91 9743828451</span>
                </a>

            </div>
            <div className="contact-item">
                <a target="_blank" href="https://www.google.com/maps/d/viewer?f=q&hl=en&geocode&ie=UTF8&msa=0&ll=12.97779499999999%2C77.60055500000001&spn=0.234187%2C0.291824&z=11&source=embed&mid=1k35Ia3iDr0SyJaMdv2N6c2_AUvw">
                    <i className="fa fa-map-marker highlight"></i>
                    <span>Bangalore, India</span>
                </a>
            </div>
            <div className="contact-item">
                <a target="_blank" href="https://www.linkedin.com/in/arunkumar-n-348194107">
                    <i className="fa fa-linkedin highlight"></i>
                    <span>https://www.linkedin.com/in/arunkumar-n-348194107</span>
                </a>

            </div>
        </div>
    );
}
export default ContactLine;