import express from 'express';
import cors from 'cors';

require('dotenv').config();


const server = express();

server.use(cors());
server.use(express.json());

const port = process.env.PORT || 3000;

server.get('/', (req, res) => {
  res.json({
    message: 'Hello world',
  });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export default server;