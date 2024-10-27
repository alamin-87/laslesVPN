import React from 'react'
import './About.css'
import about_img from '../../assets/about_img.png'
import { IoIosContact } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdStorage } from "react-icons/md";
import CommonCount from '../common/CommonCount';
// import CountUp from 'react-countup';




const About = () => {
  return (
    <>
      <section className='about'>
      <div className="container">
          <div className="about_row">
             <div className="about_row1">
                 <div className="row1_text">
                    <h2> <span>Want anything to be easy with</span> LaslesVPN.</h2>
                    <p>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                    <button>Get Started</button>
                 </div>
                 <div className="row1_img">
                    <img src={about_img} alt="img" />
                 </div>
             </div>
             <div className="about_row2">
               <div className="single_count">
                   <div className="icon">
                     <IoIosContact />
                   </div>
                   <div className="count">
                     <div className="count_start">
                     <CommonCount CommonCountText={30}/>
                     {/* <CountUp end={30} duration={5}/> */}
                     <p className='pluse'>+</p>
                     </div>
                     <p>Users</p>
                   </div>
                   <div className="span"></div>
               </div>

               <div className="single_count">
                   <div className="icon">
                   <FaLocationDot />
                   </div>
                   <div className="count">
                     <div className="count_start">
                      <CommonCount CommonCountText={50}/>
                     {/* <CountUp end={50} duration={5}/> */}
                     <p className='pluse'>+</p>
                     </div>
                     <p>Locations</p>
                   </div>
                   <div className="span"></div>
               </div>

               <div className="single_count">
                   <div className="icon">
                   <MdStorage />
                   </div>
                   <div className="count">
                     <div className="count_start">
                     <CommonCount CommonCountText={90}/>
                     {/* <CountUp end={90} duration={5}/> */}
                     <p className='pluse'>+</p>
                     </div>
                     <p>Servers</p>
                   </div>
               </div>
             </div>
          </div>
      </div>
      </section>
    </>
  )
}

export default About