// lib/mongodb.js

import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let cachedDb = null;

export async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  try {
    await client.connect();
    const db = client.db();
    cachedDb = db;
    return db;
  } catch (error) {
    console.error('ERREUR Connexion à MongoDB!!!', error);
    throw error;
  }
}

export default client;
