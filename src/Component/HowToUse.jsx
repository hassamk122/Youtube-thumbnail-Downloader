import React from 'react'

function HowToUse() {
    return (
        <div className='flex items-center justify-center flex-col font-inter p-5 '>
            <div className='flex justify-center flex-col p-6 sm:w-128'>
                <h3 className='text-left font-semibold text-yt-white'> How to Use:</h3>
                <p className='text-zinc-300'>  1. Copy the YouTube video URL of the thumbnail you want.<br />
                    2. Paste the link into the downloader.<br />
                    3. Click Download and save the thumbnail.<br />
                </p>
            </div>
        </div>
    )
}

export default HowToUse