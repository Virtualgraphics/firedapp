
import * as React from 'react'
import FrontSlider from '../frontslider/Frontslider';
import { Hero } from '../hero';
import { Intro } from '../intro';
import Link from 'next/link'
import Image from 'next/image'







  
  const Home = () => {
    return ( 

   

   <div className= "flex mx-auto py-12 w-3/4 h-3/4">  
   
   <Image
              className="object-cover w-full  rounded-3xl shadow-3xl shadow-lg"
              src="/assets/beast_pack_poster.jpg"
              alt="Main Image"
              width={1200}
              height={800}
   
              />






</div>
)

};

export default Home;