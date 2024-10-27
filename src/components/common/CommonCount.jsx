import React from 'react'
import CountUp from 'react-countup';


const CommonCount = ({CommonCountText}) => {
  return (
    <>
    {/* <CountUp end={CommonCountText} /> */}
    <CountUp end={CommonCountText} duration={10} className=' text-[20px] md:text-[25px] lg:text-[30px] font-[500] font-rubik text-black'/>
    </>
  )
}

export default CommonCount