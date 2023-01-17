import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from 'react';

function SmalNav() {
    const [sidebar,setSidebar] = useState(false);
   
    const toggleNavbar = () => {
      setSidebar(!sidebar)
    }
  
    return (
      <>
      {/* small nav */}
      <div className='w-full h-[8vh] lg:hidden smCover'>
      <div className=' lg:hidden  top-0 left-0 right-0 z-20  w-full smallNav'>
      <div className='absolute right-5 z-20 block top-[3vh] bar lg:hidden' onClick={toggleNavbar}>
              <i className="fa-solid fa-bars text-[30px] text-[black] " ></i>
      </div>
      <Link to='/' className=' w-full '>
          <div className='mt-[2vh]   font-greatVibes  '>
                <h5 className='text-center text-[35px] font-[400] leading-[30px] '>Peony</h5>
                <p className=' text-[15px] text-center text-[#666]'> scarves 'n' more</p>
            </div>
      </Link>
      <div className={sidebar ? 'nav active' : 'nav'}>
          <div className='navbars'>
              <div className="navItemsDiv cursor-pointer" onClick={toggleNavbar}>
                  <Link to='/' className='navItems'>Home</Link>
                  <Link to='' className='navItems'>Scarves</Link>
                  <Link to='' className='navItems'>Accesories</Link>
                  <Link to='' className='navItems'>Customized items</Link>
                  <Link to='/blog' className='navItems'>Blog</Link>
                  <Link to='/About' className='navItems'>About</Link>
                  <Link to='/contact' className='navItems'>Contact</Link>
              </div>
          </div>
      </div>
      </div>
      </div>
      </>
    )
}

export default SmalNav