import React from 'react';
import img from '../assets/IMG-20230115-WA0013.jpg'

function About () {
  return (
    <div className='flex flex-col items-center justify-around h-auto py-[5%] '>
        <h1 className='text-[30px] md:text-[40px] font-nunitoSans font-normal'>About</h1>
        <div className='h-[70%] w-[90%] flex flex-col mt-[10px] md:flex-row items-center justify-around'>
            <img src={img}  className=' h-[50%] w-[100%] md:w-[50%] lg:w-[30%] md:h-[100%]'/>
            <p className='lg:w-[50%] md:w-[45%] text-[12px] md:text-[15px] lg:text-[18px] font-workSans font-thin mt-[5%] md:mt-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim impedit dolor cupiditate ut corrupti quia perspiciatis rem, laboriosam, beatae dolorum sint nisi deleniti quos expedita deserunt, doloribus illo suscipit repellat eaque optio eos obcaecati? Suscipit illum quos ipsa possimus et ducimus voluptate enim rerum sapiente tempore porro, nisi odio nobis earum, illo repellendus veritatis quasi provident placeat fugit, reprehenderit cum? Ratione numquam labore velit fuga atque dolorem ut aliquid reiciendis consequuntur dignissimos, voluptate aspernatur minus earum nesciunt ipsum exercitationem placeat saepe. Odio voluptates nostrum quod, quae modi, eum quia maiores similique asperiores itaque vero sed doloremque a magnam illo velit, ad quidem maxime sint ipsa doloribus non deserunt iusto ex.</p>
        </div>
    </div>
  )
}

export default About