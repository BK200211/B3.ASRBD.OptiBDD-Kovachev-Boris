// pages/api/movie/comment/[idComment].js

import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const idComment = req.query.idComment;
  const client = await clientPromise;
  const db = client.db("sample_mflix");

  try {
    switch (req.method) {
      case "GET":
        const comment = await db.collection("comments").findOne({ _id: new ObjectId(idComment) });
        res.status(200).json({ status: 200, data: comment });
        break;

      case "POST":
        const bodyParams = req.body;
        const result = await db.collection("comments").insertOne(bodyParams);
        const newComment = await db.collection("comments").findOne({ _id: result.insertedId });
        res.status(201).json({ status: 201, data: newComment });
        break;

      case "PUT":
        const updatedParams = req.body;
        await db.collection("comments").updateOne({ _id: new ObjectId(idComment) }, { $set: updatedParams });
        const updatedComment = await db.collection("comments").findOne({ _id: new ObjectId(idComment) });
        res.status(200).json({ status: 200, data: updatedComment });
        break;

      case "DELETE":
        await db.collection("comments").deleteOne({ _id: new ObjectId(idComment) });
        res.status(204).end();
        break;

      default:
        res.status(400).json({ status: 400, msg: "HTTP METHOD NOT FOUND" });
        break;
    }
  } catch (error) {
    console.error("Error processing comment request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
