const ProductManager = require("./productManager");


const product = {
  /*
  id: Math.floor(Math.random() * 100),
  */

  id: 1,
  title: "Producto de prueba",
  description: "Este es un producto de prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
};
const product2 = {
  id: 2,
  title: "Producto 2",
  description: "Este es un producto 2",
  price: 200,
  thumbnail: "Sin imagen 2",
  code: "123edfe",
  stock: 25,
};
const productManager = new ProductManager([], "users.json");

const runAwait = async () => {
  await productManager.addUser(product);
  await productManager.addUser(product2);

  console.log("===============================================");

  const products = await productManager.getproducts();
  console.log("getproducts", products);

  console.log("===============================================");

  const productFilter = await productManager.getProductById(1);
  console.log("filterProducts", productFilter);
  console.log("===============================================");
  await productManager.deleteProductById(1);
  await productManager.updateProduct(2);
  const products2 = await productManager.getproducts();
  console.log("getproducts222", products2);
};

runAwait();

