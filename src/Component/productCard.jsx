import React from 'react';
// import beads from '../Saved Pictures/IMG-20230115-WA0023.jpg';

function ProductCard({img,name}) {
  return (
    <div className='w-full md:w-[47%] lg:w-[30%] lg:ml-[2%] my-[2%] bg-[#666]'>
        <div className='w-[100%] h-[300px]' style={{ backgroundImage: `url(${img})`,backgroundPosition:'center',backgroundSize:'cover'}}></div>
        <div className='p-[2%] flex justify-around text-[24px] lg:text-[20px] text-white
        '>
          <p>{name}</p>
          <p className='hover:text-[#dd4c4c]'><i class="fa-solid fa-heart "></i></p>
        </div>
    </div>
  )
}
export default ProductCard;