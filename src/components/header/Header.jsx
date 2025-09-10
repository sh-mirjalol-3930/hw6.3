import React from 'react'
import logo from './Logo.svg'
import { BiUser } from "react-icons/bi";

const Header = () => {
  return (
    <header className='py-[50px]'>
        <div className="container">
            <div className="flex justify-between items-center">
                <img src={logo} alt="" />
                <ul className="flex items-center gap-[20px]">
                    <li><a className='text-white hover:text-[#A259FF]' href="#">Marketplace</a></li>
                    <li><a className='text-white hover:text-[#A259FF]' href="#">Rankings</a></li>
                    <li><a className='text-white hover:text-[#A259FF]' href="#">Connect a wallet</a></li>
                    <li><button className='text-white p-[10px] px-[20px] rounded-[15px] bg-[#A259FF] hover:bg-[white] hover:shadow-[0_0_20px_#A259FF] flex items-center gap-[10px] hover:text-[#A259FF]'><BiUser/>Sign Up</button></li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header
