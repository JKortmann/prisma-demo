import express from 'express';
import dotnev from 'dotenv';
import { carRouter } from './routers/car.router';

dotnev.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});

app.use('/car', carRouter);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
