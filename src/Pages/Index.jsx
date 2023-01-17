import React from 'react';
import heroe from '../assets/arabianclothing_1.jpg';
import BlogCards from '../Component/BlogCards';
import ProductCard from '../Component/productCard';
import { scarfs } from '../Utils/data'

function Index() {
  return (
    <>
    <div className=''>
        <div className="heroe w-[100%]">
            <img src={heroe} alt="" className='w-full' />
        </div>
        {/* scarf section */}
        <div className='mt-[5vh] px-[5vw] scarf-section flex flex-col lg:flex-row justify-between '>
          <div className='w-full min-h-[500px] lg:w-[35vw] lg:min-h-[600px] flex'>
            <div className='scarf-explore w-[98%] h-[480px] hover:w-[100%] hover:h-[500px]   lg:w-[97%] lg:min-h-[97%]  lg:hover:w-[100%] lg:hover:h-[100%] mx-auto flex flex-col items-end my-auto'>
              <p className='explore bg-white hover:text-[#800000] hover:tracking-[3.5px] w-[60%] py-[1%] my-auto text-center text-[25px] md:text-[40px] tracking-[2.5px] font-semibold text-[#666] font-openSans '>SCARVES</p> 
            </div>
          </div>
          <div className='flex flex-wrap lg:w-[65%]  justify-between'>
            {
              scarfs.map(scarf=>{
                return  <ProductCard key={scarf.id} {...scarf}/>
              })
            }
           
            
          </div>
        </div>

        {/* Accesories section */}
        <div className='mt-[5vh] px-[5vw] scarf-section flex flex-col lg:flex-row-reverse justify-between '>
          <div className='w-full min-h-[500px] lg:w-[35vw] lg:min-h-[600px] lg:ml-[2%] flex'>
            <div className='scarf-explore w-[98%] h-[480px] hover:w-[100%] hover:h-[500px]   lg:w-[97%] lg:min-h-[97%]  lg:hover:w-[100%] lg:hover:h-[100%] mx-auto flex flex-col items-start my-auto '>
              <p className='explore bg-white hover:text-[#800000] hover:tracking-[3.5px] px-[2%] py-[1%] my-auto text-center text-[25px] md:text-[40px] tracking-[2.5px] font-semibold text-[#666] font-openSans '>ACCESSORIES</p> 
            </div>
          </div>
          <div className='flex flex-wrap lg:w-[65%]  justify-between'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>

        {/* blog section */}
        <div className='bg-[#ffffffad] mt-[3vh] font-nunitoSans'>
            <h2 className='mt-[5vh] text-center text-[30px] lg:text-[40px] font-bold text-[#666] font-openSans'>Recent Blog Posts</h2>
            <div className='mt-[5vh] px-[5vw] flex flex-wrap justify-between'>
              <BlogCards/>
              <BlogCards/>
              <BlogCards/>
            </div>
        </div>

        {/* subscribe */}
        <div className='bg-black text-white flex flex-col lg:flex-row justify-between px-[5%] font-openSans mt-[5vh] py-[5vh] items-center  '>
            <p className='text-[25px] tracking-[2px] font-[500]' >Exclusive Mailing List</p>
            <div className='flex flex-col lg:flex-row justify-around w-[70%] md:w-[40%] lg:w-[50%]'>
                <input type="email" placeholder='Email Address' className='outline-none bg-black border-b-[2px] border-solid border-b-white lg:w-[50%] w-full mt-[3vh] lg:mt-0 ' />
                <button className='mt-[2vh] lg:mt-0 text-[20px] px-[10%] border-solid border-[2px] border-white hover:bg-[#800000]'>Subscribe</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Index