// modules
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import connectDatabase from './config/connectDB.js';
import logger from './logger/index.js';

// routes
import indexRoutes from './routes/index_routes.js';
import instructorRoutes from './routes/instructor_routes.js';
import rateRoutes from './routes/rate_routes.js';
import adminRoutes from './routes/admin_routes.js';
import reviewRoutes from './routes/review_routes.js';
import userRoutes from './routes/user_routes.js';

// connect to Profs to Pick database
connectDatabase();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ['https://profs-to-pick.netlify.app'],
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
app.use('/rating', rateRoutes);
app.use('/review', reviewRoutes);
app.use('/user', userRoutes);
export default app;
