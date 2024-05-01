// pages/api/movies.js
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  try {
    // Connexion à la base de données MongoDB
    const client = await clientPromise;
    const db = client.db("sample_mflix");

    // Récupération de tous les films depuis la collection 'movies'
    const movies = await db.collection("movies").find({}).toArray();

    // Renvoyer les films au format JSON avec un code de statut 200
    res.status(200).json({ status: 200, data: movies });
  } catch (error) {
    // En cas d'erreur, renvoyer une réponse d'erreur avec un code de statut 500
    console.error("Error fetching movies:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
