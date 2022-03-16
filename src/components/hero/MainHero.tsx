import Image from 'next/image';
import headerImage from '../../assets/images/foto-header.png';
import Link from '../../fragments/link/Link';

const MainHero = () => {
  return (
    <div className="flex items-center flex-col">
      <div className="relative h-64 md:h-96 lg:h-[650px] overflow-hidden flex items-end justify-center w-full">
        <Image
          className="-z-10"
          src={headerImage}
          alt="Pessoas do time elo7 vestindo camisetas amarelas e calças verdes com as mãos levantadas"
          layout="fill"
          quality={100}
          objectFit="cover"
        />
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-24 lg:mb-36 text-shadow">
          Trabalhe no Elo7
        </h1>
      </div>
      <p className="text-gray-500 text-center px-8 lg:px-0 py-8 max-w-screen-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis, dui sed maximus lobortis, arcu lorem
        finibus enim, quis tincidunt quam leo ut sapien. Fusce nec lacus ex. Maecenas interdum erat sem, quis ultrices
        erat tincidunt ac.
      </p>
      <Link href="#jobOffers" text="Vagas em aberto" />
    </div>
  );
};

export default MainHero;
