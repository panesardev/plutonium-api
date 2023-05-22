import express from 'express';
import cors from 'cors';
import { featuredArticle } from './routes/featured-article';

require('dotenv').config();


const server = express();
const port = process.env.PORT || 3000;

server.use(cors());
server.use(express.json());


// routes
server.get('/', (req, res) => res.json({ app: 'Plutonium API' }));
server.get('/featured-article', featuredArticle);


server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export default server;