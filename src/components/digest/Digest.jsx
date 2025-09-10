import React from 'react'
import pic1 from './image.png'
import { MdOutlineEmail } from "react-icons/md";
const Digest = () => {
  return (
    <div className='py-[50px] mt-[50px]'>
      <div className="container p-[50px] justify-between bg-[#3B3B3B] rounded-[20px] flex  gap-[20px]">
        <img src={pic1} alt="" />
        <div className="flex w-[400px] flex-col">
            <h2 className='text-[50px] font-[500] text-[white]'>Join our weekly digest</h2>
            <p className='text-[22px] text-[white]'>Get exclusive promotions & updates straight to your inbox.</p>
            <div className="flex mt-[20px]">
                <input type="text" placeholder='Enter your email here' className='p-[15px] rounded-l-[20px] w-[300px] outline-none bg-[white] ' />
                <button className='bg-[#A259FF] flex items-center gap-[20px] rounded-[20px] px-[40px] ml-[-50px] text-[white] hover:shadow-[0_0_20px_#A259FF]'><MdOutlineEmail /> Subscribe</button>
            </div>
        </div>
        </div>
      </div>
  )
}

export default Digest
