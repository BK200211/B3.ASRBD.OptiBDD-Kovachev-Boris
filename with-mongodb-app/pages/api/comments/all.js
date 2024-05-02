// pages/api/comments/all.js

import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("sample_mflix");

  try {
    // Recherche de tous les commentaires dans la collection "comments"
    const comments = await db.collection("comments").find({}).toArray();

    res.status(200).json({ status: 200, data: comments });
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
