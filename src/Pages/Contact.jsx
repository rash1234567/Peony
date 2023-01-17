import React from 'react';
import img from '../assets/IMG-20230115-WA0033.jpg';

function Contact() {
  return (
    <div className=' flex flex-col lg:flex-row-reverse justify-around contact lg:mt-[10vh]'>
        <div className='lg:w-[500px] xl:w-[500px] h-[400px] md:h-[700px] w-[90vw] mx-auto lg:mx-0 lg:h-[500px] xl:h-[590px] relative contactImgDiv flex items-center justify-center'>
           <img src={img} className='w-[98%] h-[98%] lg:h-[500px] xl:h-[580px]  contactImg relative'/>
           <div className='hidden flex-col items-center justify-around absolute top-0 h-full w-full right-0 left-0 bottom-0 contact-overlay'>
                <div className='w-4/5 h-[30%] flex flex-col items-center justify-around'>
                  <div className='w-[150px] h-[2px] bg-white'></div>
                  <a href="mailto:" className='text-[20px] font-workSans text-white'>lawdshev@gmail.com</a>
                  <div className='flex w-[70%] items-center justify-around text-white text-[30px]'>
                    <i className='fa solid fa-twitter'></i>
                    <i className='fa solid fa-whatsapp'></i>
                    <i className='fa solid fa-instagram'></i>
                  </div>
                </div>
           </div>
        </div>
        <div className='lg:w-[45vw] lg:h-[500px] mt-[3%] lg:mt-[2%] flex items-center justify-between flex-col '>
            <h1 className='h-[10%] w-[80%] md:w-[70%] lg:w-[100%] xl:w-[60%] text-[25px] md:text-[36px] font-workSans'>Contact Me</h1>
            <form className='flex flex-col justify-around h-[85%] md:w-[70%] w-[80%] lg:w-[100%] xl:w-[60%] '>
                <input type="text" placeholder='Your full name' className='border-b-solid border-b-[1px] border-b-[black] p-4 bg-transparent outline-0' />
                <input type="text" placeholder='Your Phone number'  className='border-b-solid border-b-[1px] border-b-[black] p-4 bg-transparent outline-0' />
                <input type="text" placeholder='Your email address'   className='border-b-solid border-b-[1px] border-b-[black] p-4 bg-transparent outline-0'/>
                <textarea placeholder='Your Message'  className='border-b-solid border-b-[1px] border-b-[black] p-4 bg-transparent h-[200px] lg:h-[300px] outline-0'></textarea>
                <button className='bg-black text-white w-4/5 xl:w-full py-3 self-center mt-5 hover:bg-[#800035]'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact