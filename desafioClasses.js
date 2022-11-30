class ProductManager {
  constructor() {
    this.Products = [];
  }

  getProducts() {
    return this.Products;
  }

  getProductById(id) {
    if (this.Products.find((evento) => evento.id === id)) {
      return this.Products;
    } else {
      console.log("Error producto no encontrado");
    }
  }

  updateProduct(id) {
    this.Products.map((element, i) => {
      if (element.id === id) {
        element.title = "Producto en SALE";
        return element;
      }
    });
  }

  deleteProduct(id) {
    console.log("Productos antes de eliminar:", this.Products);
    const objdIndex = this.Products.findIndex((element) => element.id === id);
    if (this.Products.find((evento) => evento.id === id)) {
      this.Products.splice(objdIndex, 1);
    } else {
      console.log("no existe el producto");
    }
  }

  addProduct() {
    let newProduct = {
      id: randomCode,
      title: "Producto de prueba",
      description: "Este es un producto de prueba",
      price: 200,
      thumbnail: "Sin imagen",
      code: "abc123",
      stock: 25,
    };
    if (this.Products.find((evento) => evento.code === newProduct.code)) {
      console.log("Producto con codigo ya agregado");
    } else {
      randomCode++;
      this.Products.push(newProduct);
    }
  }
}
let randomCode = 0;

console.log("---------------------------------------------------");

//!Array vacio
//Crea el objeto
const ProductManager1 = new ProductManager();
//Muestra los productos
console.log("Productos:", ProductManager1.getProducts());

console.log("---------------------------------------------------");

//!Array con un producto
//Crea el objeto
const ProductManager2 = new ProductManager();
//Agrega los productos
ProductManager2.addProduct();
//Muestra los productos
console.log("Se agrego el siguiente producto:", ProductManager2.getProducts());

console.log("---------------------------------------------------");

//!Array con producto duplicado
//Crea el objeto
const ProductManager3 = new ProductManager();
//Agrega los productos
ProductManager3.addProduct();
ProductManager3.addProduct();
//Muestra los productos
console.log("Producto duplicado:", ProductManager3.getProducts());

console.log("---------------------------------------------------");

//!Buscar producto por id
//Crea el objeto
const ProductManager4 = new ProductManager();
ProductManager4.addProduct();
//Encuentra el producto
console.log(
  "Se encontro el siguiente producto:",
  ProductManager4.getProductById(2)
);
//No encuentra el producto
console.log(ProductManager4.getProductById(3));

console.log("---------------------------------------------------");

//!Updatear Producto
const ProductManager5 = new ProductManager();
ProductManager5.addProduct();
ProductManager5.updateProduct(3);
console.log(
  "Se actualizo el siguiente producto:",
  ProductManager5.getProducts()
);

console.log("---------------------------------------------------");

//!Updatear Producto
ProductManager5.deleteProduct(3);
console.log("Productos luego de eliminar:", ProductManager5.getProducts());
console.log("---------------------------------------------------");
