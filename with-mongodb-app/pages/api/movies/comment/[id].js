// pages/api/movies/comment/[id].js

import clientPromise from "../../../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const idComment = req.query.id;

  const client = await clientPromise;
  const db = client.db("sample_mflix");

  try {
    switch (req.method) {
      case "GET":
        // Recherche d'un commentaire unique par son identifiant
        const comment = await db.collection("comments").findOne({ _id: new ObjectId(idComment) });
        res.status(200).json({ status: 200, data: comment });
        break;

      case "POST":
        // Création d'un nouveau commentaire avec les données reçues
        const newComment = req.body;
        const result = await db.collection("comments").insertOne(newComment);
        res.status(201).json({ status: 201, data: result.ops[0] });
        break;

      case "PUT":
        // Mise à jour d'un commentaire existant avec les nouvelles données reçues
        const updatedParams = req.body;
        await db.collection("comments").updateOne({ _id: new ObjectId(idComment) }, { $set: updatedParams });
        res.status(200).json({ status: 200, msg: "Commentaire mis à jour!!!!" });
        break;

      case "DELETE":
        // Suppression d'un commentaire par son identifiant
        await db.collection("comments").deleteOne({ _id: new ObjectId(idComment) });
        res.status(204).end();
        break;

      default:
        res.status(400).json({ status: 400, msg: "Méthode non trouvée" });
        break;
    }
  } catch (error) {
    console.error("Error processing comment request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
