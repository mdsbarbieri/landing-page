import MainHero from '../components/hero/MainHero';
import { MetaTags } from '../global/MetaTags';

const Home = () => {
  return (
    <>
      <MetaTags title="Mdsbarbieri" description="Mdsbarbieri" />
      <MainHero />
    </>
  );
};

export default Home;
