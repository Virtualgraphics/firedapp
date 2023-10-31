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
            <p className="text-base font-semibold tracking-wide text-yellow-200 lg:text-2xl  md:text-lg sm:px-4 py-8 font-Acme">
           Play the KAOS MOON Ritual Defi and the Card games and earn rewards. 
            </p>




<div className="justify-center mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:pt-10">
    

        
       

        <p className="text-base text-white lg:text-lg md:text-lg sm:px-4 pt-6 font-Jost">
       Purchase MONSTER HUNT NFTs with $BLOOD to boost your Vampires power and gain more $BLOOD. 
        </p>
        </div>
        </div>

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
              Use your IMMORTAL COIL tokens for the following cool things:
            </h1></div>

      <div className="w-4/5 m-auto grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3 mt-10 sm:grid-cols-2">
        <div className="duration-300 transform bg-red-950/30 border-l-4 border-deep-purple-accent-900 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5 rounded-r shadow-sm">
            <h6 className="mb-2 leading-5 text-yellow-200 font-Jost">Earn rewards in the RPG</h6>
            <p className="text-sm text-white">
              Get rewards for missions and quests successfully accomplished in the Memento Mori RPG and trade tokens for in-game NFTs.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-red-950/30 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5  rounded-r shadow-sm">
            <h6 className="mb-2  leading-5 text-yellow-200 font-Jost">Boost your Vampire</h6>
            <p className="text-sm text-white">
              Use various monsters to boost the powers of your vampire and earn $BLOOD tokens in the BLoodhunt DeFi game.</p>
          </div>
        </div>
        <div className="duration-300 transform bg-red-950/30 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5  rounded-r shadow-sm">
            <h6 className="mb-2 leading-5 text-yellow-200 font-Jost">Win reward NFTs
              
            </h6>
            <p className="text-sm text-white">
              Use the tokens to participate in the anime and webtoons and get rewarded for each correctly answered question.
            </p>
            
          </div>
        </div>
        </div>
<div className="py-12 w-full justify-items-center mx-auto">

  <h1 className="text-lg text-center text-white font-Jost py-2">Contract Addresses on Bscscan:</h1>
            <p className="text-sm text-center text-white font-Jost px-2">
             Founders Edition NFTs: 0xD671735b14ddb2DA84433bf291f00355de068992
            </p>
            <p className="text-sm text-center text-white font-Jost py-2">
              Monster NFTs: 0x7623dCee1c3De24129CC15a8398F7d8731bDAccB
            </p></div> 
      </div>
 </div>
 


  );
};


export default NFTMint;