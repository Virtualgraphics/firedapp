
import { Default } from '../components/layouts/Default';

import type { NextPage } from 'next';
import { Shop } from '../components/templates/shop';

const NFTMINT: NextPage = () => {
  return (
    <Default pageName="NFT Mint">

      <Shop/>

    </Default>
  );
};

export default NFTMINT