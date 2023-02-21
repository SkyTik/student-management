import { MongoClient } from 'mongodb';

const url = process.env.MONGODB_URL ?? '';
const client = new MongoClient(url, { maxPoolSize: 10 });

async function createConnection(databaseName: string, collectionName: string) {
  const cl = await client.connect();
  const db = cl.db(databaseName);
  return db.collection(collectionName);
}

export default createConnection;
