import type { NextApiRequest, NextApiResponse } from 'next';
import { JobsErrorResponse, JobResponse } from '../../backend/jobs/Jobs';
import { JobsManager } from '../../backend/jobs/JobsManager';

const jobManager = new JobsManager();
const handler = async (req: NextApiRequest, res: NextApiResponse<JobResponse | JobsErrorResponse>) => {
  try {
    const data = await jobManager.fetchAll();
    res.status(200).json(data);
  } catch (e) {
    res.status(422).json({ message: 'Error fetching jobs' });
  }
};

export default handler;
