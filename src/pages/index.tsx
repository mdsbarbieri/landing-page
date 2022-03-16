import MainHero from '../components/hero/MainHero';
import { MetaTags } from '../global/MetaTags';
import HeroTeam from '../components/hero/HeroTeam';
import Offers from '../components/hero/Offers';
import Jobs from '../components/jobs/Jobs';

const Home = () => {
  return (
    <>
      <MetaTags title="Elo7 - Trabalhe Conosco" description="Trabalhe no Elo7" />
      <MainHero />
      <HeroTeam />
      <Offers />
      <Jobs />
    </>
  );
};

export default Home;
