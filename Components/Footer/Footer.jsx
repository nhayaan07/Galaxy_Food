import React from 'react'
;
import "./Footer.css";

const Footer = () => {
  return (
<>

    <footer className='bg-[--primary-color] text-white p-10 md:px-[10%]'>
      <div className="footer-row grid grid-cols-2 md:grid-cols-3 gap-5 mx-auto w-full">
<div>
<h1>Product</h1>
<ul>
  <li>Sample Menu</li>
  <li>Sample Menu</li>
  <li>Sample Menu</li>
  <li>Sample Menu</li>
  <li>Sample Menu</li>


</ul>
</div>
<div>
<h1>Company</h1>
<ul>
  <li>Sample Menu</li>
  <li>Sample Menu</li>
  <li>Sample Menu</li>
  <li>Sample Menu</li>
  <li>Sample Menu</li>


</ul></div>
<div>
<h1>Support</h1>
<ul>
  <li>Sample Menu</li>
  <li>Sample Menu</li>
  <li>Sample Menu</li>
  <li>Sample Menu</li>
  <li>Sample Menu</li>


</ul>

</div>
<div>

</div>

      </div>
      
    </footer>
    <hr />
<div className='bg-[--secondary-color] text-xl md:text-2xl text-center py-3 font-bold'>
Copyright © 2023  Kacchi Bhai | All Rights Reserved
</div>

</>


  )
}

export default Footer