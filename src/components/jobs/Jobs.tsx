import useSWR from 'swr';
import { useMemo } from 'react';
import { Job } from '../../backend/jobs/Jobs';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Jobs = () => {
  const { data, error } = useSWR('/api/jobs', fetcher);

  const jobs = useMemo(() => {
    if (error) {
      return <li>Não há vagas em aberto</li>;
    }
    if (!data) {
      return <div>Loading...</div>;
    }

    return data.map((job: Job) => (
      <li key={job.cargo}>
        <a
          className="flex flex-col md:flex-row justify-between pb-4 lg:pb-2 cursor-pointer"
          target="_blank"
          rel="noreferrer"
          href={job.link}
        >
          <div className="font-bold text-secondary text-lg">{job.cargo}</div>
          <div className="font-bold text-gray-600 text-sm lg:text-lg">
            {job.localizacao
              ? `${job.localizacao.bairro} - ${job.localizacao.cidade}, ${job.localizacao.pais}`
              : 'Remoto'}
          </div>
        </a>
      </li>
    ));
  }, [data, error]);

  return (
    <div className=" relative p-8 max-w-screen-lg m-auto flex flex-col items-center" id="jobOffers">
      <h3 className="uppercase font-bold text-gray-600 text-xl py-8">VAGAS EM ABERTO</h3>
      <div className="w-full">
        <h4 className="uppercase font-bold text-gray-600 text-xl py-8 text-left ">Desenvolvimento</h4>
        <ul>{jobs}</ul>
      </div>
    </div>
  );
};

export default Jobs;
