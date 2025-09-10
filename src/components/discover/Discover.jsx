import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import user from '../hero/user.svg'
import pic1 from './image.png'


const Discover = () => {
  return (
    <div className='py-[50px] mt-[50px] bg-[#222222]'>
      <div className="container">
        <div className="flex justify-between items-center">
            <div className="flex flex-col">
                <h2 className='text-[40px] font-[500] text-[white]'>Discover More NFTs</h2>
                <p className='text-[25px] text-[white]'>Explore new trending NFTs</p>
            </div>
            <button className='text-white p-[20px] h-[60px] px-[30px] rounded-[15px] border-2 border-[#A259FF] hover:shadow-[0_0_20px_#A259FF] flex items-center gap-[10px] hover:text-[#A259FF]'><IoEyeOutline/>see more</button>
        </div>
        <div className="flex justify-between items-center mt-[30px] gap-[30px] ">
            <div className="flex flex-col">
                <img src={pic1} alt="" />
                <div className="flex flex-col gap-[10px] hover:text-[#A259FF] hover:text-shadow-[0_0_20px_#A259FF]  rounded-[0_0_20px_20px] text-[white] p-[20px] bg-[#3B3B3B]">
                    <b className='text-[20px]'>Space Walking</b>
                    <div className="flex items-center gap-[10px]">
                        <img src={user} alt="" />
                        <p className='font-mono'>Animakid</p>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <p className='text-[12px] text-[#858584] font-mono'>Price</p>
                            <b className='font-mono'>1.63 ETH</b>
                        </div>
                        <div className="flex flex-col">
                            <p className='text-[12px] text-[#858584] font-mono'>Highest Bid</p>
                            <b className='font-mono'>0.33 wETH</b>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <img src={pic1} alt="" />
                <div className="flex flex-col gap-[10px] hover:text-[#A259FF] hover:text-shadow-[0_0_20px_#A259FF]  rounded-[0_0_20px_20px] text-[white] p-[20px] bg-[#3B3B3B]">
                    <b className='text-[20px]'>Space Walking</b>
                    <div className="flex items-center gap-[10px]">
                        <img src={user} alt="" />
                        <p className='font-mono'>Animakid</p>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <p className='text-[12px] text-[#858584] font-mono'>Price</p>
                            <b className='font-mono'>1.63 ETH</b>
                        </div>
                        <div className="flex flex-col">
                            <p className='text-[12px] text-[#858584] font-mono'>Highest Bid</p>
                            <b className='font-mono'>0.33 wETH</b>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <img src={pic1} alt="" />
                <div className="flex flex-col gap-[10px] hover:text-[#A259FF] hover:text-shadow-[0_0_20px_#A259FF]  rounded-[0_0_20px_20px] text-[white] p-[20px] bg-[#3B3B3B]">
                    <b className='text-[20px]'>Space Walking</b>
                    <div className="flex items-center gap-[10px]">
                        <img src={user} alt="" />
                        <p className='font-mono'>Animakid</p>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <p className='text-[12px] text-[#858584] font-mono'>Price</p>
                            <b className='font-mono'>1.63 ETH</b>
                        </div>
                        <div className="flex flex-col">
                            <p className='text-[12px] text-[#858584] font-mono'>Highest Bid</p>
                            <b className='font-mono'>0.33 wETH</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Discover
