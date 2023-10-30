
import { useState } from "react";
import { FC, useEffect } from 'react';
import Image from 'next/image'
import React from 'react';



const Token = () => {
 

  
      return (


        <div className="justify-center px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:pt-20">
        <div className="max-w-screen-sm sm:text-center sm:mx-auto">
          
  
            <Image
            className="m-auto w-144 py-2"
            src="/assets/varan_logoTYPE.svg"
            alt="Star Divider"
            width={1260}
            height={750}
          />
        

          
            <hr className="w-full  border-yellow-200" />
            <p className="text-base font-bold text-yellow-200 lg:text-2xl  md:text-lg sm:px-4 py-8 font-Acme">
           Claim your VARAN and TRIBE tokens below and play the Savage Varan Games. 
            </p>

<div className="grid max-w-screen-lg gap-8 row-gap-8 sm:mx-auto px-4 md:row-gap-8 lg:grid-cols-2">

<div className="bg-green-900/30  rounded-2xl w-72 drop-shadow-lg justify-center" >

<Image
              className="p-10 rounded-full shadow-3xl"
              src="/assets/token_var.jpg"
              alt="Varan"
              width={1260}
              height={750}
            />

          <h1 className="text-yellow-100 font-bold text-2xl ">VARAN Token</h1>
          <h2 className="text-white text-md py-2">Claim VARAN Tokens</h2>

<div className="mt-5 mb-5 max-w-sm">
          <input 
    id="1"
    type="text"  
    placeholder="Enter amount to claim" 
className="flex-grow  h-10 px-2 mb-3 text-black text-base transitiom duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
            
   

    
    />
    </div>
<div className="m-5 w-32 ">
    
          </div>
              </div>


              <div className="bg-green-900/30 rounded-2xl w-72 drop-shadow-lg ">


<Image
              className="p-10 rounded-full"
              src="/assets/token_tribe.jpg"
              alt="tribe"
              width={1260}
              height={750}
            />

<h1 className="text-yellow-100 font-bold text-2xl">TRIBE Token</h1>
<h2 className="text-white text-md py-2">Claim TRIBE Tokens</h2>
<div className="mt-5 mb-5 max-w-sm">
          <input 
    id="1"
    type="text"  
    placeholder="Enter amount to claim" 
className="flex-grow  h-10 px-2 mb-3 text-black text-base transitiom duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
            
   
  
    
    />
    </div>
<div className="m-5 w-32">
   
          </div>
              </div>
              </div>
</div>

<div className=" pt-20 w-4/5 justify-center mx-auto">
        <h1 className=" text-blue-900 font-Acme text-2xl text-center">
              Get started with your tokens and use them for all activities across the island:
            </h1></div>

<div className="py-2  justify-items-center">
      <div className="w-4/5 m-auto grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3 mt-10 sm:grid-cols-2">
        <div className="duration-300 transform bg-lime-200 border-l-4 border-white hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">The doctor said</h6>
            <p className="text-sm text-green-900">
              Sportacus andrew weatherall goose Refined gentlemen super mario
              des lynam alpha trion zap rowsdower.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-lime-200 border-l-4 border-white hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5  rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">Skate ipsum dolor</h6>
            <p className="text-sm text-green-900">
              Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-lime-200 border-l-4 border-white hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5  rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">
              Baseball ipsum dolor
            </h6>
            <p className="text-sm text-geen-900">
              Bro ipsum dolor sit amet gaper backside single track, manny Bike
              epic clipless. Schraeder drop gondy.
            </p>
          </div>
        </div>
        </div>
        <div className=" pt-14 w-4/5 justify-center m-auto">
        <h1 className=" text-blue-800 text-lg font-Acme text-center">
              For support or technical problems, please contact us on our Discord or send an email to info(at)savagevaransociety.com
            </h1></div>
      </div>
 </div>
 

      );
    };

 
  export default Token;