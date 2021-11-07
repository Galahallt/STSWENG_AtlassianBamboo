const buildDevLogger = require('./dev_logger.js');
const buildProdLogger = require('./prod_logger.js');

let logger = null;
const { NODE_ENV } = process.env;

if (NODE_ENV === 'development') {
  logger = buildDevLogger();
} else {
  logger = buildProdLogger();
}

module.exports = logger;
