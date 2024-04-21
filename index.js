import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import callbackRoutes from './routes/callbackRoutes.js';
import depositRoutes from './routes/depositRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/example', depositRoutes);
app.use('/api/example', callbackRoutes);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
