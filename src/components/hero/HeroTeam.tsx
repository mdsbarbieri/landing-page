import Image from 'next/image';
import VideoPlaceholder from '../../assets/images/placeholder-video.png';
import CamilaPicture from '../../assets/images/camila.png';
import GutoPicture from '../../assets/images/guto.png';
import DavidPicture from '../../assets/images/david.png';
import BeatrizPicture from '../../assets/images/beatriz.png';

const HeroTeam = () => {
  return (
    <div className="flex items-center flex-col bg-gray-100 p-8 lg:p-14">
      <div className="max-w-screen-lg m-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 space-y-8 lg:space-x-8 lg:space-y-0">
          <div className="h-full aspect-video relative">
            <Image src={VideoPlaceholder} alt="Foto de perfil" layout="fill" quality={100} />
          </div>
          <div>
            <h2 className="uppercase font-bold text-gray-600 text-xl">Palavra do CEO</h2>
            <h3 className="italic text-primary  text-xl">Carlos Curioni</h3>
            <p className="text-gray-600 pt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis, dui sed maximus lobortis, arcu
              lorem finibus enim, quis tincidunt quam leo ut sapien. Fusce nec lacus ex. Maecenas interdum erat sem,
              quis ultrices erat tincidunt ac.
            </p>
          </div>
        </div>
        <div className=" w-full">
          <h2 className="py-8 uppercase font-bold text-gray-600 text-xl text-center">
            Conheça nosso time <br /> fora de Série
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
            <Image
              src={CamilaPicture}
              alt="Foto de perfil Camila"
              width="220"
              height="220"
              objectFit="contain"
              quality={100}
            />
            <Image
              src={GutoPicture}
              alt="Foto de perfil Guto"
              width="220"
              height="220"
              objectFit="contain"
              quality={100}
            />
            <Image
              src={DavidPicture}
              alt="Foto de perfil David"
              width="220"
              height="220"
              objectFit="contain"
              quality={100}
            />
            <Image
              src={BeatrizPicture}
              alt="Foto de perfil Beatriz"
              width="220"
              height="220"
              objectFit="contain"
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTeam;
