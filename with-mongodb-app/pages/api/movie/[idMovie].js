// Fichier 'api/movies/[idMovie].js'

import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const idMovie = req.query.idMovie;

  const client = await clientPromise;
  const db = client.db("sample_mflix");

  try {
    switch (req.method) {
      case "DELETE":
        await db.collection("movies").deleteOne({ _id: new ObjectId(idMovie) });
        res.json({ status: 204, msg: "Film supprimé!" });
        break;

      case "PUT":
        const bodyParams = req.body;
        await db.collection("movies").updateOne(
          { _id : new ObjectId(idMovie) },
          { $set: bodyParams }
        );
        res.json({ status: 200, msg: "Film mis à jour avec succès!" });
        break;

      case "POST":
        const newMovie = req.body;
        const dbReturn = await db.collection("movies").insertOne(newMovie);
        const insertedMovie = await db.collection("movies").findOne({ _id : new ObjectId(dbReturn.insertedId)});
        res.json({ status: 200, data: insertedMovie });
        break;

      case "GET":
        const movie = await db.collection("movies").findOne({ _id : new ObjectId(idMovie) });
        res.json({ status: 200, data: movie });
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
