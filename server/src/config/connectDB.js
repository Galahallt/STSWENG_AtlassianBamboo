const mongoose = require('mongoose');
const logger = require('../logger/index.js');
const dotenv = require('dotenv-safe');

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    logger.info(`DB Connected: ${conn.connection.host}`);
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;