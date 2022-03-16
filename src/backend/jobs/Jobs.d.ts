export type JobsErrorResponse = {
  message: string;
};

export type JobResponse = {
  vagas: Job[];
};

export type Job = {
  cargo: string;
  ativa: boolean;
  link: string;
  localizacao: Address;
};

export type Address = {
  bairro: string;
  cidade: string;
  pais: string;
};
