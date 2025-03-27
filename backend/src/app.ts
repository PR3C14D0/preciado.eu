import 'dotenv/config'
import express from 'express';
const app = express();

import api from './routers/api.router';
import './database';

import cors from 'cors';

const port = process.env.PORT;

app.set('port', port);
app.use(express.json());

app.use(cors({origin: process.env.CORS_ADDR}))

app.use('/api', api);

app.use((req: any, res: any, next: any) => {
    res.status(404).json({message: 'Not found', code: 404});
})

app.listen(app.get('port'), () => {
    console.log('Listening on port', app.get('port'));
})