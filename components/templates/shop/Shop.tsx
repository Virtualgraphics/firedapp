import type { NextPage } from "next";

import {
  MediaRenderer,
  useActiveClaimConditionForWallet,
  useAddress,
  useClaimConditions,
  useClaimedNFTSupply,
  useClaimerProofs,
  useClaimIneligibilityReasons,
  useContract,
  useContractMetadata,
  useUnclaimedNFTSupply,
  Web3Button,
  useNFTs,
} from "@thirdweb-dev/react";
import { MONSTERS_ADDRESS } from "../../../const/addresses";
import { NFT } from "@thirdweb-dev/sdk";
import { BigNumber, utils } from "ethers";
import { useState } from "react";
import { FC, useEffect } from 'react';
import { ethers } from "ethers";
import Image from 'next/image';
import { useRouter } from "next/router";
import React from 'react';
import MonsterNFT from "../games/MonsterNFT";


import Link from "next/link";
const myNftDropContractAddress = "0xD671735b14ddb2DA84433bf291f00355de068992";

const NFTMint = () => {

const { contract: nftDrop } = useContract(myNftDropContractAddress);
const address = useAddress();
const [quantity, setQuantity] = useState(1);
const { data: contractMetadata } = useContractMetadata(nftDrop);
const claimConditions = useClaimConditions(nftDrop);

const { contract } = useContract(MONSTERS_ADDRESS);
    const { data: nfts } = useNFTs(contract);
    console.log(nfts);

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
            <p className="text-base font-semibold tracking-wide text-yellow-200 lg:text-2xl  md:text-lg sm:px-4 py-4 font-Acme">
           Mint the haunting and beautiful Beast Cards for the KAOS MOON Game. Fully animated cards will be available after the mint. 
            </p>




<div className="justify-center mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 ">
    

        
       

        <div className="text-base text-white lg:text-lg md:text-lg sm:px-4 pt-6 font-Jost">
       You can see your animated cards immediately after the mint.
       <Link href=" https://opensea.io/collection/kaos-moon-into-the-burning-circle"><button className="bg-black p-6 text-white hover:text-yellow-100 rounded-xl my-7">View on Opensea</button></Link>
        </div>
        </div>
        </div>
        <div className="text-yellow-100 text-center text-xl">Each card has a max supply of 75 and you can claim up to 5 NFTs per wallet </div>

            {!nfts ? (
                <div className="flex justify-center mx-auto p-24 ">
                    
                </div>
            ) : (
                <div className="grid grid-cols-3 gap-4 ">
                    {nfts?.map((nftItem) => (
                        <MonsterNFT
                            key={nftItem.metadata.id}
                            nft={nftItem}
                        />
                    ))}
                </div>
            )}


<div className="pb-12  justify-items-center">

<div className=" pt-14 m-auto  justify-center">
<h1 className=" text-yellow-100 text-2xl text-center  font-Jost">
              Use your KAOS MOON NFTs for the following cool things:
            </h1></div>

      <div className="w-4/5 m-auto grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3 mt-10 sm:grid-cols-2">
        <div className="duration-300 transform bg-red-950/30 border-l-4 border-deep-purple-accent-900 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5 rounded-r shadow-sm">
            <h6 className="mb-2 leading-5 text-yellow-200 font-Jost">Earn rewards in the TCG</h6>
            <p className="text-sm text-white">
              Get rewards for missions and quests successfully accomplished in Into the Burning Circle TCG and trade tokens for in-game NFTs.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-red-950/30 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5  rounded-r shadow-sm">
            <h6 className="mb-2  leading-5 text-yellow-200 font-Jost">Boost Rituals and Spells</h6>
            <p className="text-sm text-white">
              Use various totems to powers up your rituals and spells and earn $KAOS tokens in the Ritual DeFi game.</p>
          </div>
        </div>
        <div className="duration-300 transform bg-red-950/30 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5  rounded-r shadow-sm">
            <h6 className="mb-2 leading-5 text-yellow-200 font-Jost">Win reward NFTs
              
            </h6>
            <p className="text-sm text-white">
              Use the NFTs and tokens to participate in the anime and webtoons and get rewarded for being part of the community.
            </p>
            
          </div>
        </div>
        </div>
<div className="py-12 w-full justify-items-center mx-auto">

  <h1 className="text-lg text-center text-white font-Jost py-2">Contract Addresse on Polyscan:</h1>
           
            <p className="text-sm text-center text-white font-Jost py-2">
              KAOS MOON NFTs (ERC-1155): 0xA7582949C41E7F2712767e04f115DfCF7EfFC69A
            </p></div> 
      </div>
 </div>
 


  );
};


export default NFTMint;