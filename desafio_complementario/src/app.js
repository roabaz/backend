import express from "express";
import mongoose from "mongoose";
import { Server } from "socket.io";
import { engine } from "express-handlebars";
import viewsRoute from "./routes/chat.router.js";
import productRouter from "./routes/product.router.js";
import cartRouter from "./routes/cart.router.js";
const PORT = 3001;
const app = express();
const messages = [];
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World! go to chat <a href='http://localhost:3001/views'>http://localhost:3001/views</a>");
});
app.use("/products", productRouter);
app.use("/carts", cartRouter);

const httpServer = app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
  console.log("iniciado con socket.io");
});

const socketServer = new Server(httpServer);
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");
app.use(express.static("public"));

app.post("/socketMessage", (req, res) => {
  const { message } = req.body;

  socketServer.emit("message", message);

  res.send("ok");
});

app.use("/views", viewsRoute);
app.get("/messages", (req, res) => {
  res.json(messages);
});

socketServer.on("connection", (socket) => {
  console.log("Nuevo cliente conectado!");
  socket.on("new-user", (data) => {
    socket.user = data.user;
    socket.id = data.id;
    socketServer.emit("new-user-connected", {
      user: socket.user,
      id: socket.id,
    });
  });
  socket.on("message", (data) => {
    messages.push(data);
    socketServer.emit("messageLogs", messages);
  });
});


mongoose.connect(
  "mongodb+srv://robazter:coder123@ecommerce.agaextg.mongodb.net/ecommerce?retryWrites=true&w=majority",
  (error) => {
    if (error) {
      console.log("Error de conexion");
      process.exit();
    } else {
      console.log("Conectado a la base de datos");
    }
  }
);
