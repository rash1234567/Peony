import React from 'react';
import beads from '../assets/IMG-20230115-WA0033.jpg'

function BlogCards() {
  return (
    <div className='w-[100vw] md:w-[45%] lg:w-[30%] min-h-[400px] mt-[2vh] '>
        <div className='w-full h-[60%]' style={{ backgroundImage: `url(${beads})`,backgroundPosition:'center',backgroundSize:'cover'}}></div>
        <p className='text-[#666] text-[16px] font-[400] mt-[30px]'> Date: January 16, 2022</p>
        <p className='font-[600] text-[24px] mt-[30px] text-[#666] '>Elegance that comes with halal dressing</p>
    </div>
  )
}
export default BlogCards;