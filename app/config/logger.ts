import pino from 'pino';

const logger = pino({ timestamp: false, base: undefined });

export default logger;
