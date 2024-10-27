import React, { useState } from 'react'
import './ResNavbar.css'
import { BsWindowSidebar } from "react-icons/bs";
import { Link } from 'react-router-dom';


const ResNavbar = () => {
    const [show , setshow] =useState(false)
  return (
    <>
   <section className='rexnav'>
        <BsWindowSidebar onClick={()=>setshow(!show)}  className=' text-3xl'/>
        {
            show&&
            <div className="res_nav_content">
                    <div className="res_content">
                        <ul>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/">Features</Link></li>
                            <li><Link to="/">Pricing</Link></li>
                            <li><Link to="/">Testimonials</Link></li>
                            <li><Link to="/">Help</Link></li>
                        </ul>
                    </div>
                    <div className="res_button">
                        <button>Sign In</button>
                        <button>Sign Up</button>
                    </div>
        </div>
        }

   </section>
    
    </>
  )
}

export default ResNavbar