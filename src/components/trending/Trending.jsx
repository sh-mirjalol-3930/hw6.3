import React from 'react'
import pic1 from './pic1.png'
import pic2 from './pic2.png'
import pic3 from './pic3.png'
// import user from './user.svg'
import user from '../hero/user.svg'


const Trending = () => {
  return (
    <div className='py-[50px] mt-[50px]'>
      <div className="container">
        <h2 className='text-[40px] font-[500] text-[white]'>Trending Collection</h2>
        <p className='text-[25px] text-[white]'>Checkout our weekly updated trending collection.</p>
        <div className="flex items-center justify-between mt-[30px]">
            <div className="flex flex-col">
                <img src={pic1} alt="" />
                <div className="flex justify-between mt-[10px]">
                    <img src={pic2} alt="" />
                    <img src={pic3} alt="" />
                    <div className='bg-[#A259FF] font-mono text-[20px] px-[23px] text-[white] rounded-[20px] items-center flex'>1025+</div>
                </div>
                <div className="flex flex-col gap-[10px] hover:text-[#A259FF] text-[white] py-[15px]">
                    <b className='text-[20px]'>DSGN Animals</b>
                    <div className="flex items-center gap-[10px]">
                        <img src={user} alt="" />
                        <p>Animakid</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <img src={pic1} alt="" />
                <div className="flex justify-between mt-[10px]">
                    <img src={pic2} alt="" />
                    <img src={pic3} alt="" />
                    <div className='bg-[#A259FF] font-mono text-[20px] px-[23px] text-[white] rounded-[20px] items-center flex'>1025+</div>
                </div>
                <div className="flex flex-col gap-[10px] hover:text-[#A259FF] text-[white] py-[15px]">
                    <b className='text-[20px]'>DSGN Animals</b>
                    <div className="flex items-center gap-[10px]">
                        <img src={user} alt="" />
                        <p>Animakid</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <img src={pic1} alt="" />
                <div className="flex justify-between mt-[10px]">
                    <img src={pic2} alt="" />
                    <img src={pic3} alt="" />
                    <div className='bg-[#A259FF] font-mono text-[20px] px-[23px] text-[white] rounded-[20px] items-center flex'>1025+</div>
                </div>
                <div className="flex flex-col gap-[10px] hover:text-[#A259FF] text-[white] py-[15px]">
                    <b className='text-[20px]'>DSGN Animals</b>
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

export default Trending
