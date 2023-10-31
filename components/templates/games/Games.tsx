
import {useState } from 'react'
import type { NextPage } from "next";
import { FC, useEffect } from 'react';
import Image from 'next/image'
import React from 'react';
import { GameCard } from '../gamecard';



const Games = () => {
 
  
  
      return (


        <div className="justify-center px-4 py-2 mx-auto ">
        <div className="w-1/2 sm:text-center sm:mx-auto">
          
  
            <Image
            className="m-auto w-96 py-8"
            src="/assets/kaosMOON_logo_color.svg"
            alt="KM Logo"
            width={1260}
            height={750}
          />
        

          
            <hr className="w-full  border-yellow-200" />
            <p className="text-base font-semibold tracking-wide text-yellow-200 lg:text-2xl  md:text-lg sm:px-4 py-8 font-Acme">
           Play the KAOS MOON Ritual Defi and the Trading Card Games and earn rewards. 
            </p>

            

<GameCard/>

</div>

<div className="flex justify-center py-10">
<p className='text-white text-lg'>Technical details, white paper and tokenomics are coming soon and will be published on our website.</p>
</div>


              
</div>


     
        
          
       
        
        

 

      );
    };

 
  export default Games;