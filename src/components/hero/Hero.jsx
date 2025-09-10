import React from 'react'
import pic1 from './image.png'
import user from './user.svg'
import { IoRocketOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <div>
      <div className="container">
        <div className="flex items-center justify-between">
            <div className="flex text-[white] w-[400px] items-baseline gap-[20px] flex-col">
                <h1 className='text-[60px] text-baseline font-[700]'>Discover digital art & Collect NFTs</h1>
                <p className='text-[20px]'>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
                <button className='text-white p-[10px] px-[20px] rounded-[15px] bg-[#A259FF] hover:bg-[white] hover:shadow-[0_0_20px_#A259FF] flex items-center gap-[10px] hover:text-[#A259FF]'><IoRocketOutline/>Get Started</button>
                <div className="flex gap-[50px] font-mono items-center">
                    <div className="flex flex-col">
                        <b className='text-[22px]'>240k+</b>
                        <p className='text-[20px]'>Total Sale</p>
                    </div>
                    <div className="flex flex-col">
                        <b className='text-[22px]'>100k+</b>
                        <p className='text-[20px]'>Auctions</p>
                    </div>
                    <div className="flex flex-col">
                        <b className='text-[22px]'>240k+</b>
                        <p className='text-[20px]'>Artists</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <img src={pic1} alt="" />
                <div className="flex flex-col gap-[10px] hover:text-[#A259FF] hover:text-shadow-[0_0_20px_#A259FF]  rounded-[0_0_20px_20px] text-[white] p-[20px] bg-[#3B3B3B]">
                    <b className='text-[20px]'>Space Walking</b>
                    <div className="flex items-center gap-[10px]">
                        <img src={user} alt="" />
                        <p>Animakid</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
