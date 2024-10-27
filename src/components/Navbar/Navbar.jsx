import React from 'react'
import './Navbar.css'
import Logo from '../../assets/Logo.png'
// import { Link ,animateScrool as scrool  } from 'react-scroll'
import ResNavbar from './ResNavbar'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import { Link , animateScrool as animateScrool } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className="container">
            <div className="nav_row">
                <div className="nav_logo">
                    <Link to="/"><img src={Logo} alt="logo" /></Link>
                </div>
                 <div className="contant">
                 <div className="nav_content">
                    <div className="content">
                        <ul>
                            <li><Link to="about">About</Link></li>
                            <li><Link to="service_section">Features</Link></li>
                            <li><Link to="/">Pricing</Link></li>
                            <li><Link to="/">Testimonials</Link></li>
                            <li><Link to="/">Help</Link></li>
                        </ul>
                    </div>
                    <div className="button">
                        <button>Sign In</button>
                        <button>Sign Up</button>
                    </div>
                 </div>
                 </div>
                 <ResNavbar/>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar