import React from 'react'
import logo from '../header/Logo.svg'
import { PiDiscordLogo } from "react-icons/pi";
import { PiYoutubeLogo } from "react-icons/pi";
import { RiTwitterLine } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";


const Footer = () => {
  return (
    <footer className='py-[50px] mt-[50px] bg-[#3B3B3B]'>
      <div className="container py-[20px] border-2 border-[#3B3B3B] pb-[30px] border-b-[#CCCCCC] ">
        <div className="flex justify-between">
            <div className="flex flex-col w-[300px] gap-[20px]">
                <img src={logo} alt="" />
                <p className=' text-[#CCCCCC] text-[24px]'>NFT marketplace UI created with Anima for Figma.</p>
                <p className=' text-[#CCCCCC] text-[24px]'>Join our community</p>
                <div className="flex text-[35px] gap-[20px] text-[#cccccc] items-center">
                    <PiDiscordLogo />
                    <PiYoutubeLogo />
                    <RiTwitterLine />
                    <AiOutlineInstagram />
                </div>
            </div>
            <div className="flex flex-col w-[300px] gap-[20px]">
                <h2 className='font-mono text-[white] text-[30px] font-[700]'>Explore</h2>
                <p className=' text-[#CCCCCC] text-[24px]'>Marketplace</p>
                <p className=' text-[#CCCCCC] text-[24px]'>Rankings</p>
                <p className=' text-[#CCCCCC] text-[24px]'>Connect a wallet</p>
            </div>
            <div className="flex flex-col w-[400px] gap-[20px]">
                <h2 className='font-mono text-[white] text-[30px] font-[700]'>Join our weekly digest</h2>
                <p className=' text-[#CCCCCC] text-[24px]'>Get exclusive promotions & updates straight to your inbox.</p>
                <div className="flex mt-[20px]">
                    <input type="text" placeholder='Enter your email here' className='p-[15px] rounded-l-[20px] w-[300px] outline-none bg-[white] ' />
                    <button className='bg-[#A259FF] flex items-center gap-[20px] rounded-[20px] px-[40px] ml-[-50px] text-[white] hover:shadow-[0_0_20px_#A259FF]'> Subscribe</button>
                </div>
            </div>
        </div>
      </div>
      <div className="container pt-[35px]">
        <p className='text-[#CCCCCC] text-[20px]'>Ⓒ NFT Market. Use this template freely.</p>
      </div>
    </footer>
  )
}

export default Footer
