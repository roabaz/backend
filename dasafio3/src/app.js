import express from "express";
const app = express();

import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method
const products = require("../../desafio2/products.json") // use the json

app.get("/products", (req, res) => {
  if(req.query.limit){
    res.json(products.slice(req.query.start || 0,req.query.limit));
  }else{
    res.json(products);
  }
  });

app.get("/products/:id", (req, res) => {
  const product = products.find((u) => (u.id === parseInt(req.params.id)));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "producto no encontrado" });
  }
});

app.listen(8080, () => {
  console.log("Servidor arriba en puerto 8080",`http://localhost:8080/products`);
});
