import { MongoClient, ServerApiVersion } from "mongodb";

// Vérifie la présence de la variable d'environnement MONGODB_URI
if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Vérifie le mode d'exécution (développement ou production)
if (process.env.NODE_ENV === "development") {
  // En mode développement, utilise une variable globale pour conserver la connexion
  // et éviter de recréer le client MongoDB à chaque rechargement de module.
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // En mode production, crée simplement une nouvelle instance de client et connecte.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Exporte la promesse du MongoClient au niveau du module.
// Cette promesse peut être partagée et réutilisée dans d'autres parties de l'application.
export default clientPromise;
