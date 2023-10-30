
import { Games } from '../components/templates/games';
import type { NextPage } from 'next';
import { Default } from '../components/layouts/Default';

const GAMES: NextPage = () => {
  return (

    <Default pageName="GAMES">
    <Games/>
  </Default>
  
  );
};

export default GAMES;
