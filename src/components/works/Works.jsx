import React from 'react'
import pic1 from './image.png'

const Works = () => {
  return (
    <div className='py-[20px] mt-[20px]'>
      <div className="container">
        <div className="flex flex-col">
            <h2 className='text-[40px] font-[500] text-[white]'>How it works</h2>
            <p className='text-[25px] text-[white]'>Find out how to get started</p>
        </div>
        <div className="flex items-center mt-[30px] justify-between">
            <div className="flex w-[300px] items-center text-center text-[white] gap-[10px] rounded-[20px] flex-col p-[20px] bg-[#3B3B3B]">
                <img src={pic1} className='w-[210px]' alt="" />
                <b>Setup Your wallet</b>
                <p>Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.</p>
            </div>
            <div className="flex w-[300px] items-center text-center text-[white] gap-[10px] rounded-[20px] flex-col p-[20px] bg-[#3B3B3B]">
                <img src={pic1} className='w-[210px]' alt="" />
                <b>Setup Your wallet</b>
                <p>Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.</p>
            </div>
            <div className="flex w-[300px] items-center text-center text-[white] gap-[10px] rounded-[20px] flex-col p-[20px] bg-[#3B3B3B]">
                <img src={pic1} className='w-[210px]' alt="" />
                <b>Setup Your wallet</b>
                <p>Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Works
