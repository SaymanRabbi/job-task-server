import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import databaseConnection from './config/database.js';
import { router } from './routes/routes.js';
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
const port= process.env.PORT || 5000;
// connect to database
databaseConnection();
// -----user Route------
app.use('/api', router);
// -----user Route------
// -----test Route------
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
// -----test Route------

// ----global route----
app.all("*", (req, res) => {
    res.send("404 not found")})
// ----global route----