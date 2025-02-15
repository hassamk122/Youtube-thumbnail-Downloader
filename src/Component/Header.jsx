import React from 'react'
import FleetLogo from '../assets/Fleet.svg';
import {BadgeInfo} from 'lucide-react'

function Header() {

  return (
    <div className='flex items-center justify-center'>
    <div className='flex items-center justify-between font-inter py-3 px-8 border-b-zinc-700  border-b-[1px] w-full sm:w-[60%] mx-1 sm:mx-0'>
        <div className='font-normal text-2xl text-yt-white'>
          <div className='flex items-center flex-row gap-1'>      
            <img src={FleetLogo} className='w-7' alt='fleet-logo'></img>
            <h2 className='font-bold'>YTD</h2>
          </div></div>
        <div className='flex items-center justify-center'>
          <a href='#about' className='font-bold text-base hover:text-yt-red cursor-pointer  text-yt-white'><BadgeInfo size={20} absoluteStrokeWidth={true}/></a>
        </div>
        
    </div>
    </div>
  )
}

export default Header