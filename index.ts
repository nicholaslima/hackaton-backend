

import express from 'express';
import cors from 'cors';
import Routes from './src/routes/index';

const app = express();

app.use(cors());
app.use(Routes);

app.listen(3333,() => {
    console.log('server is running');
});


