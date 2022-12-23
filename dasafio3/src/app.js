import express from "express";
const app = express();







app.listen(8080, () => {
  console.log("Servidor arriba en puerto 8080",`http://localhost:8080/products`);
});
