import React, { useEffect, useRef, useState } from 'react';
import "./Menu.css"

const Menu = () => {

const tabTitle = useRef(null);
const [activeTab, setActiveTab] = useState(0);

const handleTabClick = (index) => {
  setActiveTab(index);
};
useEffect( 
  () => {
console.log(tabTitle.current.querySelectorAll('li'))

  }
  ,[])
  return (
    <>
    
    <div className=' overflow-hidden' id='menu'>
<div>
  <h1 className='tab-title text-6xl text-center py-8'>আমাদের স্পেশাল মেনু</h1>
<div className=''>
  <ul ref={tabTitle} className='tab-head flex text-2xl md:text-4xl gap-10 justify-center flex-wrap'>
    <li>কাচ্চি</li>
    <li>কাচ্চি</li>

    <li>কাচ্চি</li>

    <li>কাচ্চি</li>
    <li>কাচ্চি</li>

    <li>কাচ্চি</li>

  </ul>
</div>

<div className='tab-panel p-5'>


<div className="tab-content active">
<h1 className='text-6xl py-8'>আমাদের স্পেশাল মেনু</h1>
<h1 className='text-6xl py-8'>আমাদের স্পেশাল মেনু</h1>
<h1 className='text-6xl py-8'>আমাদের স্পেশাল মেনু</h1>
<h1 className='text-6xl py-8'>আমাদের স্পেশাল মেনু</h1>
<h1 className='text-6xl py-8'>আমাদের স্পেশাল মেনু</h1>

</div>
<div className="tab-content">
<h1 className='text-6xl py-8'>আমাদের স্পেশাল মেনু</h1>
<h1 className='text-6xl py-8'>আমাদের স্পেশাল মেনু</h1>
<h1 className='text-6xl py-8'>আমাদের স্পেশাল মেনু</h1>
<h1 className='text-6xl py-8'>আমাদের স্পেশাল মেনু</h1>
<h1 className='text-6xl py-8'>আমাদের স্পেশাল মেনু</h1>

</div>
<div className="tab-content">
<h1 className='text-6xl py-8'>আমাদের স্পেশাল মেনু</h1>
<h1 className='text-6xl py-8'>আমাদের স্পেশাল মেনু</h1>
<h1 className='text-6xl py-8'>আমাদের স্পেশাল মেনু</h1>
<h1 className='text-6xl py-8'>আমাদের স্পেশাল মেনু</h1>
<h1 className='text-6xl py-8'>আমাদের স্পেশাল মেনু</h1>

</div>




</div> 
{/* tab panel div end */}

</div>


    </div>
    
    
    </>
  )
}

export default Menu