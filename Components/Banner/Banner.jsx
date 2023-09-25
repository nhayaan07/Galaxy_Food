import React, { useEffect } from 'react';
import "./Banner.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {

  useEffect(() => {
    AOS.init(
{
  easing: 'ease-in-sine'
}

    );
  }, [])

  return (
    <>

<div className='banner max-sm:h-screen'>
<div className='flex flex-col space-y-8 items-start h-full justify-start p-5 sm:items-center md:justify-center max-md:pt-[60%]'>
  <h1 data-aos="fade-up" className='text-5xl md:text-7xl text-white'>কাচ্চির <span className='text-[--secondary-color]'>ভুবনে</span> আপনাকে স্বাগতম</h1>
  <p data-aos="zoom-in" data-aos-delay="500" className='text-white text-2xl'>শহরের সেরা কাচ্চির স্বাদ পেতে আপনাকে আসতে হবে গ্যালাক্সিতে</p>
  <button data-aos="zoom-in" data-aos-delay="700" className='btn-default bg-[--secondary-color] font-semibold'>আমাদের মেনু দেখুন</button>
</div>

</div>

    </>
  )
}

export default Banner