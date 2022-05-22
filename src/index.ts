import { config } from 'dotenv';
config();
import express from 'express';
import logger from './utils/logger';

async function main() {
  const app = express();
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );

  app.get('/echo', async (req, res) => {
    const { param = '' } = req.query;
    if (!param) {
      return res.status(400).json({
        error: 'empty_params',
      });
    }

    logger.info(param);
    return res.json({ echo: param });
  });

  app.post('/info', async (req, res) => {
    const { message = '', app = '' } = req.body;
    if (!message) {
      return res.status(400).json({
        error: 'empty_params',
      });
    }

    logger.info(message, { app: app });
    return res.json({ info: message });
  });

  app.post('/error', async (req, res) => {
    const { message = '', app = '' } = req.body;
    if (!message) {
      return res.status(400).json({
        error: 'empty_params',
      });
    }

    logger.error(message, { app: app });
    return res.json({ error: message });
  });

  app.post('/warn', async (req, res) => {
    const { message = '', app = '' } = req.body;
    if (!message) {
      return res.status(400).json({
        error: 'empty_params',
      });
    }

    logger.warn(message, { app: app });
    return res.json({ warn: message });
  });

  app.listen(4010, () => {
    console.log('App start at port 4010');
  });
}

main();
