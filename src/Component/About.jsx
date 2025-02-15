import React from 'react'

function About() {
    return (
        <div className='flex items-center justify-center flex-col font-inter p-4 sm:p-8 ' id='about'>
            <div className='flex justify-center flex-col p-5  sm:w-128'>
            <h3 className='text-center font-semibold text-yt-white'> About</h3>
                <p className=' text-center text-zinc-500 p-6'>YouTube Thumbnail Downloader is a free and easy-to-use tool that lets you download high-quality thumbnails
                     from any YouTube video in just a few clicks. Whether you're a content creator, designer, or just need a thumbnail for reference, 
                     this tool helps you quickly grab images in HD resolution.
                </p>
            </div>

        </div>
    )
}

export default About