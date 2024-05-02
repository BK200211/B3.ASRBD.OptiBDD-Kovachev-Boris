// pages/api/movies/[id].js

import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const idMovie = req.query.id;

  const client = await clientPromise;
  const db = client.db("sample_mflix");

  try {
    switch (req.method) {
      case "GET":
        // Recherche d'un film unique par son identifiant
        const movie = await db.collection("movies").findOne({ _id: new ObjectId(idMovie) });
        res.status(200).json({ status: 200, data: movie });
        break;
      
      case "POST":
        // Création d'un nouveau film avec les données reçues
        const newMovie = req.body;
        const result = await db.collection("movies").insertOne(newMovie);
        res.status(201).json({ status: 201, data: result.ops[0] });
        break;

      case "PUT":
        // Mise à jour d'un film existant avec les nouvelles données reçues
        const updatedParams = req.body;
        await db.collection("movies").updateOne({ _id: new ObjectId(idMovie) }, { $set: updatedParams });
        res.status(200).json({ status: 200, msg: "Film mis à jour avec succès!" });
        break;

      case "DELETE":
        // Suppression d'un film par son identifiant
        await db.collection("movies").deleteOne({ _id: new ObjectId(idMovie) });
        res.status(204).end();
        break;

      default:
        res.status(400).json({ status: 400, msg: "Méthode non trouvée" });
        break;
    }
  } catch (error) {
    console.error("Error processing movie request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
