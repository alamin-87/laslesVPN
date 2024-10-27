import React from 'react'
import  oneman from '../../assets/oneman.png'
import  twoman from '../../assets/twoman.png'
import  threeman from '../../assets/threeman.png'
import { MdOutlineStar } from "react-icons/md";
import './Slider.css'

const Slider_show = () => {

  return (
    <>
    <div className="slider_section">
          <div className="review_row2">
          <div className="single_slid">
            <div className="single_slid_row1">
                <img src={oneman} alt="oneman" />
                <div className="name">
                    <h2>Viezh Robert</h2>
                    <p>Warsaw, Poland</p>
                </div>
                <div className="review_count">
                    <p>4,5</p>
                    <MdOutlineStar  className='star_icon'/>
                </div>
            </div>
            <div className="single_slid_row2">
                <p>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
            </div>
          </div>
          <div className="single_slid">
            <div className="single_slid_row1">
                <img src={oneman} alt="oneman" />
                <div className="name">
                    <h2>Viezh Robert</h2>
                    <p>Warsaw, Poland</p>
                </div>
                <div className="review_count">
                    <p>4,5</p>
                    <MdOutlineStar  className='star_icon'/>
                </div>
            </div>
            <div className="single_slid_row2">
                <p>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
            </div>
          </div>
          <div className="single_slid">
            <div className="single_slid_row1">
                <img src={oneman} alt="oneman" />
                <div className="name">
                    <h2>Viezh Robert</h2>
                    <p>Warsaw, Poland</p>
                </div>
                <div className="review_count">
                    <p>4,5</p>
                    <MdOutlineStar  className='star_icon'/>
                </div>
            </div>
            <div className="single_slid_row2">
                <p>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
            </div>
          </div>  
          <div className="single_slid">
            <div className="single_slid_row1">
                <img src={oneman} alt="oneman" />
                <div className="name">
                    <h2>Viezh Robert</h2>
                    <p>Warsaw, Poland</p>
                </div>
                <div className="review_count">
                    <p>4,5</p>
                    <MdOutlineStar  className='star_icon'/>
                </div>
            </div>
            <div className="single_slid_row2">
                <p>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
            </div>
          </div>
          </div>
    </div>
    </>
  )
}

export default Slider_show