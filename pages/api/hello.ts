import { NextApiRequest, NextApiResponse } from 'next';

const helloApi = (request: NextApiRequest, response: NextApiResponse) => {
  const { t } = request.query;

  return response.send({ t });
};

export default helloApi;
