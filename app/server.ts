import app from './app';
import logger from './config/logger';

const port = 8093;

app.listen(port, () => {
  logger.info(`Server is running on ${port}`);
});
