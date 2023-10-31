
import { 
    
    MediaRenderer, 
    Web3Button, 
    useActiveClaimCondition, 
    useContract 
} from "@thirdweb-dev/react";

import { NFT } from "@thirdweb-dev/sdk";
import { MONSTERS_ADDRESS } from "../../../const/addresses";
import { ethers } from "ethers";
import { useState } from "react";

type Props = {
    nft: NFT;
};

function MonsterNFT({ nft }: Props) {
    const { contract } = useContract(MONSTERS_ADDRESS);
    const { data, isLoading } = useActiveClaimCondition(
        contract,
        nft.metadata.id, // Token ID required for ERC1155 contracts here.
      );

      const [claimQuantity, setClaimQuantity] = useState(1);
  const increment = () => {
    if (claimQuantity < claimQuantity) {
      setClaimQuantity(claimQuantity + 1);
    }
  };
  const decrement = () => {
    if (claimQuantity > 1) {
      setClaimQuantity(claimQuantity - 1);
    }
  };

    return (

        <div key={nft.metadata.id} className='mx-auto justify-items-center py-12'>
            <div className="rounded-3xl ">
            <MediaRenderer 
                src={nft.metadata.image}
                height="100%"
                width="100%"
        
            /></div>
            <div className=" text-yellow-100 text-2xl text-bold  text-center  pt-4 ">{nft.metadata.name}</div>
            {!isLoading && data ? (
                <div className="text-white text-center py-2">Cost: {ethers.utils.formatEther(data?.price)}{" " + data?.currencyMetadata.symbol}</div>
            ) :(
                <div className='text-xl text-white'>Loading...</div>
            )}

<div className="py-4 flex items-center justify-center m-auto rounded-2xl border-none">


<Web3Button
                        contractAddress={MONSTERS_ADDRESS}
                        action={(contract) => contract.erc1155.claim(nft.metadata.id, 1)}
                     
                        onSuccess={() => {
                          
                          alert("Successfully claimed NFTs");
                        }}
                      >
                       Buy now
                      </Web3Button>
</div>

        </div>
    )
};

export default MonsterNFT