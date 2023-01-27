
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

export default router;
