import Redis from 'ioredis';

const { REDIS__HOST, REDIS__PORT, REDIS__PASS } = process.env;

const redis = new Redis({
  host: REDIS__HOST ?? '127.0.0.1',
  port: REDIS__PORT ? Number(REDIS__PORT) : 6379,
  password: REDIS__PASS ?? '',
  db: 1
});

export default redis;
