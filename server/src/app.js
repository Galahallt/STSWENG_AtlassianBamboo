// modules
const express =  require('express');
const morgan = require('morgan');
const cors = require('cors');
const connectDatabase = require('./config/connectDB.js');

// routes
const indexRoutes = require('./routes/index_routes.js');

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

module.exports = app;