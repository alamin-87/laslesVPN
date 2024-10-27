import React from 'react'
import About from '../../components/About/About'
import Service from '../service/Service'
import Plane from '../Plane/Plane'
import Zone from '../Zone/Zone'
import Review from '../Review/Review'
import Slider from 'react-slick'
import Slider_show from '../Slider/Slider_show'
import Footer from '../Footer/Footer'
const Home = () => {
  return (
    <>
    <About/>
    <Service/>
    <Plane/>
    <Zone/>
    <Review/>
    <Slider_show/>
    <Footer/>
    </>
  )
}

export default Home