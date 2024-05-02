// pages/api/movies/comments.js

// Importation des dépendances nécessaires
import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

// Fonction principale pour gérer les requêtes et les réponses
export default async function handler(req, res) {
  const idMovie = req.query.idMovie;

  // Connexion à la base de données MongoDB
  const client = await clientPromise;
  const db = client.db("sample_mflix");

  try {
    const comments = await db.collection("comments").find({
      $or: [
        { _id: new ObjectId(idMovie) },
        { movie_id: idMovie }
      ]
    }).toArray();

    res.status(200).json({ status: 200, data: comments });
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
