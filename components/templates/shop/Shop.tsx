
import {useState } from 'react'
import type { NextPage } from "next";
import { FC, useEffect } from 'react';
import Image from 'next/image'
import React from 'react';
import {MediaRenderer, useContract, useContractMetadata, Web3Button} from "@thirdweb-dev/react";



const Shop = () => {
 
  const { contract: tokenDropContract} = useContract("0xd23342d614a1ff1d7bc84b9041C8615532D55C6D");
  const [amountToClaim, setAmountToClaim] = useState("");
  
      return (


        <div className="justify-center px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:pt-6">
        <div className="max-w-screen-sm sm:text-center sm:mx-auto">
          
  
            <Image
            className="m-auto w-96 py-8"
            src="/assets/kaosMOON_logo_color.svg"
            alt="KM Logo"
            width={1260}
            height={750}
          />
        

          
            <hr className="w-full  border-yellow-200" />
            <p className="text-base font-semibold tracking-wide text-yellow-200 lg:text-2xl  md:text-lg sm:px-4 py-8 font-Acme">
           Mint your SAVAGE VARAN NFT and go on a Treasure Hunt. 
            </p>

<div className="flex justify-center ">




<div className="bg-black rounded-2xl w-3/4 drop-shadow-lg ">


<Image
              className="p-10 shadow-3xl"
              src="/assets/pack_image.jpg"
              alt="Beast Collection"
              width={1500}
              height={1500}
            />

<h1 className="text-yellow-300  text-center text-xl font-Amethysta">KAOS MOON: Beast Packs</h1>


  
<div className="mt-5 mb-7 max-w-sm justify-items-center">

          
    </div>
   
   
    <div className='w-60 flex items-center justify-center m-auto pb-12'>
    <Web3Button 
        
         
          contractAddress="0x94B0E73c4328A53ccc2CdeDbEeB2aF625984Af90"
          action={(contract) => contract.erc20.claim(amountToClaim)}
          onSuccess={() => alert("Claimed!")}
          onError={(err) => alert(err)}
        >
          Claim NFT
        
          </Web3Button></div>
         </div>
              </div>
</div>
 
<div className="pb-12  justify-items-center">

<div className=" pt-14 m-auto  justify-center">
<h1 className=" text-yellow-100 text-2xl text-center  font-Roboto">
              Use your KAOS MOON NFTs for the following cool things:
            </h1></div>

      <div className="w-4/5 m-auto grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3 mt-10 sm:grid-cols-2">
        <div className="duration-300 transform bg-red-950/30 border-l-4 border-deep-purple-accent-900 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5 rounded-r shadow-sm">
            <h6 className="mb-2 leading-5 text-yellow-200 font-Acme">Earn rewards in the RPG</h6>
            <p className="text-sm text-white">
              Get rewards for missions and quests successfully accomplished in the Stargazer RPG and trade tokens for in-game NFTs.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-red-950/30 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5  rounded-r shadow-sm">
            <h6 className="mb-2  leading-5 text-yellow-200 font-Acme">Power up your Stargate</h6>
            <p className="text-sm text-white">
              Use the Stardust tokens to claim cosmic energy sources for your Stargate and get more STAR as a reward.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-red-950/30 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5  rounded-r shadow-sm">
            <h6 className="mb-2 leading-5 text-yellow-200 font-Acme">Vote for your stories
              
            </h6>
            <p className="text-sm text-white">
              Use the tokens to participate in the anime and webtoons and get rewarded for a story path well-chosen.
            </p>
            
          </div>
        </div>
        </div>
<div className="py-12 w-full justify-items-center mx-auto">

  <h1 className="text-lg text-center text-yellow-100 font-Jost py-2 font-semibold">NFT contract address on Polyscan:</h1>
            <p className="text-base text-center text-yellow-100 font-Jost px-2">
              Kaos Moon Collection: 0x94B0E73c4328A53ccc2CdeDbEeB2aF625984Af90
            </p>
            </div> 
      
 </div>
 
 </div>

      );
    };

 
  export default Shop;