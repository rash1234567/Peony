import React from 'react';
import {Link} from 'react-router-dom'

function LargeNav() {
  return (
    <div className='hidden bg-white text-black lg:flex flex-col items-center justify-around largenav '>
        <div className=' mt-[5vh] font-greatVibes logo  '>
            <h5 className='text-center text-[65px] font-[400] leading-[30px] 3xl:text-[85px]  '>Peony</h5>
            <p className=' text-[20px] 3xl:text-[25px]  text-[#666] n-more'> scarves 'n' more </p>
        </div>
        <div className='lg:w-[100%] xl:w-[80%] flex justify-around mt-[3vh] font-nunitoSans text-[#666] font-[600] text-[18px] leading-[50px] 3xl:text-[25px]'>
            <Link className=' navlink'>Home</Link>
            <Link className=' navlink'>Scarves</Link>
            <Link className=' navlink'>Accesories</Link>
            <Link className=' navlink'>Customized items</Link>
            <Link className=' navlink'>Blog</Link>
            <Link to='/about' className=' navlink'>About</Link>
            <Link to='/contact' className=' navlink'>Contact</Link>
        </div>
    </div>
  )
}
export default LargeNav