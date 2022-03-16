import { Job, JobResponse } from './Jobs';

export class JobsManager {
  async fetchAll(): Promise<JobResponse> {
    const unparsedJobs = await fetch(`${process.env.JOBS_API_HOST}/5d6fb6b1310000f89166087b`);
    const jsonData = await unparsedJobs.json();
    if (!jsonData || !jsonData.vagas.length) {
      return { vagas: [] };
    }
    return jsonData.vagas.filter((item: Job) => item.ativa);
  }
}
