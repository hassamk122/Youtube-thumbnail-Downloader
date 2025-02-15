import React, { useState, useMemo } from 'react';
import { X, ArrowDownToLine } from 'lucide-react';

function ThumbnailDownloader() {
    const [link, setLink] = useState('');
    const [videoId, setVideoId] = useState('');
    const [error, setError] = useState('');

    function extractVideoId(url) {
        try {
            const urlObj = new URL(url);
            if (urlObj.hostname.includes("youtube.com")) {
                return urlObj.searchParams.get("v");
            } 
           
            else if (urlObj.hostname.includes("youtu.be")) {
                return urlObj.pathname.substring(1);
            }
        } catch (err) {
            return null; 
        }
        return null;
    }

    function fetchThumbnail() {
        if (!link.trim()) {
            setError("Please enter a valid YouTube URL");
            return;
        }
        const extractedId = extractVideoId(link);
        if (!extractedId) {
            setError("Invalid YouTube link. Make sure it's a valid URL.");
            setVideoId('');
            return;
        }
        setVideoId(extractedId);
        setError(''); 
    }

    const downloadLink = useMemo(() => 
        videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '', 
        [videoId]
    );

    return (
        <div className="flex items-center justify-center flex-col font-inter p-5">
            <div className="flex p-5">
                <h1 className="text-yt-white text-center font-semibold text-xl sm:text-2xl drop-shadow-lg">
                    YouTube Thumbnail Downloader
                </h1>
            </div>
            
            <div className="flex pt-5 flex-col">
                <span className="border-2 border-yt-white py-1 px-3 flex items-center w-72 drop-shadow-lg">
                    <input 
                        type="text" 
                        value={link} 
                        onChange={(e) => {setLink(e.target.value)}} 
                        placeholder="Paste your YouTube link here" 
                        className="focus:outline-none text-white w-full bg-transparent"
                    />
                    {link && (
                        <button onClick={() => setLink('')} className="cursor-pointer">
                            <X size={20} />
                        </button>
                    )}
                </span>
            </div>

            <div className="flex">
                <button 
                    onClick={fetchThumbnail} 
                    className="py-2 px-4 mt-5 rounded-lg text-yt-white font-semibold cursor-pointer bg-yt-red hover:scale-105 transition-all duration-200 ease-in-out"
                >
                    Get Thumbnail
                </button>
            </div>

            {error && (
                <p className="text-red-500 text-sm pt-4">{error}</p>
            )}

            <div className="flex items-center justify-center pt-8 flex-col gap-3">
                {videoId && !error && (
                    <div className="relative">
                        <img 
                            src={downloadLink} 
                            className="rounded-xl cursor-pointer" 
                            height={480} 
                            width={640} 
                            loading="lazy" 
                            alt="YouTube Thumbnail"
                        />
                        <a 
                            href={downloadLink}  
                            target="_blank" 
                            rel="noopener noreferrer"  
                            className="absolute bottom-2 right-2 text-yt-black bg-yt-white py-1 px-2 rounded-lg cursor-pointer hover:text-yt-white hover:bg-yt-black transition-all duration-200 ease-linear"
                        >
                            <ArrowDownToLine className="w-5 h-5 sm:w-8 sm:h-8" />
                        </a>
                        <h3 className="absolute bottom-2 text-xs sm:text-base left-2 text-yt-white">HD</h3>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ThumbnailDownloader;
