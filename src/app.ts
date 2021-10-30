import dotenv from 'dotenv';
import express from 'express';
dotenv.config();
import { swaggerRoute } from './routes/doc.routes';
import {userRoutes} from './routes/user.route'
import {hobbyRoutes} from './routes/hobby.route'
const app = express();

app.use(express.json({limit:'2mb'}))
app.get('/', (req, res) => {
    res.send('Hi there wellcome to arive e-commerce!!');
});
// API Routes
app.use('/api/v1', userRoutes);
app.use('/api/v1', hobbyRoutes);
app.use('/api/docs', swaggerRoute);
export default app;
