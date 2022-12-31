import React from 'react'

function BlogCard({img,head,text}) {
  return (
    <div className='w-[100%] md:w-[30%] 2xl:w-[40%] 3xl:w-[25%] mb-2 '>
        <img src={img} alt="" className='w-full' />
        <h3 className='text-[18px] leading-[20px] lg:text-[20px] font-[700] lg:leading-[27px] mt-[2%] 3xl:text-[24px] 4xl:text-[28px] 3xl:leading-[32px] 4xl:leading-[36px]'>{head}</h3>
        <p className='text-[12px] lg:text-[14px] font-[400] leading-[19px] mt-[2%] 3xl:text-[20px] 4xl:text-[25px] 3xl:leading-[23px] 4xl:leading-[26px] '>{text}</p>
    </div>
  )
}
export default BlogCard;