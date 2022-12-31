import React from 'react';
import HeroStyle from './AboutHero.module.css';
import img from '../../assets/hand-using-computer.png'

function AboutHero() {
  return (
    <div className={`${HeroStyle.aboutContainer} lg:h-[60vh]`}>
    <div className={`${HeroStyle.overlay} lg:h-full`}>
      <div className='flex flex-col justify-around mx-auto xl:mx-0 lg:w-[60%] md:w-4/5 xl:mt-[5%] xl:w-[30%] font-Opensans text-center xl:text-start'>
          <h1 className='text-[20px] leading-[20px] md:leading-[28px] md:text-[24px] text-white font-extrabold xl:leading-[32.68px] mt-[15%] md:mt-[5%] lg:mt-[10%] 3xl:text-[40px]  4xl:text-[48px]  '>About VatDoc</h1>
          <p className='text-[20px] leading-[30px] md:text-[30px] md:leading-[45px] lg:text-[36px] lg:leading-[55px] mt-[5%] md:mt-[2%] xl:mt-[10%] font-bold text-[#ffffff] px-2 2xl:text-[48px] 2xl:leading-[75px] 4xl:text-[56px] 4xl:leading-[85px]  5xl:leading-[95px]'><span className='text-[#1FBE54]'>VATDOC</span> delivers a sensible and easy to work solution for teams and organizations… </p>
      </div>
      <div className='xl:w-[45%] w-[300px] h-[250px] mx-auto xl:mx-0 lg:mt-[10%] xl:mt-0 md:w-4/5 lg:w-[60%] md:h-[500px] xl:h-[75%] relative rounded-[10px]'>
        <img src={img} className='w-full h-full absolute -bottom-[15%] xl:-bottom-[30%] rounded-[10px]' />
      </div>   
    </div>
    </div>
  )
}
export default AboutHero;