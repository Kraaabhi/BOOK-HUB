const app = require('./app');
const dotenv=require("dotenv");
const logger = require('winston');

dotenv.config({path:"config/config.env"})
const PORT = process.env.PORT ;
app.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}`);
});