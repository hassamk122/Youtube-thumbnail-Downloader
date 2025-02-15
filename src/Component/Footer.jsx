import React from 'react'
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className='pb-4 px-4 sm:pb-0  font-inter' >
            <div className='flex items-center justify-around mt-4 '>
                <div className='flex items-center justify-center flex-col m-2 mt-4 text-zinc-900 '>
                    <div>
                    <h3 className='text-xs sm:text-xl font-normal text-yt-white mb-0 sm:mb-2'>Follow Me</h3>
                    </div>
                    <div className='flex gap-x-3 mt-2 pb-5'> 
                        <h3 className=" cursor-pointer p-2 text-[#0077B5] bg-white rounded-2xl">
                            <a href="https://www.linkedin.com/in/hassam-kiani-648459248/" target='_blank'><Linkedin className='size-3.5 sm:size-6'/></a>
                        </h3>
                        <h3 className="cursor-pointer text-black p-2 rounded-2xl  bg-white">
                            <a href="https://github.com/hassamk122" target='_blank'><Github className='size-3.5 sm:size-6'/></a></h3>
                            <h3 className="cursor-pointer text-violet-500 p-2 rounded-2xl  bg-white">
                            <a href="https://www.instagram.com/hassamkiani_/?igsh=MXhsYzBvenVzamJ1dg%3D%3D#" target='_blank'><Instagram  className='size-3.5 sm:size-6'/></a></h3>
                    </div>
                </div>
            </div>
            <div>
                        <h3 className='font-Poppins text-center mt-2 sm:mt-4 text-xs sm:text-[13px] p-1 text-zinc-600 '> © Made by Muhammad Hassam</h3>
                    </div>
        </footer>
  )
}

export default Footer