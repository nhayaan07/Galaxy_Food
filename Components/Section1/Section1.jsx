import React from 'react'
import "./Section1.css"

const Section1 = () => {
    const src = "./cook.mp4";
  return (
    <div className='h-[500px] w-full section1 relative font-[CharukolaUltraLight]'>
       
       <video data-aos="fade" autoPlay muted loop width="100%" className='h-full w-full absolute left-0 right-0 top-0 bottom-0 object-cover z-[-2]'>
      <source src={src} type="video/mp4" />
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