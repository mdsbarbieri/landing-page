import Image from 'next/image';
import headerImage from '../../assets/images/foto-header.png';
import Link from '../../fragments/link/Link';

const MainHero = () => {
  return (
    <div className="flex items-center flex-col">
      <div className="relative h-64 md:h-96 lg:h-[650px] overflow-hidden flex items-end justify-center w-full">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-24 lg:mb-36 text-shadow">Hello World!</h1>
      </div>
      <p className="text-gray-500 text-center px-8 lg:px-0 py-8 max-w-screen-lg">Nice text</p>
      <Link href="#jobOffers" text="Vagas em aberto" />
    </div>
  );
};

export default MainHero;
