
import * as React from 'react'
import FrontSlider from '../frontslider/Frontslider';
import { Hero } from '../hero';
import { Intro } from '../intro';
import Link from 'next/link'
import Image from 'next/image'







  
  const Home = () => {
    return ( 

   

   <div className= " mx-auto py-12 w-3/4 h-3/4">  
   
   <div >
   <Image
              className="object-cover w-full  rounded-3xl shadow-3xl shadow-lg"
              src="/assets/beast_pack_poster.jpg"
              alt="Main Image"
              width={1200}
              height={800}
   
              /></div>

<div className=" mx-auto h-32 py.8 justify-center">
<h1 className="py-4 text-center font-Amethysta text-yellow-100 lg:text-4xl sm:lg">
Get the BEAST PACKS in the shop!
</h1>
<Link href="/shop">
<button className="flex items-center justify-center  mx-auto bg-black text-white hover:text-yellow-200 p-4 rounded-2xl ">SHOP NOW</button>
</Link>
</div>


</div>
)

};

export default Home;