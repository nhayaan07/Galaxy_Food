import React from 'react'
import "./Section1.css"

const Section1 = () => {
    const src = "https://vod-progressive.akamaized.net/exp=1695669308~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1316%2F9%2F231581056%2F819216625.mp4~hmac=b6ea4af20f612081bfe233cf0daa52cf26425b76a30eaf768912ed418e244953/vimeo-prod-skyfire-std-us/01/1316/9/231581056/819216625.mp4?filename=file.mp4 ";
  return (
    <div className='h-[500px] w-full section1 relative font-[CharukolaUltraLight]'>
       
       <video data-aos="fade" autoPlay muted loop width="100%" className='h-full w-full absolute left-0 right-0 top-0 bottom-0 object-cover z-[-2]'>
      <source src={src} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
    <div className=' absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-black opacity-50 z-[-1]'></div>

    <div className='flex flex-col items-center justify-center h-full'>
        <h1 className='text-white text-5xl md:text-8xl'>আপনি কি ক্ষুধার্থ?</h1><br /><br />

        <p  className='text-xl md:text-2xl text-white'>গ্যালাক্সি ফুড আপনাকে কোয়ারলিটি ফুড সার্ভ করতে প্রস্তুত</p> <br /><br />
        <button data-aos="fade" data-aos-delay="700" className='btn-default bg-[--secondary-color] font-semibold'>আমাদের মেনু দেখুন</button>
    </div>
    
    </div>




  )
}

export default Section1