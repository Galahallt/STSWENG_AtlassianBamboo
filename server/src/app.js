// modules
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import connectDatabase from './config/connectDB.js';
import logger from './logger/index.js';

// routes
import indexRoutes from './routes/index_routes.js';
import instructorRoutes from './routes/instructor_routes.js';

import adminRoutes from './routes/admin_routes.js';
// connect to Profs to Pick database
connectDatabase();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ['http://localhost:3000', 'https://localhost:3000'],
    credentials: true,
  })
);

app.use(
  morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'combined', {
    stream: {
      write: (message) => {
        if (process.env.NODE_ENV === 'development') {
          logger.info(message);
        }
        logger.http(message);
      },
    },
  })
);

// routes implementation
app.use('/', indexRoutes);
app.use('/professor', instructorRoutes);
app.use('/admin', adminRoutes);


export default app;
