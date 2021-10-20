import express, { Request, Response, NextFunction } from 'express';

import userRoutes from './db/routes/user.route';

const app = express();

app.use(express.json())

app.use('/users', userRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message });
});

app.listen(3000, () => {
    console.log('Ready to go!');
});