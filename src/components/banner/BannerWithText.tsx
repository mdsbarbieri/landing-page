import Image from 'next/image';
import headerImage from '../../assets/images/foto-header.png';

const BannerWithText = () => {
  return (
    <div className="relative h-64 md:h-96 lg:h-[650px] overflow-hidden flex items-end justify-center">
      <Image
        className="-z-10"
        src={headerImage}
        alt="Pessoas do time elo7 vestindo camisetas amarelas e calças verdes com as mãos levantadas"
        layout="fill"
        objectFit="cover"
      />
      <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-24 lg:mb-36 text-shadow">
        Trabalhe no Elo7
      </h1>
    </div>
  );
};

export default BannerWithText;
