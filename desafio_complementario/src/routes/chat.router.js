
import express from "express";
import FileManager from "../data/classes/DBManager.js";

const router = express.Router();
const chatFileManager = new FileManager.CartFileManager();

router.get("/", (req, res) => {
try {
  const chat = chatFileManager.read();
  console.log("desde el servidor");
  res.render("chat", {});
} catch (err) {
  res.status(500).send(err.message);
}
});


router.post("/", (req, res) => {
try {
  const chat = req.body;
  const newChat = chatFileManager.create(chat);
  res.status(201).json(newChat);
} catch (err) {
  res.status(500).send(err.message);
}
});

export default router;
