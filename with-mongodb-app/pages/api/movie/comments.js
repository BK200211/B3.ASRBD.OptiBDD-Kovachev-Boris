// Importez les dépendances nécessaires
import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const idMovie = req.query.idMovie;

  const client = await clientPromise;
  const db = client.db("sample_mflix");

  switch (req.method) {
    case "GET":
      try {
        const comments = await db.collection("comments").find({ movieId: idMovie }).toArray();
        res.json({ status: 200, data: comments });
      } catch (error) {
        res.json({ status: 400, data: "ERREUR SERVEUR!!!" });
      }
      break;

    case "POST":
      try {
        const { text, userId } = req.body;
        const newComment = {
          movieId: idMovie,
          text,
          userId,
          createdAt: new Date()
        };
        const dbReturn = await db.collection("comments").insertOne(newComment);
        res.json({ status: 200, data: dbReturn.ops[0] });
      } catch (error) {
        res.json({ status: 400, data: "ERREUR SERVEUR!!!" });
      }
      break;

    default:
      res.json({ status: 400, msg: "HTTP METHOD NOT FOUND" });
      break;
  }
}
