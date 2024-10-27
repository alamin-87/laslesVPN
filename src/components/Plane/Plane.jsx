import React from 'react'
import './Plane.css'
import free_img from '../../assets/Free.png'
import { MdOutlineDone } from "react-icons/md";


const Plane = () => {
  return (
    <>
     <div className="plane_section">
        <div className="container">
            <div className="plane_row">
                <div className="plane_row1">
                    <h2>Choose Your Plan</h2>
                    <p className='row1_p'>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
                </div>
                <div className="plane_row2">
                    <div className="single_card">
                        <img src={free_img} alt="img" />
                        <h2>Free Plan</h2>
                        <div className='icon'>
                              <div className="icon1">
                                <MdOutlineDone  className='icon_react'/>
                                <p>Unlimited Bandwitch</p>
                              </div>
                              <div className="icon1">
                                <MdOutlineDone  className='icon_react'/>
                                <p>Encrypted Connection</p>
                              </div>
                              <div className="icon1">
                                <MdOutlineDone  className='icon_react'/>
                                <p>No Traffic Logs</p>
                              </div>
                              <div className="icon1">
                                <MdOutlineDone  className='icon_react'/>
                                <p>Works on All Devices</p>
                              </div>
                        </div>
                        <h2 className='last_h2'>Free</h2>
                        <div className="button">
                          <button>Select</button>
                        </div>
                    </div>

                    <div className="single_card">
                        <img src={free_img} alt="img" />
                        <h2>Free Plan</h2>
                        <div className='icon'>
                              <div className="icon1">
                                <MdOutlineDone  className='icon_react'/>
                                <p>Unlimited Bandwitch</p>
                              </div>
                              <div className="icon1">
                                <MdOutlineDone  className='icon_react'/>
                                <p>Encrypted Connection</p>
                              </div>
                              <div className="icon1">
                                <MdOutlineDone  className='icon_react'/>
                                <p>No Traffic Logs</p>
                              </div>
                              <div className="icon1">
                                <MdOutlineDone  className='icon_react'/>
                                <p>Works on All Devices</p>
                              </div>
                        </div>
                        <h2 className='last_h2'>$9 / mo</h2>
                        <div className="button">
                          <button>Select</button>
                        </div>
                    </div>

                    <div className="single_card">
                        <img src={free_img} alt="img" />
                        <h2>Free Plan</h2>
                        <div className='icon'>
                              <div className="icon1">
                                <MdOutlineDone  className='icon_react'/>
                                <p>Unlimited Bandwitch</p>
                              </div>
                              <div className="icon1">
                                <MdOutlineDone  className='icon_react'/>
                                <p>Encrypted Connection</p>
                              </div>
                              <div className="icon1">
                                <MdOutlineDone  className='icon_react'/>
                                <p>No Traffic Logs</p>
                              </div>
                              <div className="icon1">
                                <MdOutlineDone  className='icon_react'/>
                                <p>Works on All Devices</p>
                              </div>
                        </div>
                        <h2 className='last_h2'>$12 / mo</h2>
                        <div className="button">
                          <button>Select</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Plane