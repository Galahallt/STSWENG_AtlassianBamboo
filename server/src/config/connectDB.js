import mongoose from 'mongoose';
import logger from '../logger/index.js';
import dotenv from 'dotenv-safe';
import mockDB from './mockDB.js';

dotenv.config();

const connectDB = async () => {
  try {
    // add the line below when running unit tests
    // process.env.NODE_ENV = 'test';
    if (process.env.NODE_ENV !== 'test') {
      const conn = await mongoose.connect(process.env.MONGO_URI);
      logger.info(`DB Connected: ${conn.connection.host}`);
    } else {
      mockDB.connect();
    }
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
};

export default connectDB;
