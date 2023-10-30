import { ThirdwebSDK } from "@thirdweb-dev/sdk"

import dotenv from "dotenv";
dotenv.config();

(async () => {
    const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "mumbai");

    const packAddress = "0xe9648D67d73Cd6c6B606997A57D4d8Bb4d298Bc4";
    const cardAddress = "0xe9648D67d73Cd6c6B606997A57D4d8Bb4d298Bc4";

    const pack = sdk.getContract(packAddress, "pack");

    const card = sdk.getContract(cardAddress, "edition");
    await (await card).setApprovalForAll(packAddress, true);
    console.log("Approved card contract to transfer cards to pack contract");

    const packImage = "https://amaranth-chemical-skink-289.mypinata.cloud/ipfs/QmZw5z6isbZjFf2n7Qt7TowKjaujEu9HdJKPP8QHnkF1bq?_gl=1*1xmfp8k*_ga*OTg1NTIzODQzLjE2OTg1OTMzODA.*_ga_5RMPXG14TE*MTY5ODY4NDEyOS40LjEuMTY5ODY4NTc1My42MC4wLjA.";

    console.log("Creating pack");
    const createPacks = (await pack).create({
        packMetadata: {
            name: "Beast Pack",
            description: "KAOS MOON: Halloween 2023 Beast Collection packs.",
            image: packImage,
        },
        erc1155Rewards: [
            {
                contractAddress: cardAddress,
                tokenId: 0,
                quantityPerReward: 1,
                totalRewards: 90,
            },
            {
                contractAddress: cardAddress,
                tokenId: 1,
                quantityPerReward: 1,
                totalRewards: 90,
            },
            {
                contractAddress: cardAddress,
                tokenId: 2,
                quantityPerReward: 1,
                totalRewards: 90,
            },
            {
                contractAddress: cardAddress,
                tokenId: 3,
                quantityPerReward: 1,
                totalRewards: 80,
            },
            {
                contractAddress: cardAddress,
                tokenId: 4,
                quantityPerReward: 1,
                totalRewards: 80,
            },

            {
                contractAddress: cardAddress,
                tokenId: 5,
                quantityPerReward: 1,
                totalRewards: 20,
            },

        ],
        rewardsPerPack: 1,
    });

    console.log("Packs created");
})();