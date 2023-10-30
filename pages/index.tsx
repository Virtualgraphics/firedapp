import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Default } from '../components/layouts/Default';
import { Home } from '../components/templates/home';



const HomePage: NextPage = () => {
  return (
  
    
    <Default pageName="SAVAGE VARAN SOCIETY">

    <Home />
  

    </Default>
  



  );
};


export default HomePage;
