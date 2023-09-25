import React from 'react';
import "./Hero.css";

const Hero = () => {
  return (

    <div className="grid grid-cols-1 p-10 md:p-20 gap-5 bg-[#e1e1e154] md:grid-cols-2 md:py-40 py-20">

<div className='flex items-center justify-center'>
<img loading='lazy' className=' h-[400px] w-full md:w-[400px] md:rounded-full ' src="/img/hero.jpg" alt="" />
</div>

<div className='flex justify-center flex-col max-md:order-first'>
<h1 className='text-6xl md:text-7xl max-sm:text-center font-[CharukolaUltraLight] font-bold'>গ্যালাক্সি <span className='text-[--red]'> ফুড </span></h1><br /><br />
<p className='text-3xl'>গ্যালাক্সি রেস্টুরেন্ট নরসিংদী নরসিংদী জেলার অন্যতম জনপ্রিয় রেস্টুরেন্ট। এটি নগরীর কেন্দ্রস্থলে অবস্থিত এবং এখানে বাংলা, চাইনিজ, ইন্ডিয়ান এবং কন্টিনেন্টাল খাবার পাওয়া যায়। রেস্টুরেন্টটির পরিবেশ খুবই আকর্ষণীয় এবং পরিষেবা খুবই ভাল।<br /><br />

গ্যালাক্সি রেস্টুরেন্টের খাবারের মান খুবই ভাল এবং দামও সাশ্রয়ী। এখানকার জনপ্রিয় খাবারগুলোর মধ্যে রয়েছে চিকেন ফ্রাই রাইস, চিকেন চিলি, মাটন নেহারি, মাটন বিরিয়ানি, ফিশ ফ্রাই, চিকেন রোস্ট, তন্দুরি চিকেন, কাবাব, বিরিয়ানি, নান, রুটি ইত্যাদি।<br /><br />

গ্যালাক্সি রেস্টুরেন্ট পরিবার নিয়ে খাওয়ার জন্য একটি দুর্দান্ত জায়গা। এখানে শিশুদের জন্যও একটি পৃথক প্লেজোন রয়েছে। রেস্টুরেন্টটিতে ব্যাংকুয়েট হল রয়েছে যেখানে বিবাহ, জন্মদিন পার্টি, অফিসিয়াল মিটিং ইত্যাদি আয়োজন করা যায়।<br /><br />
</p>
</div>

    </div>

  )
}

export default Hero