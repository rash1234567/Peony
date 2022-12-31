import React from 'react';
import heroStyles from './Heroe.module.css'

function Heroe() {
    return (
      <div className={`${heroStyles.container} 4xl:mt-0 `} >
          <div className={heroStyles.overlay}>
            <div className='px-4 h-[80%] lg:h-[66%] ml-[6%] flex flex-col justify-around'>
              <h1 className='font-openSans text-[18px] md:text-[36px] 3xl:text-[44px] 4xl:text-[58px] 3xl:leading-[55px] 4xl:leading-[70px] font-[700] md:leading-[49px] text-white'>Have a Firmer grip and access <br className='hidden md:flex' /> Control on all documents <br className='hidden md:flex' />irrespective... </h1>
              <p className='font-openSans font-[600] text-[12px] md:text-[20px] 3xl:text-[28px] 4xl:text-[35px] 3xl:leading-[40px] 4xl:leading-[50px] md:leading-[27px] text-white'>Automate all work and approval flow <br /> with Electronic Document Management <br />System </p>
              <div className='w-[80%] md:w-[70%] flex justify-between'>
                <button className='bg-[#04E761] hover:bg-[#1FBE54] text-white w-[100px] md:w-[180px] h-[30px] 3xl:w-[45%] 3xl:h-[70px] md:h-[50px] rounded-md text-[12px] md:text-[16px] 3xl:text-[28px] 4xl:text-[32px] font-[700] font-openSans'>Get Started</button>
                <button className='text-white text-[12px]  md:text-[16px] 3xl:text-[28px] 4xl:text-[32px] font-[700] font-openSans '><i class="fa-solid fa-play mr-1 md:mr-3 "></i> Watch Video</button>
              </div>
            </div>
          </div>
      </div>
    )
}
export default Heroe;
