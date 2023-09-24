import React from 'react';
import "./Banner.css";

const Banner = () => {
  return (
    <>
<div className="banner h-screen w-full">
  <div className='banner-effect'></div>
  <div className='flex flex-col h-full  justify-center items-center space-y-10'>
<div>
  <img className='w-[100%] h-[150px] cursor-pointer' src="/public/img/logo.png" alt="" />
</div>
<div>
  <button className='btn-default'>View Menu</button>
</div>

</div></div>

    </>
  )
}

export default Banner