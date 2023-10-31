import Image from 'next/image'
import Link from 'next/link'

const GameCard = () => {

    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl sm:py-5 md:max-w-full lg:w-full md:px-24 lg:px-8 lg:py-10">
        <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
          <div className="transition duration-300 transform bg-black/10 rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
            <div className="relative">
            <Image
              className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
              src="/assets/game_image02.jpg"
              alt="Immortal Coil Defi"
              width={1260}
              height={750}
            />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-25" />
            </div>
            <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
            <h5 className="text-yellow-100 mb-2 text-xl leading-none sm:text-xl font-Amethysta">
              RITUAL DEFI GAME
              </h5>
              <p className="mb-5 text-white text-lg font-Jost">
              Use various magical item to boost the power of your rituals, spells and earn $KAOS tokens in the Ritual DefI game.

              </p>

             
              <div className=" flex items-center justify-center py-4">
            
            <button className="bg-red-950 hover:bg-black text-yellow-100  w-40 h-12 px-4 rounded  text-xl text-Jost">
Coming soon
</button></div>
            

            </div>
          </div>
          <div className="transition duration-300 transform bg-black/10 rounded-lg shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
            <div className="relative">
            <Image
              className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
              src="/assets/game_image01.jpg"
              alt="Immortal Coil RPG"
              width={1260}
              height={750}
            />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-25" />
            </div>
            <div className="px-6 py-8 border border-t-0 rounded-b-lg sm:px-8">
              <h5 className="text-yellow-100 mb-2 text-xl leading-none sm:text-xl font-Amethysta">
              TRADING GARD GAME
              </h5>
              <p className="mb-5 text-white text-lg font-Jost">
              Battle monster and mythological creatures in the Kaos Moons trading card game with RPG elements.
              </p>
             
              <div className=" flex items-center justify-center py-4">
            
            <button className="bg-red-950 hover:bg-black text-yellow-100  w-40 h-12 px-4 rounded  text-xl text-Jost">
 Coming soon
</button></div>
            
            </div>
          </div>
        </div>
      </div>
    );
  };

export default GameCard;