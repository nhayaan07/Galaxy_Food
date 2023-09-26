import React, { useRef, useState } from 'react';
import './Menu.css';

const Menu = () => {
  const tabTitle = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div>
        <div id='menu' className='py-10'>
          <h1 className='tab-title text-5xl md:text-6xl text-center py-8'>আমাদের স্পেশাল মেনু</h1>
          <div className=''>
            <ul ref={tabTitle} className='tab-head flex text-3xl md:text-4xl gap-10 justify-center flex-wrap'>
              <li onClick={() => handleTabClick(0)} className={activeTab === 0 ? 'active' : ''}>কাচ্চি 1</li>
              <li onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'active' : ''}>কাচ্চি 2</li>
              <li onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'active' : ''}>কাচ্চি 3</li>
              <li onClick={() => handleTabClick(3)} className={activeTab === 3 ? 'active' : ''}>কাচ্চি 4</li>
              <li onClick={() => handleTabClick(4)} className={activeTab === 4 ? 'active' : ''}>কাচ্চি 5</li>
              <li onClick={() => handleTabClick(5)} className={activeTab === 5 ? 'active' : ''}>কাচ্চি 6</li>
            </ul>
          </div>

          <div className='tab-panel py-10 p-5'>
            {/* Custom tab content */}
            <div className={`tab-content ${activeTab === 0 ? 'active' : ''}`}>

              <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>


              <div className='flex flex-col overflow-hidden bg-[#f7f7f7b5 p-10]'>
                <div>
                  <img loading='lazy' className='w-full rounded-xl ' src="/img/biriyani.jpg" alt="" />
                </div>
                <div><br /><h1 className='text-4xl font-bold text-center'>বাসমতি কাচ্চি ১</h1></div>
                <div>
                <p className='text-3xl font-bold text-center pt-5'>২৯০/</p>
              </div>

              </div>

              <div className='flex flex-col overflow-hidden bg-[#f7f7f7b5 p-10]'>
                <div>
                  <img loading='lazy' className='w-full rounded-xl ' src="/img/biriyani.jpg" alt="" />
                </div>
                <div><br /><h1 className='text-4xl font-bold text-center'>বাসমতি কাচ্চি ১</h1></div>
                <div>
                <p className='text-3xl font-bold text-center pt-5'>২৯০/</p>
              </div>

              </div>

              <div className='flex flex-col overflow-hidden bg-[#f7f7f7b5 p-10]'>
                <div>
                  <img loading='lazy' className='w-full rounded-xl ' src="/img/biriyani.jpg" alt="" />
                </div>
                <div><br /><h1 className='text-4xl font-bold text-center'>বাসমতি কাচ্চি ১</h1></div>
                <div>
                <p className='text-3xl font-bold text-center pt-5'>২৯০/</p>
              </div>

              </div>

              <div className='flex flex-col overflow-hidden bg-[#f7f7f7b5 p-10]'>
                <div>
                  <img loading='lazy' className='w-full rounded-xl ' src="/img/biriyani.jpg" alt="" />
                </div>
                <div><br /><h1 className='text-4xl font-bold text-center'>বাসমতি কাচ্চি ১</h1></div>
                <div>
                <p className='text-3xl font-bold text-center pt-5'>২৯০/</p>
              </div>

              </div>
              


              </div>
              {/* Add your custom content here */}
            </div>
            <div className={`tab-content ${activeTab === 1 ? 'active' : ''}`}>
              <h1 className='text-6xl py-8'>আমাদের স্পেশাল মেনু 2</h1>
              {/* Add your custom content here */}
            </div>
            <div className={`tab-content ${activeTab === 2 ? 'active' : ''}`}>
              <h1 className='text-6xl py-8'>আমাদের স্পেশাল মেনু 3</h1>
              {/* Add your custom content here */}
            </div>
            <div className={`tab-content ${activeTab === 3 ? 'active' : ''}`}>
              <h1 className='text-6xl py-8'>আমাদের স্পেশাল মেনু 4</h1>
              {/* Add your custom content here */}
            </div>
            <div className={`tab-content ${activeTab === 4 ? 'active' : ''}`}>
              <h1 className='text-6xl py-8'>আমাদের স্পেশাল মেনু 5</h1>
              {/* Add your custom content here */}
            </div>
            <div className={`tab-content ${activeTab === 5 ? 'active' : ''}`}>
              <h1 className='text-6xl py-8'>আমাদের স্পেশাল মেনু 6</h1>
              {/* Add your custom content here */}
            </div>
          </div>
        </div>
        {/* tab panel div end */}
      </div>
    </>
  );
};

export default Menu;
