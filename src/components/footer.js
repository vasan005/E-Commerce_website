import React from 'react'
import "./footer.css"
import corllel from "../components/images/icons/14.svg"
import insta from "../components/images/icons/15.svg"
import twitter from "../components/images/icons/16.svg"
import linkdin from "../components/images/icons/17.svg"
import youtube from "../components/images/icons/18.svg"
import speaker from "../components/images/icons/19.svg"


const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-main'>
                <div className='footer-section1'>
                    <div className='footer-heading'>
                        <img src={corllel} />
                        <h1>Corllel</h1></div>
                    <div className='footer-icons'>
                        <img src={insta} />
                        <img src={twitter} />
                        <img src={linkdin} />
                        <img src={youtube} />
                    </div>
                </div>
                <div className="footer-section2">
                    <h3>Store</h3>
                    <p>Home</p>
                    <p>Category</p>
                    <p>Buy 3D Models</p>
                </div>

                <div className='footer-section3'>
                    <h3>Helps</h3>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>

                <div className='footer-section4'>
                    <h3>Contact Us:</h3>
                    <p>8A, Tharabarathy Street, Jaya Nagar,</p>
                    <p>Puzhuthivakkam,</p>
                    <p>Chennai - 600 091,</p>

                </div>

                <div className='footer-section5'>
                    <img src={speaker}/>
                    <p>Talk to us</p>
                    <h3>info@digamend.com</h3>

                </div>
            
            </div>
            <hr/>
           <div className='copyright'>
            <p>Copyright © 2024 corllel. All Rights Reserved.</p>
           </div>


        </div>
    )
}

export default Footer