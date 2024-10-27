import React from 'react'
import './Footer.css'
import Logo from '../../assets/Logo.png'
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { PiInstagramLogoFill } from "react-icons/pi";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <div className="footer_section">
        <div className="container">
        <div className="footer_absolute">
            <div className="row_section">
                  <div className="row">
                    <div className="row_text">
                      <h2>Subscribe Now for Get Special Features!</h2>
                       <p>Let's subscribe with us and find the fun.</p>
                    </div>
                   <button className='button'>Subscribe Now</button>
                 </div>
          </div>
            </div>
            <div className="footer_row">
                <div className="row_col1">
                    <img src={Logo} alt="logo" />
                    <p> <span>LaslesVPN</span> is a private virtual network that has unique features and has high security.</p>
                   <div className="col1_all_icon">
                   <div className="col1_icon">
                      <RiFacebookCircleFill  className='icon'/>
                    </div>
                    <div className="col1_icon">
                      <AiFillTwitterCircle  className='icon'/>
                    </div>
                    <div className="col1_icon">
                      <PiInstagramLogoFill  className='icon'/>
                    </div>
                   </div>
                </div>
               <div className="row_text_col">
               <div className="row_col2">
                  <h2>Product</h2>
                  <ul>
                    <li><Link to="/">Download</Link></li>
                    <li><Link to="/">Pricing</Link></li>
                    <li><Link to="/">Locations</Link></li>
                    <li><Link to="/">Server</Link></li>
                    <li><Link to="/">Countries</Link></li>
                    <li><Link to="/">Blog</Link></li>
                  </ul>
                </div>
                <div className="row_col3">
                <h2>Engage</h2>
                  <ul>
                    <li><Link to="/">LaslesVPN ? </Link></li>
                    <li><Link to="/">FAQ</Link></li>
                    <li><Link to="/">Tutorials</Link></li>
                    <li><Link to="/">About Us</Link></li>
                    <li><Link to="/">Privacy Policy</Link></li>
                    <li><Link to="/">Terms of Service</Link></li>
                  </ul>
                </div>
                <div className="row_col3">
                <h2>Earn Money</h2>
                  <ul>
                    <li><Link to="/">Affiliate</Link></li>
                    <li><Link to="/">Become Partner</Link></li>
                  </ul>
                </div>
               </div>
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Footer