const Jobs = () => {
  return (
    <div className=" relative p-8 max-w-screen-lg m-auto flex flex-col items-center" id="jobOffers">
      <h3 className="uppercase font-bold text-gray-600 text-xl py-8">VAGAS EM ABERTO</h3>
      <div className="w-full">
        <h4 className="uppercase font-bold text-gray-600 text-xl py-8 text-left ">Desenvolvimento</h4>
        <ul>
          <li>
            <a className="flex flex-col md:flex-row justify-between pb-4 lg:pb-2 cursor-pointer" target="_blank">
              <div className="font-bold text-secondary text-lg">Desenvolvedor Mobile Senior (Android e iOS)</div>
              <div className="font-bold text-gray-600 text-sm lg:text-lg">Vila Olimpia - São Paulo, Brasil</div>
            </a>
          </li>
          <li>
            <a className="flex flex-col md:flex-row justify-between py-2 cursor-pointer" target="_blank">
              <div className="font-bold text-secondary text-lg">Desenvolvedor Mobile Senior (Android e iOS)</div>
              <div className="font-bold text-gray-600  text-sm lg:text-lg">Vila Olimpia - São Paulo, Brasil</div>
            </a>
          </li>
          <li>
            <a className="flex flex-col md:flex-row justify-between py-2 cursor-pointer" target="_blank">
              <div className="font-bold text-secondary text-lg">Desenvolvedor Mobile Senior (Android e iOS)</div>
              <div className="font-bold text-gray-600  text-sm lg:text-lg">Vila Olimpia - São Paulo, Brasil</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Jobs;
