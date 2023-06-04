import cors from 'cors';
import express from 'express';
import { router } from './routes';

require('dotenv').config();


const server = express();
const port = process.env.PORT || 3000;

server.use(cors({ origin: '*' }));
server.use(express.json());
server.use(router);

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export default server;