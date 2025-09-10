import React from 'react'
import pic1 from './image.png'
import './mashroom.css'
import user from '../hero/user.svg'
import { IoEyeOutline } from 'react-icons/io5'

const Mashrooms = () => {
  return (
    <div className='main'>
      <div className='main2 py-[50px]'>
      <div className="container">
        <div className="flex mt-[350px] justify-between items-end">
          <div className="flex flex-col gap-[20px] items-baseline">
            <button className='flex text-[white] p-[10px] px-[15px] bg-[#3B3B3B] rounded-[20px] items-center gap-[10px]'><img src={user} alt="" />Shroomie</button>
            <h2 className='text-[45px] font-[500] font-sans text-[white]'>Magic Mashrooms</h2>
            <button className='text-black p-[5px] h-[60px] px-[40px] rounded-[25px] border-2 border-[white] hover:border-[#A259FF] bg-[white] hover:shadow-[0_0_20px_black] flex items-center gap-[15px] hover:text-[#A259FF]'><IoEyeOutline className='text-[#A259FF]'/>See NFT</button>        
          </div>
          <div className="flex p-[25px] hover:shadow-[0_0_50px_black] rounded-[20px] bg-[#3B3B3B80] flex-col">
            <p className='text-[white] text-[12px] font-mono'>Auction ends in:</p>
            <b className='text-[white] font-mono text-[35px]'>59 : 59 : 59</b>
            <div className="flex justify-between">
              <p className='text-[white] text-[12px] ml-[5px] font-mono'>Hours</p>
              <p className='text-[white] text-[12px] ml-[10px] font-mono'>Minutes</p>
              <p className='text-[white] text-[12px] font-mono'>Seconds</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Mashrooms
