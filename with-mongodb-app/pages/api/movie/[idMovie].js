// pages/api/movie/[idMovie].js
import { ObjectId } from "mongodb";


export default async function handler(req, res) {
  const idMovie = req.query.idMovie;
  const client = await clientPromise;
  const db = client.db("sample_mflix");

  try {
    let dbMovie;

    switch (req.method) {
      case "GET":
        dbMovie = await db.collection("movies").findOne({ _id: new ObjectId(idMovie) });
        res.status(200).json({ status: 200, data: { movie: dbMovie } });
        break;

      case "POST":
        const bodyParams = req.body;
        const result = await db.collection("movies").insertOne(bodyParams);
        dbMovie = await db.collection("movies").findOne({ _id: result.insertedId });
        res.status(201).json({ status: 201, data: dbMovie });
        break;

      case "PUT":
        const updatedParams = req.body;
        await db.collection("movies").updateOne({ _id: new ObjectId(idMovie) }, { $set: updatedParams });
        dbMovie = await db.collection("movies").findOne({ _id: new ObjectId(idMovie) });
        res.status(200).json({ status: 200, data: dbMovie });
        break;

      case "DELETE":
        await db.collection("movies").deleteOne({ _id: new ObjectId(idMovie) });
        res.status(204).end();
        break;

      default:
        res.status(400).json({ status: 400, msg: "HTTP METHOD NOT FOUND" });
        break;
    }
  } catch (error) {
    console.error("Error processing movie request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
