import express from 'express';
import dotenv from 'dotenv';
import main from './main.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', async (req, res) => {
    res.send(await main.runIt());
});

app.listen(PORT, () => {
    console.log(`App running on http://localhost:8080`)
});
