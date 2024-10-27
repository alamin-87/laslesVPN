import React from 'react'
import './Zone.css'
import zone_img from '../../assets/zone.png'
import  one from '../../assets/one.png'
import  two from '../../assets/two.png'
import  three from '../../assets/three.png'
import  four from '../../assets/four.png'
import  five from '../../assets/five.png'

const Zone = () => {
  return (
    <>
    <div className="zone_section">
        <div className="container">
           <div className="zone_row">
            <div className="zone_row1">
                <h2>Huge Global Network of Fast VPN</h2>
                <p>See LaslesVPN everywhere to make it easier for you when you move locations.</p>
            </div>
            <div className="zone_row2">
                <img src={zone_img} alt="zoneimg" />
            </div>
            <div className="zone_row3">
                <img src={one} alt="oneimg" />
                <img src={two} alt="twoimg" />
                <img src={three} alt="threeimg" />
                <img src={four} alt="fourimg" />
                <img src={five} alt="fiveimg" />
            </div>
           </div>
        </div>
    </div>
    </>
  )
}

export default Zone