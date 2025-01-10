import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
            <h1 className='logo'>TastyTrail</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit vero cum distinctio fuga. Illo eius eum quisquam animi provident esse quaerat, ipsum exercitationem architecto unde, enim quas accusamus fuga minima.</p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>

            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
               <h2>GET IN TOUCH</h2>
               <ul>
                <li>+91-678-345-9634</li>
                <li>contactus@TastyTrail.com</li>
               </ul>
            </div>

        </div>
        <hr />
        <p className ='footer-copyright'>Copyright 2024 TastyTrail.com - All Right Reserved</p>

    </div>
  )
}

export default Footer