// backend/server.js
import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

// Connexion MongoDB (adresse du service Docker)
mongoose
  .connect("mongodb://mongo:27017/mydb")
  .then(() => console.log("✅ Connecté à MongoDB"))
  .catch((err) => console.error("❌ Erreur Mongo:", err));

app.get("/", (req, res) => {
  res.send("Backend en ligne 🚀");
});

app.listen(5000, () => console.log("Serveur sur le port 5000"));
