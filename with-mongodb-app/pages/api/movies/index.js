// pages/api/movies/index.js

import clientPromise from "../../../lib/mongodb";

// Fonction principale pour gérer les requêtes et les réponses
export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("sample_mflix");

  try {
    // Recherche de tous les films dans la collection "movies"
    const movies = await db.collection("movies").find({}).toArray();
    res.status(200).json({ status: 200, data: movies });
  } catch (error) {
    console.error("Error fetching movies:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
