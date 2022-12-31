import React from 'react'

function FeaturesCard({icon,header,text}) {
  return (
    <div className='w-[60%] md:w-[22.5vw] 3xl:w-[30vw] xl:pr-[5%] mt-[3%] mb-[3%]'>
        <img src={icon} alt="" />
        <h2 className='font-openSans text-[16px] md:text-[16px] 3xl:text-[24px] 4xl:text-[28px] 3xl:leading-[26px] 4xl:leading-[30px] font-[700] leading-[22px] mt-[3%]'>{header}</h2>
        <p className='font-openSans text-[15px] md:text-[15px] 3xl:text-[23px] 4xl:text-[27px] 3xl:leading-[30px] 4xl:leading-[35px] 5xl:leading-[40px] font-[300] leading-[20px] mt-[3%]'>{text}</p>
    </div>
  )
}
export default FeaturesCard;
