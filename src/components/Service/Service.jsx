import React from 'react'
import './Service.css'
import service_img from '../../assets/service.png'
import { MdOutlineDone } from "react-icons/md";


const Service = () => {
  return (
    <>
    <div className="service_section">
       <div className="container">
        <div className="service_row">
            <div className="service_img">
                <img src={service_img} alt="serviceimg" />
            </div>
            <div className="service_text">
                <h2>We Provide Many Features You Can Use</h2>
                <p className='text_p'>You can explore the features that we provide with fun and have their own functions each feature.</p>
                <div className='point'>
                   <div className="done_icon">
                      <MdOutlineDone />
                   </div>
                   <p className='point_p'> Powerfull online protection.</p>
                </div>
                <div className='point'>
                   <div className="done_icon">
                      <MdOutlineDone />
                   </div>
                   <p className='point_p'> Powerfull online protection.</p>
                </div>
                <div className='point'>
                   <div className="done_icon">
                      <MdOutlineDone />
                   </div>
                   <p className='point_p'> Powerfull online protection.</p>
                </div>
                <div className='point'>
                   <div className="done_icon">
                      <MdOutlineDone />
                   </div>
                   <p className='point_p'> Powerfull online protection.</p>
                </div>
            </div>
        </div>
       </div>
    </div>
    </>
  )
}

export default Service