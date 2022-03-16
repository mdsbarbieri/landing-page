import Image from 'next/image';
import Link from '../../fragments/link/Link';
import Qualidade from '../../assets/images/qualidade.png';
import Descontracao from '../../assets/images/descontracao.png';
import AtividadesExtras from '../../assets/images/atividades.png';
import BottomPicture from '../../assets/images/foto-bottom.png';

const activities = [
  {
    title: 'Qualidade de vida',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis, dui sed maximus lobortis, arcu lorem finibus enim, quis tincidunt quam leo ut sapien.',
    image: Qualidade,
  },
  {
    title: 'Ambiente Descontraído',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis, dui sed maximus lobortis, arcu lorem finibus enim, quis tincidunt quam leo ut sapien. Fusce nec lacus ex. Maecenas interdum erat sem, quis ultrices erat tincidunt ac.',
    image: Descontracao,
  },
  {
    title: 'Atividades Extras',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis, dui sed maximus lobortis, arcu lorem finibus enim, quis tincidunt quam leo ut sapien. Fusce nec lacus ex.',
    image: AtividadesExtras,
  },
];

const Offers = () => {
  return (
    <div className=" relative py-14 p-8 max-w-screen-lg m-auto flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-14">
        {activities.map(({ title, description, image }) => (
          <div key={title} className="flex flex-col items-center justify-center">
            <Image src={image} alt={title} width="150" height="150" quality={100} />
            <h3 className="uppercase font-bold text-gray-600 text-xl py-8 flex-shrink">{title}</h3>
            <p className="text-gray-600 text-justify flex-grow">{description}</p>
          </div>
        ))}
      </div>
      <Link href="/atividades" text="Saiba mais" />
      <div className="relative h-72 w-full">
        <Image
          src={BottomPicture}
          alt="Feira de artesanatos promovida pela Elo7"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
    </div>
  );
};

export default Offers;
