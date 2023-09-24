import React from 'react';
import "./Banner.css";

const Banner = () => {
  return (
    <>
<div className="banner max-sm:h-[60vh] sm:h-screen w-full">
  <div className='flex flex-col h-full  justify-center items-center space-y-12'>
<div>
  <img className='w-[100%] h-[150px] cursor-pointer' src="./img/logo.png" alt="" />
</div>
<div>
  <button className='btn-default'>View Menu</button>
</div>

</div></div>

    </>
  )
}

export default Banner