import BannerWithText from '../components/banner/BannerWithText';
import { MetaTags } from '../global/MetaTags';

const Home = () => {
  return (
    <>
      <MetaTags title="Elo7 - Trabalhe Conosco" description="Trabalhe no Elo7" />
      <BannerWithText />
    </>
  );
};

export default Home;
