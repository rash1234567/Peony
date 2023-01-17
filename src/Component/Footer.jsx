import React from 'react';

function Footer() {
  return (
    <div className='bg-white flex flex-col lg:flex-row px-[5%] text-[20px] py-[20px] font-[600] text-[#666] '>
       <div className='w-[30%] md:w-[20%] lg:w-[10%] flex justify-around items-center mx-auto lg:mx-0'>
        <i class="fa-brands fa-facebook-f ml-[1%] text-blue-500"></i>
        <i class="fa-brands fa-instagram ml-[1%] text-red-500"></i>
        <i class="fa-brands fa-whatsapp ml-[1%] text-green-300"></i>
       </div>
       <div  className='lg:ml-[25%] mx-auto lg:mx-0 mt-[3vh] lg:mt-0'>
        <p className='text-[14px] '>  Shev_'n'_Rash <i class="fa-regular fa-copyright"></i>2023. All Rights Reserved.</p>
       </div>
    </div>
  )
}
export default Footer;